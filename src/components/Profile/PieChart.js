import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import "./PieChart.css";



ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    title: { display: false }, legend: { display: false }
}


export default function PieChart({profileData, type}) {




  const [ labels, setLabels] = useState(["1", "2", "3", "4", "5"])
  const [arr, setArr] = useState([5,9,3,7,1])

  useEffect(() => {
    const arr1 = []
    const label = []
    if(type == "profiles")
    {
      arr1.push(profileData?.gfg)
      arr1.push(profileData?.leetcode)
      arr1.push(profileData?.hackerrank)

      label.push("gfg")
      label.push("leet")
      label.push("hackrank")
      
      
    
    }
    else
    {
      arr1.push(profileData?.html)
      arr1.push(profileData?.css)
      arr1.push(profileData?.js)
      arr1.push(profileData?.problemSolving)

      label.push("html")
      label.push("css")
      label.push("js")
      label.push("dsa")
      
     
    }

    setArr(arr1)
    setLabels(label)
  }, [profileData])


  
const data = {

  labels: labels,
  datasets: [
    {
        
    
      data: arr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};





  
   


  return (
      <>
   
     
     <div id='pie'>
        <div id='pieC'>
        <Pie data={data}  />
        </div>

        <div className="pt-3">
            <p id='chartLabel'>{type}</p>
        </div>
    

     </div>
   
  
          </>
  );
}
