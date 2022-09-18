import React from "react";
import { Link } from "react-router-dom";
import './Whoweare.css';
import drivermask from "../Photos/drivermask.png";
import { BsFillPlayFill } from "react-icons/bs";
function Whoweare (){
    return (
        <div className="Whoweare-Container">
            <div className="Img-Container2">
                <img src={drivermask} />
            </div>
            <div className="Text-Container2">
                <small>
                    WHO WE ARE
                </small>
                <p> About AjePer</p>
                <span>Carpool is revolutionary and  fun way to commute. Whether you are a car owner, bike owner or a rider, just post your ride details on AnyPer and we will match you with co-riders on your way.</span>

                <div className="Whoweare-button-section-2">
                    <Link to='/' className="Whoweare-Button-1" > About Us </Link>
                    <Link to='/' style={{backgroundColor:'#DCDBF3', borderRadius:'70%'}} className="Video" > <BsFillPlayFill style={{width:'30px', height:'40px', color:'#514BC3'}}/> </Link>
                    <small>See how it works</small>
                </div>
            </div>
        </div>
    )
}
export default Whoweare;