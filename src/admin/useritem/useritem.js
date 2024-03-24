import React from 'react'
import './useritem.css'
import { IonIcon } from '@ionic/react';
import { closeOutline} from 'ionicons/icons' ;
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, removeItem } from '../../redux/slices/userdata';
import { user } from '../../redux/store';

const Useritem = () => {
    const ordData = useSelector ((store)=>store?.user?.ordData)
  const currentPage = useSelector((store) => store?.user?.currentPage);
  const dispatch = useDispatch();

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentlist = ordData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage(Math.max(currentPage - 1, 1)));
  };

  const handleRemoveItem = itemId => {
    dispatch(removeItem(itemId));
  };


  return (
    <div>
        {currentlist.map((item,index)=>
            <div key={index} className='informationorder'>
                
                <div className='oneordcheck'>
                    <div className='chek'><input type='checkbox' ></input></div>
                    <span>{item.id}</span>
                </div>
                <div className='oneord'>
                    <span>{item.lastnameuser}</span>
                </div>
                <div className='oneord'>
                    <span>{item.nameUser}</span>
                </div>
                <div className='oneord'>
                    <span>{item.adresse}</span>
                </div>
                <div className='oneord'>
                    <span>{item.date}</span>
                </div>
                <div className='oneord'>
                    <IonIcon icon={closeOutline} className='trash' onClick={() => handleRemoveItem(item.id)} />
                </div>
               

            </div>

        )}

            
            
                <div className='pagination'>
                    <button 
                        className='page-navigation'
                        onClick={handlePrevPage}
                        disabled={currentPage === 1} >
                        Previous
                    </button>
                    {Array.from({ length: Math.ceil(ordData.length / itemsPerPage) }, (_, index) => (
                    <button 
                        key={index} 
                        className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </button>
                    ))}
                    <button 
                        className='page-navigation'
                        onClick={handleNextPage}
                        disabled={indexOfLastItem >= ordData.length}>
                        Next
                    </button>

                </div>
                
    </div>
  )
}

export default Useritem ;