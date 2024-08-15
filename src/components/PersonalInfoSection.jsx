import { useState } from "react";

const PersonalInfoSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <p> {name} </p>
      <MyInput label={"name"} value={name} handleChange={handleNameChange} />
    </>
  );
};

function MyInput({ label, value, handleChange, type = "text" }) {
  return (
    <label htmlFor={label}>
      {label}
      <input type={type} id={label} value={value} onChange={handleChange} />
    </label>
  );
}
export default PersonalInfoSection;
