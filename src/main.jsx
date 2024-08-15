import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PersonalInfoSection from "./components/PersonalInfoSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfoSection />
    <EducationSection />
    <ExperienceSection />
  </StrictMode>
);
