import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import CustomForm from "./CustomForm";

const ResumeSection = ({ sectionName, fieldObjects }) => {
  const form = <CustomForm fieldObjects={fieldObjects} />;
  const [section, setSection] = useState(form);

  const sections = {
    "Personal Info": <PersonalInfo />,
    // Education: <Education />,
    // Experience: <Experience />,
  };

  const handleSubmit = () => {
    setSection(sections[sectionName]);
  };

  const CustomSubmitButton = () => {
    return <button onClick={handleSubmit}>Submit</button>;
  };

  return (
    <div className="section">
      <h2>{sectionName}</h2>
      <div className="content">{section}</div>
      <button onClick={handleSubmit}></button>
      <CustomSubmitButton />
    </div>
  );
};

export default ResumeSection;
