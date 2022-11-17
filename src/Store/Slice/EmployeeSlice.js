import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../Mocked/MockedData";

export const employeeSlice = createSlice({
  name: "Employee",
  initialState: { value: Employee },
  reducers: {
    addEmployee(state, action) {
      state.value.push(action.payload);
    },
  },
});

export const reducer = employeeSlice.reducer;

export const { addEmployee } = employeeSlice.actions;
