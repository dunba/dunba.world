import React from "react"
import '../components/Nav.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
 const Nav =()=>{

  const [isMenuClicked,setIsMenuClicked]=useState(false);
const menuHandler=()=>{
  isMenuClicked?setIsMenuClicked(false):setIsMenuClicked(true)
}

     return(
      <div>
      <nav><div className='headline'><div className='name'><h3>DUNBA</h3><p>TEHINSE</p></div><div>PORTFOLIO</div></div> <div className='menuburger'><MenuIcon onClick={menuHandler} id='menuburgermain'/></div> </nav>
{isMenuClicked&&(
<div className='menupopup'>
  <div className='navholder'>
<div className='headline'><div className='name'></div></div> <div><ul>
<li>About</li>
<li>Skills</li>
<li>Projects</li>
<li>Connect</li>
<li><CloseIcon id='closeoutbutton' onClick={menuHandler}/></li>
</ul> </div>
</div>
</div>
)}


 
  </div>
  )}

export default Nav