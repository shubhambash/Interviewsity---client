import React from 'react'
import './Landing.css'
import img from '../assets/codeeditor.webp'
import Navbar from './Navbar'
function Landing() {
  return (
      <>

        <div className='outer-wrapper'>
            <Navbar />

            <div className='landing-wrapper'>

                            
                <div className='landing-container'>

                    <div id="landingName">
                        <div>
                        <h2 id="landingNameText">Interviewsity</h2>
                        </div>
                        
                        <div>
                        <p id="landingNameText1">An exceptional platform to learn data structures, <br/>algorithms, CSE core fundamentals and 
                            crack<br /> any coding interview
                        </p>
                        </div>

                        <div>
                            <button className='landing-button'>Explore</button>
                        </div>

                        
                    </div>

                    <div id="landingImage">
                        <img src={img} id="landingImagePic"/>
                    </div>

                </div>
            </div>

        </div>
        
    </>
  )
}

export default Landing