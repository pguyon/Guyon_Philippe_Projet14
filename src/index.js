import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import CreateEmployee from "./Pages/CreateEmployee";
import EmployeeList from "./Pages/EmployeeList";
import Layout from "./Pages/Layout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<CreateEmployee />} />
      <Route path="employee" element={<EmployeeList />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
