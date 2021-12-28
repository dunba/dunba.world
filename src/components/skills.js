import React from "react"
import '../components/skills.css'

const Skills = () => {
  return (
    <div>
      <div className='skillsdiv'>
        <h1>Skills</h1><br />
        <p>Through years of experience i have a combination of skills in web development and media production.</p><br />
        <div className="sectionholder">
          <section>
            <div className='skillheader'>Web Design</div>
            <ul>
              <li>Javascript ES6</li>
              <li>HTML & CSS</li>
              <li>SASS</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Material UI</li>
              <li>Framer Motion</li>
            </ul>
          </section>
          <section>
            <div className='skillheader'>Video Editing</div>
            <ul>
              <li>Adobe After Effects & Premiere</li>
              <li>DaVinci Resolve</li>
              <li>Grass Valley Edius-Pro</li>
              <li>Avid Media Composer</li>

            </ul>
          </section>
          <section>
            <div className='skillheader'>Sound Design & Music</div>
            <ul>
              <li>Ableton Live</li>
              <li>AVID Pro Tools</li>
            </ul>
          </section>
        </div>
      </div>


    </div>

  )
}


export default Skills