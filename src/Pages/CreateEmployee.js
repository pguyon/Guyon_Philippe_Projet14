import React, { useState, useEffect } from "react";
import "../Styles/CreateEmployee.css";
import { States, Departments } from "../Mocked/MockedData";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../Store/Slice/EmployeeSlice";
import { useNavigate } from "react-router-dom";
import InputDate from "../components/InputDate";
import InputSelected from "../components/InputSelected";
import { Modal } from "pg-react-modal";
import useModal from "pg-react-modal/dist/hooks/useModal";
import {
  textIsValid,
  lengthIsValid,
  errorTextMessage,
  errorEmptyMessage,
  compareDate,
} from "../Utils/Utils";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const { open, toggle } = useModal();
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

  const [send, setSend] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Creating a new employee object with the values from the form. */
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
  };

  useEffect(() => {
    /* Checking if the form is filled in. */
    if (
      dateOfBirth < startDate &&
      textIsValid(firstName) &&
      textIsValid(lastName) &&
      textIsValid(city) &&
      textIsValid(street) &&
      lengthIsValid(dateOfBirth) &&
      lengthIsValid(startDate) &&
      lengthIsValid(zipCode)
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
              {errorTextMessage(firstName)}
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
              {errorTextMessage(lastName)}
            </label>

            <div className="label">
              <InputDate
                name="dateOfBirth"
                id="dateOfBirth"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              {errorEmptyMessage(dateOfBirth)}
            </div>
            <div className="label">
              <InputDate
                name="startDate"
                id="startDate"
                onChange={(e) => setStartDate(e.target.value)}
              />
              {compareDate(dateOfBirth, startDate)}
            </div>
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
              {errorTextMessage(street)}
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
              {errorTextMessage(city)}
            </label>
            <div className="label">
              <InputSelected
                name="states"
                id="state"
                onChange={(e) => setState(e.target.value)}
                array={States}
              />
              {errorEmptyMessage(state)}
            </div>
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
              {errorEmptyMessage(zipCode)}
            </label>
          </div>
          <div className="field">
            <div className="label">
              <InputSelected
                name="Departement"
                id="Department"
                onChange={(e) => setDepartment(e.target.value)}
                array={Departments}
              />
              {errorEmptyMessage(department)}
            </div>
          </div>
        </div>

        {send === true ? (
          <button type="submit" onClick={toggle}>
            Create
          </button>
        ) : (
          <p>Please fill in the form</p>
        )}
      </form>
      <Modal
        isOpen={open}
        actionButton={() => navigate("/employee")}
        bodyContent="The employee has been created"
        buttonContent="close"
        mainBackground="rgba(0, 0, 0, .25)"
        modalBackground="lightgrey"
        buttonBackground="blue"
        buttonColor="white"
        hide={toggle}
      />
    </section>
  );
};

export default CreateEmployee;
