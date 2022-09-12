import React, { useState } from "react";
import '../index.css';
import NavBar from "../NavBar";
import Footer from "./Footer";
import MobileNav from "./MobileNav/MobileNav";
import Whoweare from "./Whoweare";
function App() {

  return (
    <div>
      <NavBar/>
      <MobileNav/>
      <Footer/>
      <Whoweare/>
    </div>
  )
}

export default App;
