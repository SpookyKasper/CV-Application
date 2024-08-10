import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

const ResumeSection = ({ sectionName, form }) => {
  const [section, setSection] = useState(form);

  const handleSubmit = () => {
    const name = document.getElementById("Name").value;
    const phone = document.getElementById("Phone Number").value;
    const email = document.getElementById("Email").value;
    setSection(<PersonalInfo name={name} phone={phone} email={email} />);
  };

  const CustomSubmitButton = () => {
    return <button onClick={handleSubmit}>Submit</button>;
  };

  return (
    <div className="section">
      <h2>{sectionName}</h2>
      <div className="content">{section}</div>
      <CustomSubmitButton />
    </div>
  );
};

export default ResumeSection;
