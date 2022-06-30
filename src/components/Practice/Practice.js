import React from 'react'
import { useState, useEffect } from 'react'
import './Practice.css'
import Navbar from '../Navbar'
import PieChart from '../Profile/PieChart'
import LineChart from '../Profile/LineChart'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import dsa from '../../assets/dsa.png'
import DragDrop from './DragDrop'
import { Navigate } from 'react-router-dom'
function Practice() {

    const [html_, setHtml] = useState(true)
    const [css_, setCss] = useState(false)
    const [js_, setJs] = useState(false)
    const [dsa_, setDsa] = useState(false)


    const [profileData, setProfileData] = useState(null);
    const email = localStorage.getItem("email")
    useEffect(() => {
      getProfileData(email)
    }, [])
  
  
    const getProfileData = async (email) => {
  
     
      if(!email)return;
      try {
  
  
        const res = await fetch(`http://localhost:5000/profiledata/${email}`, {
          method:"GET",
          credentials: 'include',
          headers:{
              
              "Content-Type": "application/json",
              "Accepts":"application/json"
              
          },
         
      })
  
  
      if(res.status === 200)
      {
        const data = await res.json();
  
        setProfileData(data)
        console.log(data)
      }
  
  
  
        
      } catch (error) {
        console.log(error)
      }
  
  
    }


    useEffect(() => {

    }, [html_,css_,js_, dsa_])

  return (

    <div id='practiceOutermostWrapper'>
        <Navbar />
        <div id='praticeOuterWrapper'>


            <div id='practiceConatiner'>

            <div id='dnd'>

            {html_ === true ? (
                 <div className='practiceCard' style={{borderBottom : '5px solid yellow', backgroundColor : 'rgba(229, 160, 33, 0.192)'}}
                 
                 >

                 <div className='practiceCardHeading'>
 
                     <div>
                     <img src={html} style={{height : '100px', width : '100px'}}/>
                     </div>
 
                 
 
                 </div>
 
                 <div className='practiceCardProblems'>
                     <p className='text-center'>100 <span className='htmlText'>problems</span></p>
                 </div>
 
             </div>
            )
            
            :
            
            (
                <div className='practiceCard' onClick={() => {
                    setHtml(true)
                    setCss(false)
                    setJs(false)
                    setDsa(false)
                }}>

                <div className='practiceCardHeading'>

                    <div>
                    <img src={html} style={{height : '100px', width : '100px'}}/>
                    </div>

                

                </div>

                <div className='practiceCardProblems'>
                    <p className='text-center'>100 <span className='htmlText'>problems</span></p>
                </div>

            </div>
            )}


            {css_ ? (
                            
            <div className='practiceCard' style={{borderBottom : '5px solid yellow', backgroundColor : 'rgba(229, 160, 33, 0.192)'}}
            >

            <div className='practiceCardHeading'>

                <div>
                <img src={css} style={{height : '100px', width : '75px'}}/>
                </div>



            </div>


            <div className='practiceCardProblems'>
                    <p className='text-center'>100 <span className='cssText'>problems</span></p>
                </div>

                
            </div>

            )
        :
        (
                
    <div className='practiceCard' onClick={() => {
                
        setHtml(false)
        setCss(true)
        setJs(false)
        setDsa(false)
    }}>

    <div className='practiceCardHeading'>

        <div>
        <img src={css} style={{height : '100px', width : '75px'}}/>
        </div>



    </div>


    <div className='practiceCardProblems'>
            <p className='text-center'>100 <span className='cssText'>problems</span></p>
        </div>

        
    </div>

        )}



        {js_ ? (
            

            <div className='practiceCard' style={{borderBottom : '5px solid yellow', backgroundColor : 'rgba(229, 160, 33, 0.192)'}}>

            <div className='practiceCardHeading'>

                <div>
                <img src={js} style={{height : '100px', width : '75px'}}/>
                </div>



            </div>


            <div className='practiceCardProblems'>
                <p className='text-center'>100 <span className='jsText'>problems</span></p>
            </div>


            </div>
        )
    
    :
    
    (
        

        <div className='practiceCard' onClick={() => {
                
            setHtml(false)
            setCss(false)
            setJs(true)
            setDsa(false)
        }}>

        <div className='practiceCardHeading'>

            <div>
            <img src={js} style={{height : '100px', width : '75px'}}/>
            </div>



        </div>


        <div className='practiceCardProblems'>
            <p className='text-center'>100 <span className='jsText'>problems</span></p>
        </div>


        </div>
    )
    
    }

           
        {dsa_ ? (
            
<div className='practiceCard' style={{borderBottom : '5px solid yellow', backgroundColor : 'rgba(229, 160, 33, 0.192)'}}>

<div className='practiceCardHeading'>

    <div>
        <h4 className='text-center dsa'>DSA</h4>
    <img src={dsa} style={{height : '80px', width : '75px'}}/>
    </div>



</div>


<div className='practiceCardProblems' >
    <p className='text-center'>100 <span className='dsaText'>problems</span></p>
</div>




</div>

        )
    :
    
    (
        
<div className='practiceCard' onClick={() => {
                
                setHtml(false)
                setCss(false)
                setJs(false)
                setDsa(true)
            }}>

<div className='practiceCardHeading'>

    <div>
        <h4 className='text-center dsa'>DSA</h4>
    <img src={dsa} style={{height : '80px', width : '75px'}}/>
    </div>



</div>


<div className='practiceCardProblems' >
    <p className='text-center'>100 <span className='dsaText'>problems</span></p>
</div>




</div>

    )}






</div>


<div id='dndWrapper'>

<DragDrop />

</div>


            <div id='charts'>

                <div>
                <PieChart profileData={profileData}/>
                </div>
                
                <div id='practiceLineChart'>
                <LineChart height= {"352px"}/>
                </div>
                

            </div>

    

            </div>





        </div>

    </div>
  )
}

export default Practice