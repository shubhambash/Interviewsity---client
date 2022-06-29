import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function Logout() {

    const navigate = useNavigate();
    useEffect(() => {
        LogoutFunc();
    }, [])


    const LogoutFunc = async () => {
        
        try {

            const res = await fetch("http://localhost:5000/logout",
            {
                method : "GET",
                credentials : 'include'
            })

            if(res.status === 200)
            {
                localStorage.clear()
                navigate("/")
            }
            else
            {
                throw new Error("cannot login")
            }
            
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>

    </>
  )
}

export default Logout