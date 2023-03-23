import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Register from "./forms/Register";
// import Login from "./forms/Login";
import DisplayFull from "./components/DisplayFull";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<App />} />
        <Route path="/all" element={<DisplayFull />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
