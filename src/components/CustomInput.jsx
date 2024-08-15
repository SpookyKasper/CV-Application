import _ from "lodash";

const CustomInput = ({ name, value, handleChange, type = "text" }) => {
  return (
    <label htmlFor={name}>
      {_.startCase(name)}
      <input type={type} id={name} value={value} onChange={handleChange} />
    </label>
  );
};

export default CustomInput;
