import React from 'react'

import companyLogo from '../../assets/companyLogo.png'
import rightArrowWhite from '../../assets/rightArrowWhite.png'
import { Link } from 'react-router-dom'
import randomCompany from '../../assets/randomCompany.png'
import companyProfile from '../../assets/avatar5.png'
import Navbar1 from '../Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
function Login() {

    const history = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:""
       
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
        const {email,password} = user

       

        const res = await fetch("http://localhost:5000/login", {
            method:"POST",
            credentials: 'include',
            headers:{
                
                "Content-Type": "application/json",
                "Accepts":"application/json"
                
            },
            // send string as server wont understand object
            body: JSON.stringify(
                {
                    email, password
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
            //redirect user to Home page

            const res = await fetch("http://localhost:5000/auth", {
                method:"GET",
                credentials : "include",
                headers:{
                    
                    "Content-Type": "application/json",
                    "Accepts":"application/json"
                    
                },
               
            })

            const data = await res.json();

            if(!data)
            {
                window.alert("authen failed")
            }
            else
            {
                console.log(data)
                const id = data._id;
                const name = data.name;
                const email = data.email;
                const phone = data.phone;
    
              
    
                localStorage.setItem("id",id);
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                localStorage.setItem("phone",phone);
    
                history("/")
            }

        }


    }


    return (
        <>
        
            <div id="pageWrapper">

            
            <Navbar1 />
            <div className='LoginWrapper'>
                <div className='LoginLeftContainer'>

                    <div className='LoginLeftInnerConatiner'>

                    <div id="LoginCompanyLogo">
                        {/* <img src={companyLogo} id='LoginCompanyLogoImg'/> */}
                    </div>

                    <div id="">
                        <p id='LoginHeading'>Login Interviewsity </p>
                    </div>

                    <div className='LoginForm'>

                        <form>
                            <div className="mb-3">
                               
                                <input type="email" className="form-control shadow-none" id="LoginEmailInput" aria-describedby="emailHelp" placeholder='Your Email'
                                name='email'
                                value={user.email}
                                onChange={handleInput}
                                />
                               
                            </div>
                            <div className="mb-3">
     
                                <input type="password" className="form-control shadow-none"  id="LoginPasswordInput" placeholder='Your Password'
                                name='password'
                                value={user.password}
                                onChange={handleInput}
                                   
                                />

                            </div>

                       
                           

                            <div className='text-center'>
                                <button type="submit" className="btn LoginButton" onClick={postData}>Login for free <img src={rightArrowWhite} id="LoginButtonArrow"/></button>
                            </div>
                         
                        </form>

                    </div>

                    <div id="">
                        <p id='LoginBottomText'>Not   <span id='LoginBottomText1'>registered</span> yet ? <Link style={{textDecoration: 'none', color : 'orange'}} to="/login">Register Here</Link> </p>
                    </div>  

                        
                    </div>

                </div>

                <div className='LoginRightContainer'>
                    <div className='LoginLeftInnerConatiner'>
                        <div className='LoginLoginCard'>
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

export default Login