import {AiOutlineMenuFold} from 'react-icons/ai';
import React, { useState} from 'react';
import Ajeper from './Photo/Ajeper.png';
import './MobileNav.css';
import SideDraw from './SideDraw';
import BackDrop from './BackDrop';

function MobileNav (){
    const [sideDraw, setsideDraw] = useState(false);
  const onButton = () => {
    setsideDraw((prev) => !prev);
  }
    return(
        <nav className="Mobile-Nav-Container">
            <div className="Img-Container"/>
            <img src={Ajeper} />
            <div className="Title-Container">
                <span  >AjePer</span>
            </div>
            <div className="toogle-container">
                <AiOutlineMenuFold onClick={onButton} style={{width:'2rem', height:'2rem'}}/>
            </div>
            <div>
                {
                    sideDraw && <SideDraw onClose={onButton} />

                }
                {
                    sideDraw && <BackDrop onClose={onButton} />

                }
            </div>
            
        </nav>
    )
}
export default MobileNav;