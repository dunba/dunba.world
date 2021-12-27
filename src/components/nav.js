import React from "react"
import '../components/Nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

 const Nav =()=>{
     return(
      <div>
      <nav><div className='headline'><div className='name'><NavLink to='/'><h3 id='firstname'>DUNBA</h3></NavLink></div></div><div className='headline'><div className='name'></div></div> 
      <div className='navlinks'><ul>

<li id='navlink'>ABOUT</li>
<li id='navlink'>SKILLS</li>
<li id='navlink'>RESUME</li>
<li id='navlink'>PROJECTS</li>
</ul></div>
</nav>

 
  </div>
  )}

export default Nav