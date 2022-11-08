import React from "react";
import "../Styles/CreateEmployee.css";

const CreateEmployee = () => {
  return (
    <section className="form_wrapper">
      <form>
       
          <label>
            Firstname
            <input type="text" name="firstname" placeholder="firstname" />
          </label>
          <label>
            Lastname
            <input type="text" name="lastname" placeholder="lastname" />
          </label>
       

        
          <label>
            Date of Birth
            <input type="date" name="date of birth" />
          </label>
          <label>
            Start Date
            <input type="date" name="start date" />
          </label>
        

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateEmployee;
