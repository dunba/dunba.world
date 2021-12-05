import React from "react"
import '../components/Nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import { NavLink } from 'react-router-dom';


 const Nav =()=>{

  const [isMenuClicked,setIsMenuClicked]=useState(false);
const menuHandler=()=>{
  isMenuClicked?setIsMenuClicked(false):setIsMenuClicked(true)
}

     return(
      <div>
      <nav><div className='headline'><div className='name'><NavLink to='/'><h3 id='firstname' onClick={()=>setIsMenuClicked(false)}>DT</h3></NavLink></div></div>{isMenuClicked?<CloseIcon onClick={menuHandler} id='closeoutbutton'/>:<MenuIcon onClick={menuHandler} id='menuburgermain'/>}</nav>
{isMenuClicked&&(
<div className='menupopup'>
  <div className='navholder'>
<div className='headline'><div className='name'></div></div> <div><ul>
<li><NavLink to='/resume' onClick={menuHandler}>Resume</NavLink></li>
<li><NavLink to='/projects' onClick={menuHandler}> Projects</NavLink></li>
<li><NavLink to='/videos' onClick={menuHandler}>Videos</NavLink></li>
<li><NavLink to='/connect' onClick={menuHandler}>Connect</NavLink></li>
</ul> </div>
</div>
</div>
)}


 
  </div>
  )}

export default Nav