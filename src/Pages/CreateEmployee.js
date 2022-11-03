import React from "react";
import { Form } from "react-router-dom";

const CreateEmployee = () => {
  return (
    <div>
      CreateEmployee
      <Form method="post" action="/events">
        <input type="text" name="title" />
        <input type="text" name="description" />
        <button type="submit">Create</button>
      </Form>
    </div>
  );
};

export default CreateEmployee;
