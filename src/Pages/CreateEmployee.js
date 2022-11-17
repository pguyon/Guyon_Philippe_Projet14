import React, { useState, useEffect } from "react";
import "../Styles/CreateEmployee.css";
import { States, Departments } from "../Mocked/MockedData";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../Store/Slice/EmployeeSlice";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employee.value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");



  const [isSubmit, setIsSubmit] = useState(false);
  const [send, setSend] = useState(false);  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employeeList[employeeList.length - 1].id + 1,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    };

    dispatch(addEmployee(newEmployee));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      dateOfBirth.length > 0 &&
      startDate.length > 0 &&
      city.length > 0 &&
      street.length > 0 &&
      zipCode.length > 0 &&
      dateOfBirth < startDate
    ) {
      setSend(true);
    } else {
      setSend(false);
    }
  }, [
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    city,
    street,
    zipCode,
    send,
  ]);

  useEffect(() => {
    if (isSubmit) {
      confirmAlert({
        customUI: () => {
          return (
            <div className="custom-ui">
              <h1>Employee create !</h1>
              <button
                onClick={() => navigate("/employee")}
                style={{
                  padding: "10px",
                  color: "white",
                  background: "#1DA1F2",
                  marginTop: "5px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Go to employee's list
              </button>
            </div>
          );
        },
      });
    }
  }, [isSubmit, navigate]);



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
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="lastName">
              Lastname
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="lastname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label htmlFor="dateOfBirth">
              Date of Birth
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </label>
            <label htmlFor="startDate">
              Start Date
              <input
                type="date"
                name="startDate"
                id="startDate"
                onChange={(e) => setStartDate(e.target.value)}
              />
              {dateOfBirth >= startDate ? (
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
            <label htmlFor="zipCode">
              ZipCode
              <input
                type="number"
                min={1}
                name="zipCode"
                placeholder="ZipCode"
                id="zipCode"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </label>
          </div>
          <div className="field">
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
