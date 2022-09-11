import { Link } from 'react-router-dom';
import './Footer.css';

import Aos from 'aos';
function Footer() {
    return (
        <div className='first-container'  >
            <div className='Footer'  >
                <div className='Text-Container' data-aos="zoom-in" >
                    <span >Ride Together At</span>
                    <p>Low Prices</p>
                    <small >AjePer is the smart Carpooling service. Join 700,000 like-minded people find both drivers or passengers saving money and the planet by car sharing. </small>
                </div>
                <div className='buttons-section' data-aos="fade-right" >
                    <div className='Get-Starte-Button'  >
                        <Link   to='/' style={{ display: 'flex', width: '10rem', height: '3rem', borderRadius: '30px', alignItems: 'center', justifyContent: 'center', background: '#514BC3', color: 'white', fontFamily: 'poppins', textDecoration: 'none' }}  > Get Started </Link>
                    </div>
                    <div className='Get-in'>
                        <Link  className='palidhje' to='/about' style={{fontFamily:'poppins', textDecoration: 'none'}} > 
                        <a  class="btn btn-google" >Google Play</a>
                        <a  class="btn btn-Apple" >App Store</a>
                        </Link>
                    </div>
                </div>
                <div className='images'>
                </div>
            </div>
        </div>
    )
}
export default Footer;