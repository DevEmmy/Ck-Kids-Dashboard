import axios from "axios";
import { notify, notifyError } from "./toastify";
import { parse } from "cookie";
//"https://ck-onboarding.onrender.com";
const api = "http://localhost:4030"
const kidsDashboard = "https://ck-onboarding.onrender.com";

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

export const schoolLogin = (email, password) => {
  axios
    .post(`${api}/school/sign-in`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      notify(response.data.message);
    })
    .catch((err) => {
      notifyError(err.response.data.message);
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
  cover,
  classId
) => {
  await axios
    .post(
      `${api}/collection`,
      {
        title,
        description,
        category,
        cover,
        class: "6501943d9df5e3c94892ace6",
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
  description,
  collection
) => {
  let data = { name:courseName, link:courseLink, collectionRelation: collection, cover:collectionPhoto, description }
  console.log(data)

  await axios
    .post(
      `${api}/video`,
      data,
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

export const getAllVideos = async ()=>{
   let data = []
  await axios.get(`${api}/videos`)
  .then((response) => {
    data = response.data.payload;
  })
  .catch((err) => {
    notifyError(err.response.data.message);
    console.log(err);
    data = []
  });

  return data;
}