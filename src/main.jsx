import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CustomForm from "./components/CustomForm";
import ResumeSection from "./components/ResumeSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeSection
      sectionName={"Personal Info"}
      form={
        <CustomForm
          fieldObjects={[
            { name: "First Name" },
            { name: "Last Name" },
            { name: "Phone Number", type: "tel" },
          ]}
        />
      }
    />
  </StrictMode>
);
