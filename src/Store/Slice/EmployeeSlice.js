import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [],
};

export const employeeSlice = createSlice({
  name: "Employee",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employee.push(action.payload);   
    },
  },
});

export const reducer = employeeSlice.reducer;

export const { addEmployee } = employeeSlice.actions;
