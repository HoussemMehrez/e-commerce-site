import React, { useState } from 'react'
import './Dashbord.css'
import {  Link } from 'react-router-dom';
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




const Dashbord = () => {
  

  return (
    <div className='pagetotale'>
       <div className='pagedash'>
          <div className='containerdash'>
            <div  className='imgcontainer'><img src='11.png'></img></div>
            <div className='dashoption' id='current'><span>Dashbord</span></div>
            <div className='dashoption' ><Link to="/admin/Orderlist" style={{ textDecoration: 'none', color: 'inherit' }}><span>Orderlist</span></Link></div>
          </div>
       </div>
       <div className='pagelist'>
        <div className='orderpath'>
            <div><h2>Dashbord</h2></div>
            <div>Home\Dashbord</div>
          </div>
          <div>
         
          </div>
       </div>
    </div>
  )
}

export default Dashbord