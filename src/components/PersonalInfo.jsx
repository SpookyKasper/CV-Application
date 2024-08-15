const PersonalInfo = ({ name, email, phone }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </>
  );
};

export default PersonalInfo;
