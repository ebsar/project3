import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Home from "./Pages/Home";
import { BsChevronDown } from 'react-icons/bs';
import Resources from "./Pages/Resources";
import Blog from "./Pages/Blog";
import Findcarpool from "./Pages/Findcarpool";
import Login from "./Pages/Login";
import Signup from "./Pages/Signjup";
import './index.css';
import Ajeper from "./Photos/Ajeper.png";
import Togglebutton from "./Pages/MobileMenu/Togglebutton";
import MobileMenu from './Pages/MobileMenu/MobileMenu';
import Backdrop from "./Pages/MobileMenu/Backdrop";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Pages/Footer";
function App() {

  return (
    <div>
      <NavBar/>
      <Footer />
    </div>
  )
}

export default App;
