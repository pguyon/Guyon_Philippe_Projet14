import React, { useState } from "react";
import "../Styles/CreateEmployee.css";
import { States, Departments } from "../Mocked/MockedData";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/Slice/EmployeeSlice";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode
    };
    dispatch(addEmployee(newEmployee));
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
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="lastname">
            Lastname
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Date</legend>
          <label htmlFor="birthdate">
            Date of Birth
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
          <label htmlFor="startdate">
            Start Date
            <input
              type="date"
              name="startdate"
              id="startdate"
              onChange={(e) => setStartDate(e.target.value)}
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
              onChange={(e) => setStreet(e.target.value)}
            />
          </label>
          <label htmlFor="city">
            City
            <input
              type="text"
              name="city"
              placeholder="City"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label htmlFor="states">
            States
            <select
              name="states"
              id="state"
              onChange={(e) => setState(e.target.value)}
            >
              {States.map((state) => (
                <option key={state.value}>{state.name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="zipcode">
            City
            <input
              type="number"
              min={1}
              name="zipcode"
              placeholder="ZipCode"
              id="zipcode"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Sector</legend>
          <label htmlFor="Departement">
            Departement
            <select
              name="Departement"
              id="Department"
              onChange={(e) => setDepartment(e.target.value)}
            >
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
