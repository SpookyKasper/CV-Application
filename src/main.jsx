import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CustomInput from "./components/CustomInput";
import Form from "./components/FormSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Form
      sectionName={"Personal Info"}
      fields={["First Name", "Last Name", "Phone Number"]}
    />
  </StrictMode>
);
