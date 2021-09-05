import React from "react"
import '../components/skills.css'
import { useState } from "react"


 const Experience =()=>{
     
    const [jobs, setjobs] = useState([
        {
            company: "CBS Interactive",
            position: "Associate Video Producer",
            place: "New York, NY",
            picture:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/CBS_News.svg/1200px-CBS_News.svg.png",
            duration: "2021-Present",
            description1: `Writing news scripts for on-air talent, editing videos and multimedia assets for daily live broadcasts.`,
            description2: `Building and coding rundown, maximizing headlines for SEO and managing live and pre produced elements for a 24-hour continuous digital stream`,
          },
        {
          company: "CBS News Sacramento",
          position: "Associate Digital Line Producer",
          place: "Sacramento, CA",
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/CBS_News.svg/1200px-CBS_News.svg.png",
          duration: "2020-2021",
          description1: `Writing news scripts for on-air talent, editing videos and multimedia assets for daily live broadcasts.`,
          description2: `Building and coding rundown, maximizing headlines for SEO and managing live and pre produced elements for a 24-hour continuous digital stream`,
        },
    
        {
          company: "The Golden State Warriors",
          position: "Production Assistant",
          place: "San Francisco, CA",
          picture:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png",
          duration: "2019-2020",
          description1: `Shooting and editing digital video content for the Golden State Warriors, distributed via social media and game day in-arena presentation at the Chase Center.`,
          description2: `Assisting Warriors Studio crew with miscellaneous production tasks.`,
        },
    
        {
          company: "Cinequest",
          position: "Film and VR Department Intern",
          place: "San Jose, CA",
          picture:
            "https://variety.com/wp-content/uploads/2020/03/cinequest-logo.jpg",
          duration: "2019",
          description1:
            "Shot and edited video advertisements for local sponsors of the festival and created celebratory reels of award winners’ previous works.",
          description2: `Performed administrative duties including compiling digital data in excel, archiving assets on local servers, liaising with other departments within the organization as well as externally, to festival participants and sponsors.`,
        },
    
        {
          company: "NBC Sports Bay Area and California",
          position: "News Department Production Intern",
          place: "San Francisco, CA",
          picture:
            "https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/archive/assets_article/bayarea/2017/03/29/nbcs_stacked_fc_pos.png",
          duration: "2018",
          description1: `Logged multiple live games per week and archived tapes in the AVID Interplay system, allowing for a faster and more efficient workflow, allowing the network to produce and communicate content to fans in almost real time.`,
        },
      ]);
      

     return(<div>
         <h1>Work Experience</h1><br/>
        {jobs.map(job => (
          <div className='joblisting'>

           <div className='wrapper'>
            <div className='company'>{job.company}</div>
            <div className='position'>{job.position}</div>
            <div className='lighter'>{job.duration}</div>
            <div className='lighter'>{job.place}</div>
   
            </div>

          </div>
        ))}
      </div>
)}
export default Experience