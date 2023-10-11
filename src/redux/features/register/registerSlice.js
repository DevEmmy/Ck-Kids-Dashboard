import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  studentDetails: {},
  teacherDetails: {},
  schoolDetails: {},
};

export const registerSlice = createSlice({
  name: "resgister",
  initialState,
  reducers: {
    updateStudentDetails: (state, action) => {
      const update = action.payload;
      state.studentDetails = update;
      console.log(update);
      window.location.href = "/kids-dashboard";
    },
    resetStudentDetails: (state, action) => {
      state.studentDetails = initialState.studentDetails;
      window.location.href = "/signin";
    },
    updateTeacherDetails: (state, action) => {
      const update = action.payload;
      state.teacherDetails = update;
      console.log(update);
      window.location.href = "/teachers-dashboard";
    },
    updateSchoolDetails: (state, action) => {
      const update = action.payload;
      state.schoolDetails = update;
      console.log(update);
      window.location.href = "/schools-dashboard";
    },
  },
});

export const {
  updateStudentDetails,
  resetStudentDetails,
  updateTeacherDetails,
  updateSchoolDetails,
} = registerSlice.actions;

export default registerSlice.reducer;
