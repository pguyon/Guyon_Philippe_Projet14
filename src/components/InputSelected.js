import React from "react";

const InputSelected = ({ id, name, onChange, array , className}) => {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <select name={name} id={id} onChange={onChange} array={array}>
        {array.map((item) => (
          <option key={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelected;
