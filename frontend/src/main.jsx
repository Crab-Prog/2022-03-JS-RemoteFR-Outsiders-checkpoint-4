import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ExportContext from "@contexts/context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ExportContext.GeneralProvider>
      <App />
    </ExportContext.GeneralProvider>

    {/* </React.StrictMode> */}
  </BrowserRouter>
);
