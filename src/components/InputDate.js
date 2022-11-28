import React from "react";

const InputDate = ({ id, name, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="font-bold">
        {name}
      </label>
      <input type="date" id={id} name={name} onChange={onChange} required />
    </div>
  );
};

export default InputDate;
