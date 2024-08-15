const Experience = ({
  companyName,
  position,
  responsibilities,
  startDate,
  endDate,
}) => {
  return (
    <>
      <p>Company Name: {companyName}</p>
      <p>Position: {position}</p>
      <p>Responsibilities: {responsibilities}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </>
  );
};

export default Experience;
