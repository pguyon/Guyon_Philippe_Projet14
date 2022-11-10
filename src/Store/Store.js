import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./Slice/EmployeeSlice";

const store = configureStore({
  reducer: { employee: employeeSlice.reducer },
});



export default store;