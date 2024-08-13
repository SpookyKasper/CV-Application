import CustomInput from "./CustomInput";

const CustomForm = ({ fieldObjects = [] }) => {
  const inputList = fieldObjects.map((fieldObject) => (
    <CustomInput
      key={fieldObject.name}
      fieldName={fieldObject.name}
      type={fieldObject.type}
      initialValue={fieldObject.initialValue}
    />
  ));

  const handleSubmit = () => {
    // setSection(sections[sectionName]);
  };

  const CustomSubmitButton = () => {
    return (
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    );
  };

  return (
    <form action="">
      {inputList}
      <CustomSubmitButton />
    </form>
  );
};

export default CustomForm;
