import { useState } from "react";
import CustomForm from "./CustomForm";
import Experience from "./Experience";
import SubmitEditBtn from "./SubmitEditBtn";

const ExperienceSection = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const positionChange = (e) => {
    setPosition(e.target.value);
  };

  const responsibilitiesChange = (e) => {
    setResponsibilities(e.target.value);
  };

  const startDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const endDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmitEdit = () => {
    isSubmitted ? setIsSubmitted(false) : setIsSubmitted(true);
  };

  const inputObjects = [
    {
      name: "company-name",
      value: companyName,
      handleChange: companyNameChange,
    },
    {
      name: "position",
      value: position,
      handleChange: positionChange,
    },
    {
      name: "responsibilities",
      value: responsibilities,
      handleChange: responsibilitiesChange,
    },
    {
      name: "start-date",
      value: startDate,
      handleChange: startDateChange,
      type: "date",
    },
    {
      name: "end-date",
      value: endDate,
      handleChange: endDateChange,
      type: "date",
    },
  ];

  const mainContent = isSubmitted ? (
    <Experience
      companyName={companyName}
      position={position}
      responsibilities={responsibilities}
      startDate={startDate}
      endDate={endDate}
    />
  ) : (
    <CustomForm inputObjects={inputObjects} />
  );

  return (
    <>
      <h1>Experience</h1>
      {mainContent}
      <SubmitEditBtn handleSubmitEdit={handleSubmitEdit} />
    </>
  );
};

export default ExperienceSection;
