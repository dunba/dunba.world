import React from "react"
import { useState } from "react"
import '../components/projects.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Volley from '../components/volley'
import pic from '../piqueposter.png'
import pic2 from '../worldposter.png'

const Projects = () => {
  const transition = { duration: .6, ease: [0.43, .13, -.13, .96] }

  const [projects, setProjects] = useState([{ name: 'Pique', pic: pic, description: 'A task management and productivity enhancing web app.', route: 'https://lucid-hamilton-13a3af.netlify.app/' }, { name: 'Volley', pic: 'https://thebogotapost.com/wp-content/uploads/2020/09/james-FCF.jpg', description: 'A fullstack video streaming web application built with React and Firebase.', route: 'https://sad-yalow-ce3135.netlify.app/' },
  { name: 'dunba.world', pic: pic2, description: 'My Personal Portfolio Website, built with React.', route: '/' }])
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  return (
    <div className='flexcontainer'>
      <h1>Projects</h1><br />
      <div className='flexcontainer2'>


        {projects ? projects.map(project => (

          <div className='projectposting'>


            {project.pic ?
              <motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{ opacity: 0 }} id='projectpic' src={project.pic} /> : <ClipLoader />}
            <h2 className='projectname'>{project.name}</h2>
            <p className='projectdesc'>{project.description}</p>
            <p id='viewproject'> <a target={'_blank'} href={project.route}>VIEW PROJECT</a> <NavigateNextIcon id='viewproject' /> </p>
          </div>


        )) : <ClipLoader />}
      </div>

    </div>)
}
export default Projects