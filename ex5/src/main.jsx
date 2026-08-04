import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
// import { CountContextProvider } from "./context/CountContext";

// import { CountContext } from "./context/CountContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CountContextProvider> */}
    <App />
    {/* </CountContextProvider> */}
  </StrictMode>,
);
