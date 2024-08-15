import { useState } from "react";
import CustomForm from "./CustomForm";
import PersonalInfo from "./PersonalInfo";
import SubmitEditBtn from "./SubmitEditBtn";

const PersonalInfoSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleSubmitEdit = () => {
    isSubmitted ? setIsSubmitted(false) : setIsSubmitted(true);
  };

  const inputObjects = [
    { name: "name", value: name, handleChange: handleNameChange },
    {
      name: "email",
      value: email,
      handleChange: handleEmailChange,
      type: "email",
    },
    {
      name: "tel",
      value: phoneNum,
      handleChange: handlePhoneChange,
      type: "tel",
    },
  ];

  const mainContent = isSubmitted ? (
    <PersonalInfo name={name} email={email} phone={phoneNum} />
  ) : (
    <CustomForm inputObjects={inputObjects} />
  );

  return (
    <>
      <h1>Personal Information</h1>
      {mainContent}
      <SubmitEditBtn
        isSubmitted={isSubmitted}
        handleSubmitEdit={handleSubmitEdit}
      />
    </>
  );
};

export default PersonalInfoSection;
