import React, { useState, useEffect } from "react";
import "../Styles/CreateEmployee.css";
import { States, Departments } from "../Mocked/MockedData";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Store/Slice/EmployeeSlice";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

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

  const [isSubmit, setIsSubmit] = useState(false);
  const [send, setSend] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

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
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      formValues.firstName.length > 0 &&
      formValues.lastName.length > 0 &&
      formValues.dateOfBirth.length > 0 &&
      formValues.startDate.length > 0 &&
      formValues.city.length > 0 &&
      formValues.street.length > 0 &&
      formValues.zipCode.length > 0 &&
      formValues.dateOfBirth < formValues.startDate
    ) {
      setSend(true);
    } else {
      setSend(false);
    }
  }, [
    formValues.firstName,
    formValues.lastName,
    formValues.dateOfBirth,
    formValues.startDate,
    formValues.city,
    formValues.street,
    formValues.zipCode,
    send,
  ]);

  useEffect(() => {
    if (isSubmit) {
      confirmAlert({        
        customUI: () => {
          return (
            <div className="custom-ui">
              <h1>Employee create !</h1>
              <button onClick={() => navigate("/employee")}>
                Go to employee's list
              </button>
            </div>
          );
        },
      });
    }
  }, [isSubmit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className="form_wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form_logo" />
        <div className="form_container">
          <div className="field">
            <label htmlFor="firstName">
              Firstname
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="firstname"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="lastName">
              Lastname
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="lastname"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="dateOfBirth">
              Date of Birth
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="startDate">
              Start Date
              <input
                type="date"
                name="startDate"
                id="startDate"
                onChange={handleChange}
              />
              {formValues.dateOfBirth >= formValues.startDate ? (
                <p className="error">
                  The start date must be greater than the date of birth
                </p>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="field">
            <label htmlFor="street">
              Street
              <input
                type="text"
                name="street"
                placeholder="Street"
                id="street"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="city">
              City
              <input
                type="text"
                name="city"
                placeholder="City"
                id="city"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="states">
              States
              <select name="states" id="state" onChange={handleChange}>
                {States.map((state) => (
                  <option key={state.value}>{state.name}</option>
                ))}
              </select>
            </label>
            <label htmlFor="zipCode">
              ZipCode
              <input
                type="number"
                min={1}
                name="zipCode"
                placeholder="ZipCode"
                id="zipCode"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="Departement">
              Departement
              <select
                name="Departement"
                id="Department"
                onChange={handleChange}
              >
                {Departments.map((department) => (
                  <option key={department.value}>{department.name}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {send === true ? (
          <button type="submit">Create</button>
        ) : (
          <p>Please fill in the form</p>
        )}
      </form>
    </section>
  );
};

export default CreateEmployee;
