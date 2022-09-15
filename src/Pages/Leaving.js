import { formatRelativeTime } from '@formatjs/intl';
import React, { useState } from 'react';
 import {VscWorkspaceTrusted} from 'react-icons/vsc';
 import {ImMobile2} from 'react-icons/im';
 import {AiFillTags, AiOutlineBorderLeft} from 'react-icons/ai';
 import Select from 'react-select'
 import './Leaving.css';
 import {GoLocation} from "react-icons/go";
function Leaving() {
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: 'bregu i diellit', label: 'Bregu i Diellit' },
    { value: 'ulpiana', label: 'Ulpiana' },
    { value: 'dardania', label: 'Dardania' }
  ];
  const options2 = [
    { value: 'bregu i diellit', label: 'Bregu i Diellit', icon:<GoLocation/> },
    { value: 'ulpiana', label: 'Ulpiana' },
    { value: 'dardania', label: 'Dardania' }
  ]
  const options3 = [
    { value: '1', label: '1 Seat' },
    { value: '2', label: '2 Seats' },
    { value: '3', label: '3 Seats' }
  ]
  const style = {
    control: base => ({
      ...base,
      border: 0,
      width:300,
      boxShadow: 'none',
      fontFamily: 'poppins',
    })
  };
  return (
    <div className="Leaving">
      <div className='Leaving-React-Select'>
        
      <Select options={options}  placeholder={'Leaving From...'} styles={style} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
      <Select options={options2} placeholder={ 'Going To...'} styles={style} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
      
      <Select options={options3} placeholder={'Seats'} styles={style} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} />
      <button className='Leaving-Button-Section' style={{width:'120px', height:'50px', borderRadius:'20px', border:'none', backgroundColor:'#514BC3', fontFamily:'poppins', color:'white'}}>Search</button>
      </div>
      <div className='Leaving-Values'>
      <small style={{fontFamily:'poppins', fontSize:'small'}} >WHY SHOULD I CARPOOL?</small>
      <span style={{fontFamily:'poppins', fontSize:'xx-Large', fontWeight:'bolder'}} > AjePer Values </span>
      </div>
      <div className='Leaving-Text-Container'>
        <div className='Leaving-Text-as-display-flex'>
        <div className='Leaving-Text-1'>
          <div className='Leaving-Icon' style={{height:'50px', width:'90px', backgroundColor:'#D60665', display:'flex', alignItems:'center', justifyContent:'center',opacity: '50%',borderRadius:'15px',}}>
              <VscWorkspaceTrusted style={{width:'20px', height:'20px', color:'#D60665'}} />
          </div>
          <div className='Leaving-Text-Field'>
            <span>Trust who you travel with</span>
            <small>We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</small>
          </div>
        </div>
        <div className='Leaving-Text-1'>
          <div className='Leaving-Icon' style={{ width:'60px',height:'50px', backgroundColor:'#FFB300', display:'flex', alignItems:'center',borderRadius:'15px', justifyContent:'center',opacity: '50%'}}>
              <ImMobile2 style={{width:'20px', height:'20px', color:'#FFB300',}} />
          </div>
          <div className='Leaving-Text-Field'>
            <span>Scroll, click, tap and go!</span>
            <small>Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</small>
          </div>
        </div>
        <div className='Leaving-Text-1'>
          <div className='Leaving-Icon' style={{height:'50px', width:'60px',borderRadius:'15px', backgroundColor:'#0D13D7', display:'flex', alignItems:'center', justifyContent:'center',opacity: '50%'}}>
              <AiFillTags style={{width:'20px', height:'20px', color:'#0D13D7'}} />
          </div>
          <div className='Leaving-Text-Field'>
            <span>Save money</span>
            <small>No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</small>
          </div>
        </div>

        </div>
       <div className='Leaving-Backgorund-img'/>
      </div>
      
    </div>
  );
}
 
export default Leaving;
