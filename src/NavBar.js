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
import './NavBar.css';
import Ajeper from "./Photos/Ajeper.png";
import Togglebutton from "./Pages/MobileMenu/Togglebutton";
import MobileMenu from './Pages/MobileMenu/MobileMenu';
import Backdrop from "./Pages/MobileMenu/Backdrop";
import styled from "styled-components";
function App() {
  const [Nav, setNav] = useState(false);
  const onPress = () => {
    setNav((prev) => !prev);
  }
  const [FindCar, setFindCar] = useState(false);
  const onHold = () => {
    setFindCar((prev) => !prev);
  }
  const NavUnlisted = styled.ul`

  display: flex;
  alignitems: center;
  

  a {
    text-decoration: none;
  }

  li {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: Black ;
    alignitems: center;
    margin: 0 2.0rem;
    flex-wrap: wrap;
    font-size: 1.2rem;
    position: relative;
    list-style: none;
  }
`;

  return (
    <BrowserRouter>
      <div style={{ width: '99%' }} className="Home-Section">
        <div className="Icon-Section">
          <img src={Ajeper} />
          <h1>AjePer</h1>
        </div>
        <div  className="navigation-bar">
        <NavUnlisted  >
          <Link to="/"  ><li>Home</li></Link>
          <Link to="/resources" ><li>Resources</li></Link>
          <Link to="/aboutus" ><li>About Us</li></Link>
          <Link to="/blog" ><li>Blog</li></Link>
          <a >
            <li style={{display: 'flex', alignItems:'center', gap:'10px'}}>
              Find Carpool<BsChevronDown onClick={onHold}/>
              {
            FindCar && 
            <div style={{position:'absolute', marginTop: '100px', display:'flex', flexDirection:'column', gap:'10px' }}>
            <Link to="/rentcar"><li>Rent a Car</li></Link>
            <Link to="/sellcar"><li>Sell Car</li></Link>
            </div>
          }
            </li>
             </a>
        </NavUnlisted>
        </div>
        <div className="Button-Section">
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >Log in</Link>
          <Link to="/signup" style={{ textDecoration: 'none', width:'100px', height:'40px', background:'white',color:'black', display:'flex', alignItems:'center', borderRadius:'20px'}} >Sign up</Link>
        </div>
        <div onClick={onPress} className="toggle-container1">
          <Togglebutton />
          {
            Nav &&
            <MobileMenu />
          }
          {
            Nav &&
            <Backdrop />
          }
        </div>
      </div>
      <Routes>
        <Route path='/' component={<Home/>} />
        <Route path='/resources' component={<Resources/>} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/findcarpool' element={<Findcarpool />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
