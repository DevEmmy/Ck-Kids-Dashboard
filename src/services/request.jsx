import axios from "axios";
import { notify, notifyError } from "./toastify";
import { parse } from "cookie";
//"http://localhost:4030";

const api = "https://ck-onboarding.onrender.com";

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null; // Return null if the cookie is not found
}


const setConfig = () => {
  const authToken = getCookie("token")

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ContentType: "application/x-www-form-urlencoded",
    },
    withCredentials: true
  };

  return config;
};

export const studentLogin = async (email, password, router) => {
  await axios
    .post(
      `${api}/student/sign-in`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
        credentials: "include",
      }
    )
    .then((response) => {
      console.log(response);
      const { student } = response.data.payload;
      console.log(response.data.payload.token);
      document.cookie = "token=" + response.data.payload.token;
      localStorage.setItem("student", JSON.stringify(student));
      console.log(student);
      router.push("/kids-dashboard");

      notify(response.data.message);
      // window.location.href = "/kids-dashboard"
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const teacherLogin = async (email, password, router) => {
  await axios
    .post(
      `${api}/teacher/sign-in`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log(response);
      const { teacher } = response.data.payload;
      console.log(response.data.payload.token);
      document.cookie = "token=" + response.data.payload.token;
      localStorage.setItem("teacher", JSON.stringify(teacher));
      console.log(teacher);
      router.push("/teachers-dashboard");

      notify(response.data.message);
      // window.location.href = "/kids-dashboard"
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const schoolLogin = async (email, password, router) => {
  await axios
    .post(`${api}/school/sign-in`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      const { school } = response.data.payload;
      document.cookie = "token=" + response.data.payload.token;
      localStorage.setItem("school", JSON.stringify(school));

      router.push("/schools-dashboard");

      notify(response.data.message);
    })
    .catch((err) => {
      if (err.response) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const studentRegister = async (
  fullName,
  email,
  productKey,
  password
) => {
  console.log(fullName);
  await axios
    .post(
      `${api}/student/sign-up`,
      {
        email,
        password,
        fullName,
        productKey,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log(response.data);
      notify(response.data.message);
      if (response.data.payload) {
        window.location.href = "/signin";
      }
    })
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
    });
};

export const schoolRegister = async (schoolName, email, password) => {
  await axios
    .post(`${api}/school/sign-up`, {
      email,
      password,
      schoolName,
    })
    .then((response) => {
      console.log(response.data);
      notify(response.data.message);
      if (response.data.payload) {
        window.location.href = "/signin";
      }
    })
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
    });
};

export const getMyDetails = async () => {
  let student = {};
  await axios
    .get(`${api}/student/`, {
      withCredentials: true,
    })
    .then((response) => {
      student = response.data.payload;
      localStorage.setItem("student", JSON.stringify(student));
      notify(response.data.message);
    })
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
    });

  return student;
};

export const logOut = async () => {
  await axios.get(`${api}/logout`, {
    withCredentials: true,
  });
  localStorage.clear();
  document.cookie = "token=" + "";
};

export const fetchFromLS = (user) => {
  let student = JSON.parse(localStorage.getItem(user));
  console.log(student);
  return student;
};

export const uploadCollection = async (
  title,
  description,
  category,
  ageRange,
  cover
) => {
  await axios
    .post(
      `${api}/collection`,
      {
        title,
        description,
        category,
        cover,
        ageRange,
      },
      setConfig()
    )
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
    });
};

export const fetchCollection = async (setCollectionItems) => {
  await axios
    .get(`${api}/collections`, setConfig())
    .then((response) => {
      console.log(response.data.payload);
      setCollectionItems(response.data.payload);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addToCollection = async (
  courseName,
  courseLink,
  collectionPhoto,
  category,
  ageRange,
  description,
  collection
) => {
  let data = {
    name: courseName,
    link: courseLink,
    collectionRelation: collection,
    cover: collectionPhoto,
    category,
    ageRange,
    description,
  };
  console.log(data);

  await axios
    .post(`${api}/video`, data, setConfig())
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
    });
};

export const getAllVideos = async () => {
  let data = [];
  await axios
    .get(`${api}/videos`)
    .then((response) => {
      data = response.data.payload;
    }, setConfig())
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
      data = [];
    });

  return data;
};

export const onBoardTeacher = async (firstName, lastName, email) => {
  await axios
    .post(
      `${api}/teacher/sign-up`,
      { firstName, lastName, email },
      setConfig()
    )
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      notifyError(err.response.data.message);
      console.log(err);
    });
};

export const uploadData = async (formData) => {
  const authToken = getCookie("token")
  await axios
    .post(
      `${api}/upload-student`,
       formData ,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true
      }
    )
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      // notifyError(err.response.data.message);
      console.log(err);
    });
};

export const editVideo = async (
  courseName,
  courseLink,
  courseCover,
  category,
  ageRange,
  description,
  videoId
) => {
  let data = {
    name: courseName,
    link: courseLink,
    cover: courseCover,
    category,
    ageRange,
    description,
  };
  console.log(data);

  await axios
    .patch(`${api}/video/update/${videoId}`, data, setConfig())
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      // notifyError(err.response.data.message);
      console.log(err);
    });
};

export const deleteVideo = async (videoId) => {  
  await axios
    .delete(`${api}/video/delete/${videoId}`, setConfig())
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      // notifyError(err.response.data.message);
      console.log(err);
    });
};

export const getStudents = async ()=>{
  let students;
  await axios.get(`${api}/students/all`,  setConfig())
  .then((response) => {
    console.log(response);
    notify(response.data.message);
    students = response.data.payload;
  })
  .catch((err) => {
    // notifyError(err.response.data.message);
    console.log(err);
  });

  return students
}

export const getVideoById = async (id)=>{
  let video;
  await axios.get(`${api}/video/${id}`,  setConfig())
  .then(response => {
    console.log(response.data);
    video = response.data.payload;
    // notify(response.data.message);
  })
  .catch((err) => {
    // notifyError(err.response.data.message);
    console.log(err);
  });

  return video
}

export const bulkUploadOfVideos =async (videos, ageRange, category)=>{
  await axios.post(`${api}/videos/bulk-upload`, {videos, ageRange, category},  setConfig())
  .then(response => {
    console.log(response.data);
    notify(response.data.message);
  })
  .catch((err) => {
    if(err.response){
      notifyError(err.response.data.message);
    }
    
    console.log(err);
  });
}

export const watchVideoRequest = async (id)=>{
  await axios.patch(`${api}/video/watch/${id}`, {},setConfig())
  .then(response => {
    console.log(response.data);
  })
  .catch((err) => {
    if(err.response){
      
    }
    console.log(err);
  });
}

export const viewVideoRequest = async (id)=>{
  await axios.patch(`${api}/video/view/${id}`, {},  setConfig())
  .then(response => {
    console.log(response.data);
  })
  .catch((err) => {
    if(err.response){
    }
    console.log(err);
  });
}