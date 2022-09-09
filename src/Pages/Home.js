import React, { useState } from "react";
import '../index.css';
import NavBar from "../NavBar";
import Footer from "./Footer";
import MobileNav from "./MobileNav/MobileNav";
function App() {

  return (
    <div>
      <NavBar/>
      <MobileNav/>
      <Footer/>
    </div>
  )
}

export default App;