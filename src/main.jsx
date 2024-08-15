import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PersonalInfoSection from "./components/PersonalInfoSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfoSection />
  </StrictMode>
);
