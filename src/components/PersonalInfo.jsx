const PersonalInfo = () => {
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("Phone Number").value;
  const name = document.getElementById("Name").value;

  return (
    <div className="personal">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default PersonalInfo;
