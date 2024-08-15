import CustomInput from "./CustomInput";

const CustomForm = ({ inputObjects }) => {
  const inputList = inputObjects.map((obj) => (
    <CustomInput
      key={obj.name}
      name={obj.name}
      value={obj.value}
      handleChange={obj.handleChange}
      type={obj.type}
    />
  ));
  return <form action="">{inputList}</form>;
};

export default CustomForm;
