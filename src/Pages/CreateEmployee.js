import React, { useState, useEffect } from "react";
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Firstname is required";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }
    if (!values.startDate) {
      errors.startDate = "Start date is required";
    } else if (values.dateOfBirth > values.startDate) {
      errors.startDate =
        "The start date must be greater than the date of birth";
    }
    if (!values.street) {
      errors.street = "Street is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "Zipcode is required";
    }

    return errors;
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
              onChange={handleChange}
            />
            <p className="error">{formErrors.firstName}</p>
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
            <p className="error">{formErrors.lastName}</p>
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
              onChange={handleChange}
            />
            <p className="error">{formErrors.dateOfBirth}</p>
          </label>
          <label htmlFor="startDate">
            Start Date
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={handleChange}
            />
            <p className="error">{formErrors.startDate}</p>
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
              onChange={handleChange}
            />
            <p className="error">{formErrors.street}</p>
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
            <p className="error">{formErrors.city}</p>
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
            <p className="error">{formErrors.zipCode}</p>
          </label>
        </fieldset>
        <fieldset>
          <legend>Sector</legend>
          <label htmlFor="Departement">
            Departement
            <select name="Departement" id="Department" onChange={handleChange}>
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
