import './SideDraw.css';
import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import Ajeper from '../MobileNav/Photo/Ajeper.png'
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';

function SideDraw (props){
    const [data, setData] = useState(false);
  const onData = () => {
    setData((prev) => !prev);
  }
    return (
        <div style={{ backgroundColor:'#f2f7ff'}} className="Side-Drawer" data-aos="fade-right" >
            <div className='Logo-Container'>
                <img src={Ajeper} />
                <Link to='/' style={{textDecoration: 'none', fontFamily:'poppins', color:'black', fontSize:'x-large',fontWeight:'bolder' }} >Ajeper </Link>
                <AiOutlineClose style={{width:'1.5rem', height: '1.5rem'}} onClick={props.onClose} />
            </div>
            <nav >
                <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black'}} to='/'> Home </Link>
                <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black'}} to='/resources'> Resources </Link>
                <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black'}} to='/aboutus'> About Us </Link>
                <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black'}} to='/blog'> Blog </Link>
                <div style={{display:'flex', justifyContent:'space-between',  alignItems:'center'}} >
                <Link to='/about' style={{textDecoration: 'none', fontFamily:'poppins', color:'black', display:'flex', alignItems:'center', justifyContent:'space-between'}} > Find Carpool</Link>
                <a> <BsChevronDown className={data ? "rotated" : "rotate"} onClick={onData}/> </a></div>
                {
                    data && <div style={{display:'flex', flexDirection:'column', gap:'10px', marginLeft:'20px'}} >
                        <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black'}} to='/'>Buy Car</Link>
                        <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black'}} to='/'>Sell car</Link>
                    </div>
                }
           </nav>
           <div  className='Button-Section2' style={{dispplay: 'flex', justifyContent:'center'}} >
            <Link style={{textDecoration: 'none', fontFamily:'poppins', color:'black', border:'1px solid black', width:'6rem', height:'2.5rem', display:'flex', alignItems:'center', justifyContent:'center', background:'white', borderRadius:'20px'}} to='/login' className='Login-btn'>Login</Link>
            <Link style={{textDecoration: 'none', fontFamily:'poppins',  width:'6rem', height:'2.5rem', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#514BC3' ,color:'white', borderRadius:'20px'}} to='/signup' className='Signup-btn' >Sign Up</Link>
           </div>
        </div>
    )
}
export default SideDraw;