import React from 'react'
import './Signup.css'
import companyLogo from '../../assets/companyLogo.png'
import rightArrowWhite from '../../assets/rightArrowWhite.png'
import { Link } from 'react-router-dom'
import randomCompany from '../../assets/randomCompany.png'
import companyProfile from '../../assets/avatar5.png'
import Navbar1 from '../Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup() {

    const history = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:"",
        name : "",
        phone : "",
        location : "",
        institution : "",
    })
    
    let tname, value;
    const handleInput = (e) =>
    {
        tname = e.target.name
        value = e.target.value

        setUser({...user, [tname]:value})
    }



    const postData = async (e) => {

        e.preventDefault();
        const {name, email, phone, password, location, institution} = user

       

        const res = await fetch("http://localhost:5000/register", {
            method:"POST",
            headers:{
                
                "Content-Type": "application/json",
                "Accepts":"application/json"
                
            },
            // send string as server wont understand object
            body: JSON.stringify(
                {
                    name, email, phone, password, location, institution
                }
            )
        })

        // show errors on client side
        const data = await res.json();

        if(res.status === 422 || !data)
        {
            window.alert("Invalid Register")
            console.log(data)
        }
        else
        {
            //redirect user to login page

            history("/login")
        }


    }


    return (
        <>
        
            <div id="pageWrapper">

            
            <Navbar1 />
            <div className='SignupWrapper'>
                <div className='SignupLeftContainer'>

                    <div className='SignupLeftInnerConatiner'>

                    <div id="SignupCompanyLogo">
                        {/* <img src={companyLogo} id='SignupCompanyLogoImg'/> */}
                    </div>

                    <div id="">
                        <p id='SignUpHeading'>Register Interviewsity </p>
                    </div>

                    <div className='SignupForm'>

                        <form>
                            <div className="mb-3">
                               
                                <input type="email" className="form-control shadow-none" id="SignupEmailInput" aria-describedby="emailHelp" placeholder=' Email'
                                name='email'
                                value={user.email}
                                onChange={handleInput}
                                />
                               
                            </div>
                            <div className="mb-3">
     
                                <input type="password" className="form-control shadow-none"  id="SignupPasswordInput" placeholder=' Password'
                                name='password'
                                value={user.password}
                                onChange={handleInput}
                                   
                                />

                            </div>

                            <div className="mb-3">
     
                                <input type="text" className="form-control shadow-none"  id="SignupPasswordInput" placeholder=' Full Name'
                                name='name'
                                value={user.name}
                                onChange={handleInput}
                                   
                                />

                            </div>

                            <div className="mb-3">
     
                                <input type="number" className="form-control shadow-none"  id="SignupPasswordInput" placeholder=' Contact Number'
                                name='phone'
                                value={user.phone}
                                onChange={handleInput}
                                   
                                />

                            </div>

                            <div className="mb-3">
     
                                <input type="text" className="form-control shadow-none"  id="SignupPasswordInput" placeholder=' Location'
                                name='location'
                                value={user.location}
                                onChange={handleInput}
                                    
                                />

                            </div>



                            <div className="mb-3">
     
                                <input type="text" className="form-control shadow-none"  id="SignupPasswordInput" placeholder='College/ Institution'
                                name='institution'
                                value={user.institution}
                                onChange={handleInput}
                                    
                                />

                            </div>


                            <div className='text-center'>
                                <button type="submit" className="btn SignupButton" onClick={postData}>Signup for free <img src={rightArrowWhite} id="SignupButtonArrow"/></button>
                            </div>
                         
                        </form>

                    </div>

                    <div id="">
                        <p id='SignupBottomText'>Do you already <span id='SignupBottomText1'>have an account?</span>  <Link style={{textDecoration: 'none', color : 'orange'}} to="/login">Signin</Link> </p>
                    </div>  

                        
                    </div>

                </div>

                <div className='SignupRightContainer'>
                    <div className='SignupLeftInnerConatiner'>
                        <div className='SignupLoginCard'>
                            <div className='CompanyName'>
                            <img src={randomCompany} id="companyNameImg" />
                            </div>

                            <div className='CompanyText'>
                            <p id='CompanyText' >"Chatlogic has enabled us a whole new line of company revenue and unparelled automation" </p>
                            </div>

                            <div className='CompanyProfile'>
                            <img src={companyProfile} id="companyprofile"/>
                            <span id='companyprofileText'>Mr. Steve Carell
                            </span>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </>

    )

}

export default Signup