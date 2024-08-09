import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CustomInput from "./components/input";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomInput initialValue={"peak"} />
  </StrictMode>
);
