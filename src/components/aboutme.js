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
import { motion } from "framer-motion";


 const AboutMe =()=>{

    const transition = { duration: .6, ease: [0.43, .13, -.13, .96] }

    const [placeholder,setPlaceholder]=useState('Skills Section')
    const [isHovering,setIsHovering]=useState(false)
    const hoverHandler=()=>{
        isHovering?setIsHovering(false):setIsHovering(true)
    }
     return(
         <div className='flexcontainer'>
             <h4 id='greeting'>Hello, I’m Dunba. </h4><br/>
                <div id='subgreeting'> Creative, Developer.
</div>
<p id='explanation'>    I am passionate about music, media and technology, and aim to build
            innovative products at the intersection of those industries.</p>

            {/* <div className='splashchoices'>
            <span id='iconspan'><GradeIcon onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}/></span><span id='iconspan'><VideoLibraryIcon/></span><span id='iconspan'><CodeIcon/></span><span id='iconspan'><EmailIcon/></span>
                </div> */}

<div className='actiondiv'>
    <motion.div  whileHover={{ scale: 1.3 }} transition={transition} exit={{opacity:0}}><NavLink id='viewresume' to='/resume'><DescriptionIcon/></NavLink></motion.div>
    <motion.div  whileHover={{ scale: 1.3 }} transition={transition} exit={{opacity:0}}><NavLink id='viewresume' to='/projects'><CodeIcon/></NavLink></motion.div>
    <motion.div  whileHover={{ scale: 1.3 }} transition={transition} exit={{opacity:0}}><NavLink id='viewresume' to='/videos'><VideoLibraryIcon/></NavLink></motion.div>
    <motion.div  whileHover={{ scale: 1.3 }} transition={transition} exit={{opacity:0}}><NavLink id='viewresume' to='/connect'><EmailIcon/></NavLink></motion.div>
    </div>
            
         </div>
     )

}

export default AboutMe

