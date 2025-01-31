import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherTimeApp from "./WeatherTimeApp";
// import './index.css'
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherTimeApp />
  </StrictMode>
);
