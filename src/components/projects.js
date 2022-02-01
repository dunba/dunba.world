import React from "react"
import { useState } from "react"
import '../components/projects.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Volley from '../components/volley'


const Projects = () => {
  const transition = { duration: .6, ease: [0.43, .13, -.13, .96] }

  const [projects, setProjects] = useState([{ name: 'Pique', pic: 'https://previews.dropbox.com/p/thumb/ABYq7t2YB33zNh6BaDqs-_Z7eNwqx8ev3zQ7Ej6qWjYXDXytaPzCPYmJvmKELc7-xxswGX4AuL01TrAWA7lT5nkO6CRo9cPm2u_vDXMp-x6-mqpP7n35PGXpcL3p6lXbBJBT15MgJiY6RKX0_m9ILjPAtkCE8DoGIY7NC6E_4WtfA1nEN5bdGTDUhDe1257BGcrrJSIVzuEKxISc0CJmeazIPDyhLWwE6QbxbC5unco5Drqyrz5OshfCbTXJSU9LsHcRTpG4mZzV3MwnDxhFhYoSVw4JeK5Ov5WZDl63_yGqTIOXbso3dW-5B5iBcTeBNi4hb8D33tQSk1KJwAs_zWg_pWYL9IAquda3slvDiAVG_Q/p.png?fv_content=true&size_mode=5', description: 'A task management and productivity enhancing web app.', route: 'https://lucid-hamilton-13a3af.netlify.app/' }, { name: 'Volley', pic: 'https://thebogotapost.com/wp-content/uploads/2020/09/james-FCF.jpg', description: 'A fullstack video streaming web application built with React and Firebase.', route: 'https://sad-yalow-ce3135.netlify.app/' },
  { name: 'dunba.world', pic: 'https://previews.dropbox.com/p/thumb/ABa5Genu_i5YWHP5NWSY2B84YmJFBKgA80xaR2POVRuPyp2KSnTLD00HFmKalRLZVqXQPeIebdPxeWcI-cH9BGD0xiILLaOrb5PgA4IgF0eq_dhieb9NhsiUiKGix8ehZH4WGgGKp2t1HFXJKuUBOGGWqmk7NEs4Dk3HSCeQOIS40Lv8Ujj4TiegBzxb9VW7dz9Fnf453dd0gLrFJEY57jsBOgsuugTpBr3cVEbXLLkpBeXdBXme3sR5b4nnxOB0Kv7DyPEJMkueiu6X66qcx_RjnpbLgSuvNopg072V9hcEKqnmZ1_QT5apWrRJUiF0BO0lubn3D7c2F3J-P4xxuxOjVszc5S_9RAlrB-z7spp4bA/p.png?fv_content=true&size_mode=5', description: 'My Personal Portfolio Website, built with React.', route: '/' }])
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