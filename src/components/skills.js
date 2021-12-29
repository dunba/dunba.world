import React from "react"
import '../components/skills.css'
import { motion } from "framer-motion";


const Skills = () => {
  const transition = { duration: .7, ease: [0.43, .13, -.13, .96] }

  return (
    <div>
      <div className='skillsdiv'>
        <h1>Skills</h1><br />
        <p>Through years of experience i have gained skills in software development, music and video production.</p><br />
        <div className="sectionholder">
          <motion.section whileHover={{ scale: 1.05 }} transition={transition} exit={{ opacity: 0 }}>
            <div className='skillheader'>Software Development</div>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.JS</li>
              <li>HTML & CSS</li>
              <li>SASS</li>
              <li>Firebase</li>
              <li>Material UI</li>
              <li>Framer Motion</li>
            </ul>
          </motion.section>
          <motion.section whileHover={{ scale: 1.05 }} transition={transition} exit={{ opacity: 0 }}>
            <div className='skillheader'>Video Editing</div>
            <ul>
              <li>Adobe After Effects & Premiere</li>
              <li>DaVinci Resolve</li>
              <li>Grass Valley Edius-Pro</li>
              <li>Avid Media Composer</li>

            </ul>
          </motion.section>
          <motion.section whileHover={{ scale: 1.05 }} transition={transition} exit={{ opacity: 0 }}>
            <div className='skillheader'>Sound Design & Music Production</div>
            <ul>
              <li>Ableton Live</li>
              <li>AVID Pro Tools</li>
              <li>FL Studio</li>
            </ul>
          </motion.section>
        </div>
        <br />
        <br />
        <h1>Resume</h1>
        <p>Click <a href='#' target='_blank'>Here</a> to view resume.</p>
      </div>


    </div>

  )
}


export default Skills