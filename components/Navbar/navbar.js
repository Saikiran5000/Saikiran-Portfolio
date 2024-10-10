import React, { useState } from 'react';
import "./navbar.css";
import {Link} from "react-scroll";


const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
     <span>Portfolio</span>
     <div className='desktopMenu' >

        <Link  activeClass="active" to="intro" spy={true} smooth={true} offset={-100}   duration={500}  className="desktopMenuListItem" onClick={()=>{
          setShowMenu(false)
        }}           >About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50}   duration={500} className="desktopMenuListItem" onClick={()=>{
          setShowMenu(false)
        }}>Skills</Link>
       
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50}   duration={500} className="desktopMenuListItem" onClick={()=>{
          setShowMenu(false)
        }}>Projects</Link>
        

     </div>

     <button className='desktopMenuBtn' onClick={()=>{
      document.getElementById("contact").scrollIntoView({behavior:"smooth"});
     }}>
        <img src="" alt="" className='desktopMenuImg'/>Contact me 
     </button>




    </nav>
  )
}

export default Navbar
