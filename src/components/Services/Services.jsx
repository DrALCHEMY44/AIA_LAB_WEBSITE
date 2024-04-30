import React from 'react';
import './Services.css';
import services_1 from '../../assets/services_1.png';
import services_2 from '../../assets/services_2.png';
import services_3 from '../../assets/services_3.png';

const Services = () => {
  return (
    <div className='services'>
      <div className="services">
        <img src={services_1} alt="" />
        <div className="caption">
            <p>Development</p>
        </div>
      </div>
      <div className="services">
        <img src={services_2} alt="" />
        <div className="caption">
            <p>Graphic Design</p>
        </div>
      </div>
      <div className="services">
        <img src={services_3} alt="" />
        <div className="caption">
            <p>Digital Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default Services
