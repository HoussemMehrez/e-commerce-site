import React , { useState } from 'react'
import './Orderlist.css'
import Orderitem from '../Orderitem/Orderitem'
import { OrderData } from '../Orderdata/OrderData'
import {  Link } from 'react-router-dom';

const Orderlist = () => {



  return (
    <div className='pagetotale'>
       <div className='pagedash'>
          <div className='containerdash'>
            <div  className='imgcontainer'><img src={require('./11.png')}></img></div>
            <div className='dashoption'><Link to="/admin/Dashbord" style={{ textDecoration: 'none', color: 'inherit' }}><span>Dashbord</span></Link></div>
            <div className='dashoption' id='current'><span>Orderlist</span></div>
          </div>
       </div>
       <div className='pagelist'>
        <div className='orderpath'>
          <div><h2>Orderlist</h2></div>
          <div>Home\Orderlist</div>
        </div>
        <div className='listetotale'>
          <div className='recentpur' ><h3>Recent purchases</h3></div>
          <div className='informationorder' id='titlee'>
                <div className='oneord' >
                   
                    <div>
                        <span>product</span>
                    </div>
                </div>
                <div className='oneord'>
                    <span>Order id</span>
                </div>
                <div className='oneord'>
                    <span>Name Customer</span>
                </div>
                <div className='oneord'>
                    <span>Statut</span>
                </div>

            </div>
            <div className='listorder'>
              <Orderitem ordData={ OrderData}></Orderitem>
            </div>
            
        </div>
       </div>

    </div>
  )
}

export default Orderlist