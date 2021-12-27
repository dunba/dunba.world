import React from "react"
import '../components/aboutme.css'

import EmailIcon from '@material-ui/icons/Email';
import { useState } from "react";
import GradeIcon from '@material-ui/icons/Grade';
import { NavLink } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const AboutMe = () => {
    const transition = { duration: .6, ease: [0.43, .13, -.13, .96] }
    return (
        <div className='aboutcontainer'>
            <div className="greetingholder">
                <h4 id='greeting'>Hello, I’m Dunba. </h4><br />
                <div id='subgreeting'> Creative, Developer
                </div>
                <p id='explanation'>   with a professional background in News and Sports media. I am passionate about media and technology, and i am to build innovative products at the intersection of both industries.</p>
                <div className='icons'>
                    <motion.div whileHover={{ scale: 1.3 }} transition={transition} exit={{ opacity: 0 }}><a target='_blank' href='https://github.com/dunba' id='viewresume' ><GitHubIcon /></a></motion.div>
                    <motion.div whileHover={{ scale: 1.3 }} transition={transition} exit={{ opacity: 0 }}><a target='_blank' href='https://linkedin.com/in/dunba' id='viewresume' ><LinkedInIcon /></a></motion.div>
                    <motion.div whileHover={{ scale: 1.3 }} transition={transition} exit={{ opacity: 0 }}><a href='mailto:hello@dunba.world' id='viewresume'><EmailIcon /></a></motion.div>
                </div>
            </div>

        </div>
    )

}

export default AboutMe

