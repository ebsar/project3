import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './Togglebutton.css';

const Togglebutton = props => (
    <button className="toggle-button" >
        <AiOutlineMenu className="MenuIcon" />
    </button>
);
export default Togglebutton;