import React from "react"
import '../components/aboutme.css'
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { useState } from "react";
import GradeIcon from '@material-ui/icons/Grade';
import { NavLink } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';

 const AboutMe =()=>{

    const [placeholder,setPlaceholder]=useState('Skills Section')
    const [isHovering,setIsHovering]=useState(false)
    const hoverHandler=()=>{
        isHovering?setIsHovering(false):setIsHovering(true)
    }
     return(
         <div className='flexcontainer'>
             <h4 id='greeting'>Hello, I’m Dunba. </h4><br/>
                <div id='subgreeting'> Producer, Developer.
</div>
<p id='explanation'>           Experienced in Sports and News media. I am passionate about media and technology, and aim to build
            innovative products at the intersection of both industries.</p>

            {/* <div className='splashchoices'>
            <span id='iconspan'><GradeIcon onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}/></span><span id='iconspan'><VideoLibraryIcon/></span><span id='iconspan'><CodeIcon/></span><span id='iconspan'><EmailIcon/></span>
                </div> */}

<div className='actiondiv'>
    <div><NavLink id='viewresume' to='/resume'><DescriptionIcon/></NavLink></div>
    <div><NavLink id='viewresume' to='/projects'><CodeIcon/></NavLink></div>
    <div><NavLink id='viewresume' to='/videos'><VideoLibraryIcon/></NavLink></div>
    <div><NavLink id='viewresume' to='/connect'><EmailIcon/></NavLink></div>
    </div>
            
         </div>
     )

}

export default AboutMe

