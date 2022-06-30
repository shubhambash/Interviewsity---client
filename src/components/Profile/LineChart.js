import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';





ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



  export const options = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display : false
      },
      title: {
        display: true,
        
      },
    },
  };
  

  



function LineChart(props) {


  const labels = ['contest1','contest1','contest1','contest1','contest1','contest1','contest1','contest1','contest1','contest1','contest1'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [3,45,1,20,30, 31,32,52,56,68],
        borderColor: 'rgb(255,161,22)',
        backgroundColor: 'rgb(255,161,22)',
      },
      
    ],
  };
  return (
    <>


    <div id='linechart' style={{height : props.height, width : '700px'}}>
    <Line options={options} data={data} />;
    </div>
     
            

    </>
  )
}

export default LineChart