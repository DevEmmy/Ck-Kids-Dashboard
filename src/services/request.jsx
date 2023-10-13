import axios from "axios";
import { notify, notifyError } from "./toastify";
import { parse } from "cookie";
import {
  updateStudentDetails,
  updateTeacherDetails,
  updateSchoolDetails,
} from "@/redux/features/register/registerSlice";
//"http://localhost:4030";

const api = "https://ck-onboarding.onrender.com";

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null; // Return null if the cookie is not found
}

const setConfig = () => {
  const authToken = getCookie("token");

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ContentType: "application/x-www-form-urlencoded",
    },
    withCredentials: true,
  };

  return config;
};

export const studentLogin = async (dispatch, email, password) => {
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
      document.cookie = "token=" + response.data.payload.token;
      if (response.data.payload) {
        console.log("dispatching-student-login");
        dispatch(updateStudentDetails(response.data.payload));
      }
      notify(response.data.message);
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

export const adminLogin = async (email, password, router) => {
  await axios
    .post(
      `${api}/admin/sign-in`,
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
      const { admin } = response.data.payload;
      console.log(response.data.payload.token);
      document.cookie = "token=" + response.data.payload.token;
      localStorage.setItem("admin", JSON.stringify(admin));
      console.log(admin);
      router.push("/admin-dashboard");

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

export const studentForgotPassword = async (email) => {
  await axios
    .post(`${api}/student/forgot-password`, { email }, setConfig())
    .then((response) => {
      console.log(response);
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

export const schoolForgotPassword = async (email) => {
  await axios
    .post(`${api}/school/forgot-password`, { email }, setConfig())
    .then((response) => {
      console.log(response);
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

export const teacherForgotPassword = async (email) => {
  await axios
    .post(`${api}/teacher/forgot-password`, { email }, setConfig())
    .then((response) => {
      console.log(response);
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

export const updateStudentPassword = async (token, password) => {
  await axios
    .post(`${api}/student/reset-password`, { token, password }, setConfig())
    .then((response) => {
      console.log(response);
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

export const updateSchoolPassword = async (token, password) => {
  await axios
    .post(`${api}/school/reset-password`, { token, password }, setConfig())
    .then((response) => {
      console.log(response);
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

export const updateTeacherPassword = async (token, password) => {
  await axios
    .post(`${api}/teacher/reset-password`, { token, password }, setConfig())
    .then((response) => {
      console.log(response);
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
      if (response.data.payload) {
        console.log("dispatching-teacher-login");
        dispatch(updateTeacherDetails(response.data.payload));
      }      
      document.cookie = "token=" + response.data.payload.token;                  
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

export const schoolLogin = async (dispatch, email, password) => {
  await axios
    .post(`${api}/school/sign-in`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.payload) {
        console.log("dispatching-school-login");
        dispatch(updateSchoolDetails(response.data.payload));
      }
      document.cookie = "token=" + response.data.payload.token;

      // notify(response.data.message);
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
  dispatch,
  fullName,
  email,
  productKey,
  password
) => {
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
        console.log("dispatching-student");
        dispatch(updateStudentDetails(response.data.payload));
      }
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

export const schoolRegister = async (dispatch, schoolName, email, password) => {
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
        console.log("dispatching-school");
        dispatch(updateSchoolDetails(response.data.payload));
      }
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

export const getMyDetails = async () => {
  let student = {};
  await axios
    .get(`${api}/student/`, {
      withCredentials: true,
    })
    .then((response) => {
      student = response.data.payload;
      localStorage.setItem("student", JSON.stringify(student));
      // notify(response.data.message);
    })
    .catch((err) => {
      if (err.response) {
        // notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
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
  try {
    const data = localStorage.getItem(user);
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error fetching data from localStorage:", error);
  }
  return "";
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
      if (err.response) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
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
      if (err.response) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
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
  collection,
  isTeacher
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

  let url = !isTeacher ? `${api}/video` : `${api}/video?teacher=true`;

  await axios
    .post(url, data, setConfig())
    .then((response) => {
      console.log(response);
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

export const getAllVideos = async () => {
  let data = [];
  await axios
    .get(`${api}/videos`)
    .then((response) => {
      data = response.data.payload;
    }, setConfig())
    .catch((err) => {
      if (err.response) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
      data = [];
    });

  return data;
};

export const onBoardTeacher = async (dispatch, firstName, lastName, email) => {
  await axios
    .post(`${api}/teacher/sign-up`, { firstName, lastName, email }, setConfig())
    .then((response) => {
      if (response.data.payload) {
        console.log("dispatching-teacher-login");
        dispatch(updateTeacherDetails(response.data.payload));
      }
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

export const uploadData = async (formData) => {
  const authToken = getCookie("token");
  await axios
    .post(`${api}/upload-student`, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
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

export const uploadVideoData = async (formData, isTeacher) => {
  const authToken = getCookie("token");
  let url = isTeacher
    ? `${api}/videos/bulk-upload-2?teacher=true`
    : `${api}/videos/bulk-upload-2`;
  await axios
    .post(url, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
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
      // notify(response.data.message);
    })
    .catch((err) => {
      if (err.response) {
        // notifyError(err.response.data.message);
      } else {
        // notifyError("Network Error");
      }
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
      if (err.response) {
        // notifyError(err.response.data.message);
      } else {
        // notifyError("Network Error");
      }
      console.log(err);
    });
};

export const getStudents = async () => {
  let students;
  await axios
    .get(`${api}/students/all`, setConfig())
    .then((response) => {
      console.log(response);
      students = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
        // notifyError(err.response.data.message);
      } else {
        // notifyError("Network Error");
      }
      console.log(err);
    });

  return students;
};

export const getVideoById = async (id) => {
  let video;
  await axios
    .get(`${api}/video/${id}`, setConfig())
    .then((response) => {
      console.log(response.data);
      video = response.data.payload;
      // notify(response.data.message);
    })
    .catch((err) => {
      if (err.response) {
        // notifyError(err.response.data.message);
      } else {
        // notifyError("Network Error");
      }
      console.log(err);
    });

  return video;
};

export const bulkUploadOfVideos = async (videos, ageRange, category) => {
  await axios
    .post(
      `${api}/videos/bulk-upload`,
      { videos, ageRange, category },
      setConfig()
    )
    .then((response) => {
      console.log(response.data);
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

export const watchVideoRequest = async (id) => {
  await axios
    .patch(`${api}/video/watch/${id}`, {}, setConfig())
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      if (err.response) {
        // notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const viewVideoRequest = async (id) => {
  await axios
    .patch(`${api}/video/view/${id}`, {}, setConfig())
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      if (err.response) {
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const completeVideoRequest = async (id) => {
  await axios
    .patch(`${api}/video/complete/${id}`, {}, setConfig())
    .then((response) => {
      console.log(response.data);
      let student = response.data.payload;
      localStorage.setItem("student", JSON.stringify(student));
      console.log("Course Completed");
    })
    .catch((err) => {
      if (err.response) {
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const getFilteredCourses = async (ageRange, category) => {
  console.log({
    ageRange,
    category,
  });
  let data;
  await axios
    .post(`${api}/videos/query`, { ageRange, category }, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getTeachers = async () => {
  let data = [];

  await axios
    .get(`${api}/teachers/all-by-admin`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getSchoolDetails = async () => {
  let data;

  await axios
    .get(`${api}/schools/details`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getLB = async () => {
  let data;

  await axios
    .get(`${api}/students/leadership`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getAdminDetails = async () => {
  let data = [];

  await axios
    .get(`${api}/admin/details`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getAllSchools = async () => {
  let data = [];

  await axios
    .get(`${api}/schools/all`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getTeachersBySchool = async ({ id }) => {
  let data = [];

  await axios
    .get(`${api}/admin/teachers/${id}`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getStudentsBySchool = async ({ id }) => {
  let data = [];

  await axios
    .get(`${api}/admin/students/${id}`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const GetAllBadges = async () => {
  let data = [];

  await axios
    .get(`${api}/badges/all`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const getABadge = async (id) => {
  let data = [];

  await axios
    .get(`${api}/badge/${id}`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
    })
    .catch((err) => {
      if (err.response) {
      } else {
      }
      console.log(err);
    });

  return data;
};

export const CreateBadge = async (
  title,
  description,
  numberOfVideos,
  numberOfGems,
  publish,
  minAge,
  maxAge
) => {
  let data = {
    title,
    description,
    numberOfVideos,
    numberOfGems,
    public: publish,
    minAge,
    maxAge,
  };

  await axios
    .post(`${api}/badge`, data, setConfig())
    .then((response) => {
      console.log(response);
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

export const updateBadge = async (
  id,
  title,
  description,
  numberOfVideos,
  numberOfGems,
  publish,
  minAge,
  maxAge
) => {
  let data = {
    title,
    description,
    numberOfVideos,
    numberOfGems,
    public: publish,
    minAge,
    maxAge,
  };

  await axios
    .patch(`${api}/badge/${id}`, data, setConfig())
    .then((response) => {
      console.log(response);
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

export const deleteBadge = async (id) => {
  let data = [];

  await axios
    .delete(`${api}/badge/${id}`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
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

  return data;
};

export const deleteStudent = async (id) => {
  let data = [];

  await axios
    .delete(`${api}/student/${id}`, setConfig())
    .then((response) => {
      console.log(response);
      data = response.data.payload;
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

  return data;
};
