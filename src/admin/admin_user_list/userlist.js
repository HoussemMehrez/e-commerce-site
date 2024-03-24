import React , { useState } from 'react'
import './userlist.css'
import Useritem from '../useritem/useritem' 
import { Link } from 'react-router-dom'
import { UseDispatch,useSelector } from 'react-redux'

const UserList = () => {
  const UserData = useSelector ((store)=>store?.admin?.ordData)


  return (
    <div className='pagetotale'>
       <div className='pagedash'>
          <div className='containerdash'>
            <div  className='imgcontainer'><img src='11.png'></img></div>
            <div className='deshoption'>
            <button className='dashoption1'>User list</button>
            <button className='dashoption2'>
            <Link to="/adminlist" style={{ textDecoration: 'none', color: 'inherit' }}>Admin list</Link></button>
            </div>
          </div>
       </div>
       <div className='pagelist'>
        <div className='orderpath'>
          <div><h2>User list</h2></div>
        </div>
        <div className='listetotale'>
          <div className='recentpur' ><h3>User list</h3></div>
          <div className='informationorder' id='titlee'>
                <div className='oneord'>
                    <span>User id</span>
                </div>
                <div className='oneord'>
                    <span>User Last Name</span>
                </div>
                <div className='oneord'>
                    <span>User First Name</span>
                </div>
                <div className='oneord'>
                    <span>User Adresse</span>
                </div>
                <div className='oneord'>
                    <span>Inscription Date</span>
                </div>


            </div>
            <div className='listorder'>
              <Useritem ordData={ UserData}></Useritem>
            </div>
            
        </div>
       </div>

    </div>
  )
}

export default UserList