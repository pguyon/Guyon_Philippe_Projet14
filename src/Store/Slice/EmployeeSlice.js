import { createSlice } from "@reduxjs/toolkit";
// import { Employee } from "../../Mocked/MockedData";

const initialState = {
  employee: [],
};

export const employeeSlice = createSlice({
  name: "Employee",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employee.push(action.payload);
    //   console.log(action);
    //   console.log(state.employee);
    },
  },
});

export const reducer = employeeSlice.reducer;

export const { addEmployee } = employeeSlice.actions;
