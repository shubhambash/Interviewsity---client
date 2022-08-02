import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import './SearchUser.css'
import { DataGrid } from '@mui/x-data-grid';
function SearchUser() {

  const [input, setInput] = useState();
  const [foundUsers,setFoundUsers] = useState();
  let timer;

  const apiCall = async (user) => {
    try {

      const res = await fetch("http://localhost:5000/finduser", {
            method:"POST",
            headers:{
                
                "Content-Type": "application/json",
                "Accepts":"application/json"
                
            },
            // send string as server wont understand object
            body: JSON.stringify(
                {
                    user
                }
            )
        })


        if(res.status === 201)
        {
          const data = await res.json()
          setFoundUsers(data)
          console.log(data)

          
        }
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleInput = (e) => {

    clearTimeout(timer)
    timer = setTimeout(() => {
      apiCall(e.target.value)
    }, 2000)
  }


  return (
    <>
    
    <div id='searchOutermostWrapper'>
        <Navbar />
        <div id='searchOuterWrapper'>


            <div id='searchConatiner'>

            <div id='searchBarWrapper'>

                <input type="text" id="searchBar" placeholder='Search for user e.g. Manav8888'
                onChange={(e) => handleInput(e)}  />

                <div id='usersFoundWrapper'>


                {foundUsers  && foundUsers.map((O, index) => {
                  return (<>
                  <p id='foundUser' key = {index}> {index + 1} ) &nbsp;&nbsp;&nbsp;&nbsp; {O.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; experience : {O.experience}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Institution : {O.institution}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;problems solved : {O.problemsSolved}</p>
                  </>) 
                })}

                        

                </div>

            </div>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default SearchUser