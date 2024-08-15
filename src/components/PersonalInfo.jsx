const PersonalInfo = ({ name, email, phone }) => {
  return (
    <div className="personal-info-section">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default PersonalInfo;
