import { useState } from "react";
import CustomForm from "./CustomForm";
import SubmitEditBtn from "./SubmitEditBtn";
import Education from "./Education";

const EducationSection = () => {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitleOfStudy(e.target.value);
  };

  const handleDateOfStudyChange = (e) => {
    setDateOfStudy(e.target.value);
  };

  const handleSubmitEdit = () => {
    isSubmitted ? setIsSubmitted(false) : setIsSubmitted(true);
  };

  const inputObjects = [
    {
      name: "school-name",
      value: schoolName,
      handleChange: handleSchoolNameChange,
    },
    {
      name: "title-of-study",
      value: titleOfStudy,
      handleChange: handleTitleChange,
    },
    {
      name: "date-of-study",
      value: dateOfStudy,
      handleChange: handleDateOfStudyChange,
      type: "date",
    },
  ];

  const mainContent = isSubmitted ? (
    <Education
      schoolName={schoolName}
      title={titleOfStudy}
      dateOfStudy={dateOfStudy}
    />
  ) : (
    <CustomForm inputObjects={inputObjects} />
  );

  return (
    <>
      <h1>Education</h1>
      {mainContent}
      <SubmitEditBtn
        isSubmitted={isSubmitted}
        handleSubmitEdit={handleSubmitEdit}
      />
    </>
  );
};

export default EducationSection;
