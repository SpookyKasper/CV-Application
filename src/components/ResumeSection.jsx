import { useState } from "react";

const ResumeSection = ({ sectionName, form }) => {
  const [section, setSection] = useState(form);

  const handleSubmit = () => {
    setSection(form);
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
