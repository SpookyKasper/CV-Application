import { useState } from "react";

const CustomInput = ({ fieldName, type = "text", value }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-field">
      <label htmlFor={fieldName}>{fieldName}</label>
      <input type={type} value={value} onChange={handleChange} id={fieldName} />
    </div>
  );
};

export default CustomInput;
