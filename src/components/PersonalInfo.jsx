const PersonalInfo = ({ name, email, phone }) => {
  console.log(name);
  return (
    <div className="personal">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default PersonalInfo;
