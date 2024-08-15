const SubmitEditBtn = ({ isSubmitted, handleSubmitEdit }) => {
  const buttonText = isSubmitted ? "Edit" : "Submit";

  return <button onClick={handleSubmitEdit}>{buttonText}</button>;
};

export default SubmitEditBtn;
