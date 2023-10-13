import { createSlice } from "@reduxjs/toolkit";
import { fetchFromLS } from "@/services/request";

const initialState = {
  studentDetails: fetchFromLS("student"),
  teacherDetails: fetchFromLS("teacher"),
  schoolDetails: fetchFromLS("school"),
};

export const registerSlice = createSlice({
  name: "resgister",
  initialState,
  reducers: {
    updateStudentDetails: (state, action) => {
      const update = action.payload;
      state.studentDetails = update;
      localStorage.setItem("student", JSON.stringify(update));
      console.log(update);
      window.location.href = "/kids-dashboard";
    },
    logOutStudents: (state, action) => {
      state.studentDetails = "";
      localStorage.clear();
      window.location.href = "/signin";
    },
    updateTeacherDetails: (state, action) => {
      const update = action.payload;
      state.teacherDetails = update;
      localStorage.setItem("teacher", JSON.stringify(update));
      console.log(update);
      window.location.href = "/teachers-dashboard";
    },
    logOutTeachers: (state, action) => {
      state.teacherDetails = "";
      localStorage.clear();
      window.location.href = "/teachers-signin";
    },
    updateSchoolDetails: (state, action) => {
      const update = action.payload;
      state.schoolDetails = update;
      localStorage.setItem("school", JSON.stringify(update));
      console.log(update);
      window.location.href = "/schools-dashboard";
    },
    logOutSchools: (state, action) => {
      state.schoolDetails = "";
      localStorage.clear();
      window.location.href = "/signin";
    },
  },
});

export const {
  updateStudentDetails,
  updateTeacherDetails,
  updateSchoolDetails,
  logOutSchools,
  logOutStudents,
  logOutTeachers,
} = registerSlice.actions;

export default registerSlice.reducer;
