import React from "react"
import '../components/volley.css'


 const Volley =()=>{
     return(<div>
            <h1>Volley</h1>
            A fullstack video streaming web application built on React and Firebase.<hr/>
<img id='volleypic' src='https://firebasestorage.googleapis.com/v0/b/premier-league-809fb.appspot.com/o/volley%20thumbs%2Fvolley.png?alt=media&token=a6bf7716-9817-4b9b-9eb5-fbc1bb9677fd'/>

Mission:

Volley aims to become a major content aggregator and serve as the home for soccer fans worldwide to watch and share highlights and short clips of their favorite players, teams, and leagues, with friends across the globe.
A future evolution of Volley would introduce an e-commerce store, helping fans get apparel and memorabilia of their favorites.

<hr/>
Project's Current Features:
<ol>
    <li>A user now has the ability to sign up and login. Authentication was solved through firebase.
</li>
    <li>A user also has the ability to 'like' videos and access each one later in the liked section.
</li>
    <li>A custom full page video player styled with CSS featuring play, pause, share and stop buttons, an info popup bar, a video progress bar that updates along with a time stamp displayed in minutes and seconds.
</li>
    <li>A stats page pulling data from the api-sports api.
</li>
</ol>

Ideas for Future Improvement:

Build search page.
Liked videos array alignment doesn't look properly aligned.
Build shop page.
Build comments section and forum.
Ability to notify end user when something featuring their favorite team is uploaded.
     </div>)}

     export default Volley