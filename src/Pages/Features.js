import {TbCurrentLocation} from "react-icons/tb";
import {AiOutlineSafety} from "react-icons/ai";
import {GiClick} from "react-icons/gi";
import {MdVerified, MdOutlineDesignServices} from "react-icons/md";
import {BsChat} from 'react-icons/bs';
import './Features.scss';
import { Link } from 'react-router-dom';

function Features (){
    const someFeatures=[
        {
            icon:<TbCurrentLocation/>,
            text:'Real Time Tracking'
        },
        {
            icon:< AiOutlineSafety />,
            text:'Safet ToolKit'
        },{
            icon:<GiClick/>,
            text:'1 Click Ride Post'
        }
    ];
    const someFeatures2 =[
        {
            icon: <MdVerified/> ,
            text:'Verified Riders'
        },{
            icon: <BsChat/> ,
            text:'24*7 Support'
        },{
            icon:<MdOutlineDesignServices/>,
            text:'New Friendly UI'
        }
    ];
    return(
        <div className="Features-first-Container">
            <div className="Features-Title">
                <small>Features</small>
                <span>Why Choose AjePer</span>
                <p>At AjePer the prime focus has always been easy to use and simple user experience. We always try our best to balance between features and</p>
            </div>
            <div className="Features-Icon-Text">
                <div className="Features-Makeing-Test1">
                    {someFeatures.map((somefeatures) => 
                    <div className="Features-Icon-Text-Text">
                    <div>{somefeatures.icon}</div>
                    <div>{somefeatures.text}</div>
                    </div>
                    )

                    }
                    </div>
                    <div className="Features-Makeing-Test1">
                    {someFeatures2.map((somefeatures2) => 
                    <div className="Features-Icon-Text-Text-1">
                    <div >{somefeatures2.icon}</div>
                    <div>{somefeatures2.text}</div>
                    </div>
                    )

                    }
                    </div>
            </div>
            <div className="Features-Learn-More">
                    <Link to="/" > Learn More</Link>
                    </div>
        </div>
    );
}
export default Features;