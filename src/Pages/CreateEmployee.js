import React, { useState } from "react";
import "../Styles/CreateEmployee.css";
import { States, Departments } from "../Mocked/MockedData";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/Slice/EmployeeSlice";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "Sales",
    street: "",
    city: "",
    state: "Alabama",
    zipCode: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      dateOfBirth: formValues.dateOfBirth,
      startDate: formValues.startDate,
      department: formValues.department,
      street: formValues.street,
      city: formValues.city,
      state: formValues.state,
      zipCode: formValues.zipCode,
    };
    dispatch(addEmployee(newEmployee));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className="form_wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Identity</legend>
          <label htmlFor="firstName">
            Firstname
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="firstname"
              onChange={onChange}
            />
          </label>
          <label htmlFor="lastName">
            Lastname
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="lastname"
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Date</legend>
          <label htmlFor="dateOfBirth">
            Date of Birth
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={onChange}
            />
          </label>
          <label htmlFor="startDate">
            Start Date
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <label htmlFor="street">
            Street
            <input
              type="text"
              name="street"
              placeholder="Street"
              id="street"
              onChange={onChange}
            />
          </label>
          <label htmlFor="city">
            City
            <input
              type="text"
              name="city"
              placeholder="City"
              id="city"
              onChange={onChange}
            />
          </label>
          <label htmlFor="states">
            States
            <select name="states" id="state" onChange={onChange}>
              {States.map((state) => (
                <option key={state.value}>{state.name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="zipCode">
            City
            <input
              type="number"
              min={1}
              name="zipCode"
              placeholder="ZipCode"
              id="zipCode"
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Sector</legend>
          <label htmlFor="Departement">
            Departement
            <select name="Departement" id="Department" onChange={onChange}>
              {Departments.map((department) => (
                <option key={department.value}>{department.name}</option>
              ))}
            </select>
          </label>
        </fieldset>

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateEmployee;
