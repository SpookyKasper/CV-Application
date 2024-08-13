const Education = () => {
  const schoolName = document.getElementById("School Name").value;
  const title = document.getElementById("Title of Study").value;
  const dateOfStudy = document.getElementById("Date of Study").value;

  return (
    <div className="personal">
      <p>School Name: {schoolName} </p>
      <p>Title Of Study: {title}</p>
      <p>Date Of Study: {dateOfStudy}</p>
    </div>
  );
};

export default Education;
