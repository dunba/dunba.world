import React from "react"
import { useState } from "react"
import '../components/projects.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";


 const Projects =()=>{
    const transition = { duration: .6, ease: [0.43, .13, -.13, .96] }

    const [projects,setProjects]=useState([{name:'Volley',pic:'https://firebasestorage.googleapis.com/v0/b/premier-league-809fb.appspot.com/o/volley%20thumbs%2Fvolley.png?alt=media&token=a6bf7716-9817-4b9b-9eb5-fbc1bb9677fd',description:'A fullstack video streaming web application built on React and Firebase.',route:'/Volley'},
    {name:'dunba.world',pic:'https://firebasestorage.googleapis.com/v0/b/premier-league-809fb.appspot.com/o/volley%20thumbs%2FScreen%20Shot%202021-08-04%20at%202.26.47%20AM.png?alt=media&token=e87e64f0-43db-48ba-b11c-d57f2974c38c',description:'My Personal Portfolio Website.',route:'/WRLD'}])
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }
     return(
         <div className='flexcontainer'>
<h1>Projects</h1><br/>
<div className='flexcontainer2'>

   
{projects? projects.map(project=>(
         
    <div  className='projectposting'>
        
            <NavLink to={project.route}>
    <motion.img whileHover={{ scale: 1.1 }} transition={transition} exit={{opacity:0}} id='projectpic' src={project.pic}/></NavLink>
    <h2 className='projectname'>{project.name}</h2>
    <p className='projectdesc'>{project.description}</p>
    <p id='viewproject'> <NavLink to={project.route}>VIEW PROJECT</NavLink> <NavigateNextIcon id='viewproject'/> </p>
    </div>


)):<ClipLoader/>}
 </div>

     </div>)}
export default Projects