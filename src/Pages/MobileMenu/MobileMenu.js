import React from "react";
import './MobileMenu.css';
import { GrClose } from "react-icons/gr";
import Ajeper from './Ajeper.png';
function MobileMenu (props) {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="logo-text-section">
                
            </div>
        </nav>
    );
};
export default MobileMenu;