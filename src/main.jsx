import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ResumeSection from "./components/ResumeSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeSection
      sectionName={"Personal Info"}
      fieldObjects={[
        { name: "Name" },
        { name: "Phone Number", type: "tel" },
        { name: "Email", type: "mail" },
      ]}
    />
    <ResumeSection
      sectionName={"Education"}
      fieldObjects={[
        { name: "School Name" },
        { name: "Title of Study" },
        { name: "Date of Study" },
      ]}
    />
  </StrictMode>
);
