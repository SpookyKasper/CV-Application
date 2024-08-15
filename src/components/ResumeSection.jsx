import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

const ResumeSection = ({ sectionName, fieldObjects }) => {
  const [isSubmitable, setIsSubmitable] = useState(form);

  const sections = {
    "Personal Info": <PersonalInfo />,
    Education: <Education />,
    // Experience: <Experience />,
  };

  const handleEdit = () => {};

  const handleSubmit = () => {
    setSection(sections[sectionName]);
  };

  const CustomSubmitButton = () => {
    return (
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    );
  };

  return (
    <div className="section">
      <h2>{sectionName}</h2>
      <div className="content">{section}</div>
      <button onClick={handleEdit}>Edit</button>
      <CustomSubmitButton />
    </div>
  );
};

export default ResumeSection;

// Algorithm
// Given
