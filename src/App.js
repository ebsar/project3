import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Home from "./Pages/Home";
import { BsChevronDown } from 'react-icons/bs';
import Whoweare from "./Pages/Whoweare";
import Findcarpool from "./Pages/Findcarpool";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import './index.css';
import Ajeper from "./Photos/Ajeper.png";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Pages/Footer";
import MobileNav from "./Pages/MobileNav/MobileNav";
import ScrollToTop from "./ScrollToTop";

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
