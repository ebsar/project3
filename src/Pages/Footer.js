import { Link } from 'react-router-dom';
import './Footer.css';
import png from "../Photos/png.png";
import getitongoogleplaylogo from '../Photos/getitongoogleplaylogo.png';
function Footer (){
    return (
        <div className='first-container' >
        <div className='Footer'>
            
            <div className='Text-Container' >
            <span >Ride Together At</span>
            <p>Low Prices</p>
            <small >AjePer is the smart Carpooling service. Join 700,000 like-minded people find both drivers or passengers saving money and the planet by car sharing. </small>
            </div>
            <div className='buttons-section'>
                <button className='GTD-btn'>Get Started</button>
                <div className='getin-btn'>
                <a href='https://play.google.com/store/games?hl=en&gl=US' className='app-Play-btn'><img src={getitongoogleplaylogo}/></a> 
                <a href='https://play.google.com/store/games?hl=en&gl=US' className='Google-Play-btn'><img src={png} /></a>
                
                </div>
            
        </div>
        <div className='images'>
            </div>
        </div>
        </div>
    )
}
export default Footer;