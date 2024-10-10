import React from 'react';
import "./intro.css";

import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro" >
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Gatla Sai Kiran Reddy</span> <br/>Full Stack Web Developer</span>
            <p className='introPara'>I am a skilled Full Stack Web Developer with experience in user friendly websites.</p>
            <h4>Mobile:<span className='numberStyle'>7780338130</span> </h4>
            <h4>email: <span className='numberStyle'>saikiranreddygatla@gmail.com</span></h4>
            <Link><button className='btn'><img src="" alt=""/> Hire Me</button></Link>
        </div>

      


    </section>
  )
}

export default Intro
