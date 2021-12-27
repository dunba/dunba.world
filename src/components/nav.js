import React from "react"
import '../components/Nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

const Nav = () => {
  var aboutmex = document.getElementById('aboutmediv');
  var resumex = document.getElementById('resumediv');
  var projectsx = document.getElementById('projectsdiv');


  return (
    <div>
      <nav><div className='headline'><div className='name'><NavLink to='/'><h3 id='firstname'>DUNBA</h3></NavLink></div></div><div className='headline'><div className='name'></div></div>
        <div className='navlinks'><ul>

          <li id='navlink' ><NavLink to='/' >ABOUT</NavLink></li>
          <li id='navlink'><NavLink to="/skills" >SKILLS</NavLink></li>
          <li id='navlink'><NavLink to="/experience" >EXPERIENCE</NavLink></li>
          <li id='navlink'><NavLink to="/projects">PROJECTS</NavLink></li>
        </ul></div>
      </nav >


    </div >
  )
}

export default Nav