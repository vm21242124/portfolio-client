import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import App from "./App";
import Navbar from "./components/navbar/Navbar";
import Contact from "./Pages/Contact";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/skills" element={<Skills/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
