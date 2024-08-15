const PersonalInfo = ({ name, email, phone }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </>
  );
};

export default PersonalInfo;
