import { useState } from "react";
import CustomInput from "./CustomInput";

const Form = ({ sectionName, fields }) => {
  const inputList = fields.map((field) => <CustomInput fieldName={field} />);
  return (
    <div className="section">
      <h1>{sectionName}</h1>
      {inputList}
      <form action=""></form>
    </div>
  );
};

export default Form;
