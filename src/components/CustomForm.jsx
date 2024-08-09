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

  return <form action="">{inputList}</form>;
};

export default CustomForm;
