import React, { useState } from "react";
import '../index.css';
import NavBar from "../NavBar";
import Features from "./Features";
import Footer from "./Footer";
import Leaving from "./Leaving";
import MobileNav from "./MobileNav/MobileNav";
import ReactSelect from "./React-Select";
import Whoweare from "./Whoweare";
function App() {

  return (
    <div>
      <NavBar/>
      <MobileNav/>
      <Footer/>
      <ReactSelect/>
      <Leaving/>
      <Whoweare/>
      <Features/>
    </div>
  )
}

export default App;
