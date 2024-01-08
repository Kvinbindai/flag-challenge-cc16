import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { FlagContextProvider } from "./context/FlagContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FlagContextProvider>
    <App />
  </FlagContextProvider>
);
