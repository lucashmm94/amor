import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Carousel2 } from "./components/Carousel2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fotos" element={<Carousel2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
