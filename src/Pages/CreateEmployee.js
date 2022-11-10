import React from "react";
import "../Styles/CreateEmployee.css";
import { States, Departments } from "../Mocked/MockedData";
import { useDispatch, useSelector } from "react-redux";
import { enteredFirstName } from "../Store/Slice/EmployeeSlice";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.employee.firstName);
  // const lastName = useSelector((state) => state.employee.lastName);
  // const dateOfBirth = useSelector((state) => state.employee.dateOfBirth);
  // const startDate = useSelector((state) => state.employee.startDate);
  // const department = useSelector((state) => state.employee.department);
  // const street = useSelector((state) => state.employee.street);
  // const city = useSelector((state) => state.employee.city);
  // const state = useSelector((state) => state.employee.state);
  // const zipCode = useSelector((state) => state.employee.zipCode);
 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const firstNameHandler = (e) => {
    dispatch(enteredFirstName(e.target.value));
  };

  console.log(firstName);

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
              onChange={firstNameHandler}
            />
          </label>
          <label htmlFor="lastname">
            Lastname
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="lastname"
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Date</legend>
          <label htmlFor="birthdate">
            Date of Birth
            <input type="date" name="birthdate" id="birthdate" />
          </label>
          <label htmlFor="startdate">
            Start Date
            <input type="date" name="startdate" id="startdate" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <label htmlFor="street">
            Street
            <input type="text" name="street" placeholder="Street" id="street" />
          </label>
          <label htmlFor="city">
            City
            <input type="text" name="city" placeholder="City" id="city" />
          </label>
          <label htmlFor="states">
            States
            <select name="states" id="state">
              {States.map((state) => (
                <option key={state.value}>{state.name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="zipcode">
            City
            <input
              type="text"
              name="zipcode"
              placeholder="ZipCode"
              id="zipcode"
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Sector</legend>
          <label htmlFor="Departement">
            Departement
            <select name="Departement" id="Department">
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
