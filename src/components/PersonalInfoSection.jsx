import { useState } from "react";
import CustomForm from "./CustomForm";
import PersonalInfo from "./PersonalInfo";

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

  const content = () => {
    if (isSubmitted) {
      return (
        <>
          <PersonalInfo name={name} email={email} phone={phoneNum} />
          <button onClick={handleSubmitEdit}>Edit</button>
        </>
      );
    }
    return (
      <>
        <CustomForm inputObjects={inputObjects} />
        <button onClick={handleSubmitEdit}>Submit</button>
      </>
    );
  };

  // return <Content />;
  return <>{content()}</>;
};

export default PersonalInfoSection;
