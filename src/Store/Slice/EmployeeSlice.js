import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  department: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
};

export const employeeSlice = createSlice({
  name: "Employee",
  initialState,
  reducers: {
    enteredFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    enteredLastName: (state, action) => {
      state.lastName = action.payload;
    },
    enteredDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    enteredStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    enteredDepartment: (state, action) => {
      state.department = action.payload;
    },
    enteredStreet: (state, action) => {
      state.street = action.payload;
    },
    enteredCity: (state, action) => {
      state.city = action.payload;
    },
    enteredState: (state, action) => {
      state.state = action.payload;
    },
    enteredZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
  },
});

export const reducer = employeeSlice.reducer;

export const {
  enteredFirstName,
  enteredLastName,
  enteredDateOfBirth,
  enteredStartDate,
  enteredDepartment,
  enteredStreet,
  enteredCity,
  enteredState,
  enteredZipCode,
} = employeeSlice.actions;
