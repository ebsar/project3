import { formatRelativeTime } from '@formatjs/intl';
import React, { useState } from 'react';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { ImMobile2 } from 'react-icons/im';
import { AiFillTags, AiOutlineBorderLeft } from 'react-icons/ai';
import Select from 'react-select'
import './Leaving.scss';
import { GoLocation } from "react-icons/go";
import Group38937 from '../Photos/Group38937.png'
import DatePicker from 'react-datepicker';
import Car from '../Photos/Car.png';
import Background12 from '../Photos/Background12.png';

const valuesData = [
  {
    title:"Trust who you travel with",
    text:"We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
    icon:<VscWorkspaceTrusted/>,
    color:"#D60665",
    bgColor:"#F4BFD7"
  },

  {
    title:"Trust who you travel with",
    text:"We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
    icon:<VscWorkspaceTrusted/>,
    color:"#D60665",
    bgColor:"#F4BFD7"
  },

  {
    title:"Trust who you travel with",
    text:"We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
    icon:<VscWorkspaceTrusted/>,
    color:"#D60665",
    bgColor:"#F4BFD7"
  }
]

function Leaving() {
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: 'bregu i diellit', label: 'Bregu i Diellit' },
    { value: 'ulpiana', label: 'Ulpiana' },
    { value: 'dardania', label: 'Dardania' }
  ];
  const options2 = [
    { value: 'bregu i diellit', label: 'Bregu i Diellit', icon: <GoLocation /> },
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
      borderRadius: 0,
      height: '100',
      border: 0 ,
      width: 300,
      backgroundColor: '#F2F7FF',
      display: 'flex',
      alignItems: 'center',
      borderRight: '1px solid #D3D3D3',
      boxShadow: 'none',
      fontFamily: 'poppins',
    })
  };
  return (
    <div className="Leaving">
      <div className='Leaving-React-Select'>
        
      </div>

      <div className='Leaving-Text-Container'>
      <div className='left-side' >

        <small style={{ fontFamily: 'poppins', fontSize: 'small' }} >WHY SHOULD I CARPOOL?</small>
          <span style={{ fontFamily: 'poppins', fontSize: 'xx-Large', fontWeight: 'bolder' }} > AjePer Values </span>

          {valuesData.map((props,i) => {
            return(
              <div className='values-card' key={i} >
              <div className='values-icon'
              style={{color: `${props.color}`, backgroundColor:`${props.bgColor}`}}
              >
                {props.icon}
              </div>

               <div className='text'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
               </div>
              </div>
            )
          })}
      </div>
      <div className='right-side' >
        <img className='violet-bg' src={Background12}/>
        <img className='car-img' src={Car} />
      </div>

      </div>



    </div>
  );
}

export default Leaving;
