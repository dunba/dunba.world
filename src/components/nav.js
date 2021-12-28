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
      <nav><h3 id='firstname'><NavLink activeStyle={{ color: "black", textDecoration: "none" }} style={{ textDecoration: 'none' }} to='/'>DUNBA</NavLink></h3>
        <div className='navlinks'>
          <ul>
            <li id='textlink' ><NavLink activeStyle={{ color: "red", textDecoration: "none" }} style={{ textDecoration: 'none' }} to='/' exact>ABOUT</NavLink></li>
            <li id='textlink'> <NavLink activeStyle={{ color: "red", textDecoration: "none" }} style={{ textDecoration: 'none' }} to="/resume" >RESUME</NavLink></li>
            <li id='textlink'><NavLink activeStyle={{ color: "red", textDecoration: "none" }} style={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }} to="/projects">PROJECTS</NavLink></li>
          </ul>
        </div>
      </nav >


    </div >
  )
}

export default Nav