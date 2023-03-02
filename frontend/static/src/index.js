import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App/App";
import LoginForm from "./components/Auth/Loginform";
import RegistrationForm from "./components/Auth/Registrationform";
//import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>
                Build 404 page and render here, same as you did for other form
              </p>
            </main>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
