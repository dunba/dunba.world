import React from "react"
import '../components/skills.css'

 const DunbaWorld =()=>{

    const socials =[{site:"Soundcloud", url:"https://soundcloud.com/dunba", icon:"white"},{site:"Twitter", url:"https://twitter.com/dunbatopaz", icon:"white"},{site:"Instagram", url:"https://instagram.com/dunbatopaz", icon:"white"},{site:"Email", url:"mailto:hello@dunba.world", icon:"white"}]
     return(
         <div className='flexcontainer'>
<div className='hompageholder'>
    <div className='nameheader'>
    <h1>DUNBA</h1>
    <p>🎹 🥁 + 🎥 📺 </p>
    <p>PRODUCER</p>
    </div>
    <div className='socialsheader'>
    {socials.map((social,index)=>(<p><a target='_blank' id='sociallink' href={social.url}><p id='socialplate'>{social.site}</p></a></p>))}

    </div>

</div>



</div>

     )}


     export default DunbaWorld