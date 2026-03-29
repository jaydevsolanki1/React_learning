import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./Component/ErrorBoundary/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ErrorBoundary key={Date.now()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  // </StrictMode>
);
// when use strick mode with errorBoundary its not working
