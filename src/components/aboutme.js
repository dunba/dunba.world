import React from "react"
import '../components/aboutme.css'

import EmailIcon from '@material-ui/icons/Email';
import { useState } from "react";
import GradeIcon from '@material-ui/icons/Grade';
import { NavLink } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import { motion } from "framer-motion";


 const AboutMe =()=>{

    const transition = { duration: .6, ease: [0.43, .13, -.13, .96] }


     return(
         <div className='flexcontainer'>
             <h4 id='greeting'>Hello, I’m Dunba. </h4><br/>
                <div id='subgreeting'> Creative, Developer
</div>
<p id='explanation'>   with a professional background in Sports media and News. I am passionate about media and technology, and i am to build innovative products at the intersection of both industries.</p>
<motion.div  whileHover={{ scale: 1.3 }} transition={transition} exit={{opacity:0}}><a href='mailto:hello@dunba.world' id='viewresume' href='mailto:oludunba@gmail.com'><EmailIcon/></a></motion.div>
            
         </div>
     )

}

export default AboutMe

