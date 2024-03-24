import React , { useState } from 'react'
import './adminlist.css'
import { useSelector, useDispatch } from 'react-redux';
import Adminitem from '../adminitem/adminitem' 
import { Link } from 'react-router-dom'
import { admin } from '../../redux/store';

const AdminList = () => {

  const AdminData = useSelector ((store)=>store?.admin?.ordData)

  return (
    <div className='pagetotale'>
       <div className='pagedash'>
          <div className='containerdash'>
            <div  className='imgcontainer'><img src='11.png'></img></div>
            <div className='deshoption'>
            <button  className='dashoption1'> <Link to="/userlist" style={{ textDecoration: 'none', color: 'inherit'}}>User list</Link></button>
            <button className='dashoption2'>Admin list</button>
            </div>
          </div>
       </div>
       <div className='pagelist'>
        <div className='orderpath'>
          <div><h2>Admin list</h2></div>
        </div>
        <div className='listetotale'>
          <div className='recentpur' ><h3>Admin list</h3></div>
          <div className='informationorder' id='titlee'>
                <div className='oneord'>
                    <span>Admin id</span>
                </div>
                <div className='oneord'>
                    <span>Admin Last Name</span>
                </div>
                <div className='oneord'>
                    <span>Admin First Name</span>
                </div>
                <div className='oneord'>
                    <span>Admin Adresse</span>
                </div>
                <div className='oneord'>
                    <span>Admin Status</span>
                </div>


            </div>
            <div className='listorder'>
              <Adminitem ordData={ AdminData}></Adminitem>
            </div>
            
        </div>
       </div>

    </div>
  )
}

export default AdminList