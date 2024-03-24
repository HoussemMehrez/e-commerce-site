import React from 'react'
import './Orderitem.css'
import { IonIcon } from '@ionic/react';
import { arrowForwardCircleOutline,arrowBackCircleOutline} from 'ionicons/icons' ;
import { setCurrentPage, removeItem } from '../../redux/slices/orderdata';
import { useSelector, useDispatch } from 'react-redux';
import { order } from '../../redux/store';
const Orderitem = () => {
    const ordData = useSelector ((store)=>store?.order?.ordData)
    const currentPage = useSelector((store) => store?.order?.currentPage);
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
                <div className='oneord' id='oneprod'>
                    <div className='chek'><input type='checkbox' ></input></div>
                    <div>
                        <span>{item.product}</span>
                    </div>
                </div>
                <div className='oneord'>
                    <span>{item.id}</span>
                </div>
                <div className='oneord'>
                    <span>{item.Namecustomer}</span>
                </div>
                <div className='oneord'>
                    <span>{item.statut}</span>
                </div>
               

            </div>

        )}
            
                <div className='flech'>
                <IonIcon icon={arrowBackCircleOutline} className="cercle" onClick={handlePrevPage} disabled={currentPage === 1} />
                <IonIcon icon={arrowForwardCircleOutline} className="cercle" onClick={handleNextPage} disabled={indexOfLastItem >= ordData.length} />
                </div>
    </div>
  )
}

export default Orderitem