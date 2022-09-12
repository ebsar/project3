import { Link } from 'react-router-dom';
import './Footer.css';
import Oval from './AjeperLogo/Oval.png'
import Aos from 'aos';
function Footer() {
    return (
        <div className='Footer-first-container'  >
            <div className='Footer'  >
                <div className='Footer-Text-Container' >
                    <span >Ride Together At</span>
                    <p>Low Prices</p>
                    <small >AjePer is the smart Carpooling service. Join 700,000 like-minded people find both drivers or passengers saving money and the planet by car sharing. </small>
                </div>
                <div className='Footer-buttons-section'  >
                    <div className='Footer-Get-Starte-Button'  >
                        <Link   to='/' style={{ display: 'flex', width: '10rem', height: '3rem', borderRadius: '30px', alignItems: 'center', justifyContent: 'center', background: '#514BC3', color: 'white', fontFamily: 'poppins', textDecoration: 'none' }}  > Get Started </Link>
                    </div>
                    <div className='Footer-Get-in'>
                        <Link to='/about' style={{fontFamily:'poppins', textDecoration: 'none'}} > 
                        <a  class="btn btn-google" >Google Play</a>
                        <a  class="btn btn-Apple" >App Store</a>
                        </Link>
                    </div>
                </div>
                <div className='images' data-aos="fade-right">
                </div>
            </div>
            <div className='Footer-White-Background' data-aos="zoom-in">
                <div className='Footer-Text-Img'>
                    <img  src={Oval} />
                    <p>Amir Mustafa</p>
                </div>
                <div className='Footer-Line'>

                </div>
                <div className='Footer-Prizren-Prishtin' >
                    <small>Prizren</small>
                    <small>Prishtin</small>
                </div>
            </div>
        </div>
    )
}
export default Footer;