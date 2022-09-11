import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aboutus from "./Pages/Aboutus";
import Home from "./Pages/Home";
import { BsChevronDown } from 'react-icons/bs';
import Resources from "./Pages/Resources";
import Blog from "./Pages/Blog";
import Findcarpool from "./Pages/Findcarpool";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import './NavBar.css';
import Ajeper from "./Photos/Ajeper.png";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(()=> {
    Aos.init({duration:2000})
  }, []);
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
<Link to='/'>Findcarpool </Link>
  return (
      <div style={{ width: '99%' }} className="Home-Section" data-aos="zoom-in" >
        <div className="Icon-Section">
          <img src={Ajeper} />
          <Link to='/' style={{fontFamily:'poppins', textDecoration:'none', fontSize:'x-large', color:'black', fontWeight:'bolder'}} >AjePer</Link>
        </div>
        <div  className="navigation-bar">
        <NavUnlisted  >
          <Link to="/"  ><li>Home</li></Link>
          <Link to="/resources" ><li>Resources</li></Link>
          <Link to="/aboutus" ><li>About Us</li></Link>
          <Link to="/blog" ><li>Blog</li></Link>
          <Link to='/login' style={{fontFamily:'poppins', fontSize:'large', color:'black'}} >Findcarpool
          {
            FindCar && <div style={{
              position:'absolute',
              display: 'flex',
              flexDirection:'column',
              fontFamily:'poppins',
              fontSize:'Large',
            }}>
              <Link to="/about" style={{color:'black'}} > Findcarpool 1 </Link>
              <Link to="/" style={{color:'black'}}> Findcarpool 2 </Link>
            </div>
          }
          
          </Link>
          <a style={{marginLeft:'10px', position:'static',justifyContent:'center', alignItems:'center', display:'flex'}}> <BsChevronDown className={FindCar ? "rotated" : "rotate"} onClick={onHold}/></a>
        </NavUnlisted>
        </div>
        <div className="Button-Section">
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >Log in</Link>
          <Link to="/signup" style={{ textDecoration: 'none', width:'100px', height:'40px', background:'white',color:'black', display:'flex', alignItems:'center',justifyContent:'center', borderRadius:'20px'}} >Sign up</Link>
        </div>
        <div onClick={onPress} className="toggle-container1">
          
        </div>
      </div>
  )
}

export default App;
