import React from "react"
import '../components/video.css'

 const Videos =()=>{
     return(<div>
                     <main className="videoholder">
                     <div className='videotitle'><h3>Videos</h3><p>Collection of a few videos i've worked on.</p></div>
                     <div id="vid"><iframe width="50%" height="360" src="https://www.youtube.com/embed/Mp6qkevPexo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>KH SJSU Tour</p></div>
                <div id="vid"><iframe src="https://player.vimeo.com/video/372562202" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>GSW Preseason Hype Video</p></div>
                <div id="vid"><iframe src="https://player.vimeo.com/video/372561445" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>GSW Loud and Proud</p></div>

                <div id="vid"><iframe src="https://player.vimeo.com/video/381706462" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>National Cupcake Day With Draymond</p></div>

                <div id="vid"><iframe src="https://player.vimeo.com/video/372563118" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>Retail Store Opening Recap</p></div>

                <div id="vid"><iframe src="https://player.vimeo.com/video/372561991" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>LAC Film Session</p></div>

                <div id="vid"><iframe src="https://player.vimeo.com/video/301314783" width="100%" height="272" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>DSP SBDC Promo 1</p></div>

                <div id="vid"><iframe src="https://player.vimeo.com/video/277023057" width="100%" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    <p>DSP SBDC Promo 2</p></div>
            </main>

     </div>)}
export default Videos