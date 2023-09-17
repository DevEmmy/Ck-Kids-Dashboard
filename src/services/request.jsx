import axios from "axios";
import { notify, notifyError } from "./toastify";
import { parse } from "cookie";
//"https://ck-onboarding.onrender.com";
const api = "https://ck-onboarding.onrender.com";

const getCookie = () => {};

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

export const fetchFromLS = () => {
  let student = JSON.parse(localStorage.getItem("student"));
  console.log(student);
  return student;
};

export const uploadCollection = async (
  title,
  description,
  category,
  ageRange,
  cover,  
) => {
  await axios
    .post(
      `${api}/collection`,
      {
        title,
        description,
        category,
        cover,
        ageRange
      },
      { withCredentials: true }
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
    .get(`${api}/collections`, { withCredentials: true })
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
    .post(`${api}/video`, data, { withCredentials: true })
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
    })
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
      { withCredentials: true }
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
  await axios
    .post(
      `${api}/upload-student`,
      { formData },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
  videoId,
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
    .post(`${api}/video/update/${videoId}`, data, { withCredentials: true })
    .then((response) => {
      console.log(response);
      notify(response.data.message);
    })
    .catch((err) => {
      // notifyError(err.response.data.message);
      console.log(err);
    });
};
