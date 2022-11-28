import React from "react";

const InputDate = ({ id, name, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>
        {name}
      </label>
      <input type="date" id={id} name={name} onChange={onChange} required />
    </div>
  );
};

export default InputDate;
