import React from 'react'
import './Orderitem.css'
import { OrderData } from '../Orderdata/OrderData'
import { IonIcon } from '@ionic/react';
import { arrowForwardCircleOutline,arrowBackCircleOutline} from 'ionicons/icons' ;
import { useState } from 'react'
const Orderitem = () => {
    const [ordData,setordData]=useState([
        {
            id : 1 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 2 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'AVIVOBOOK' ,
        },
        {
            id : 3 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 4 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 5 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 6 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 7 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 8 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 9 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 10 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 11 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 12 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 13 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 14 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 15 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 16 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 17,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 18 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 19 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 20 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,


        },
    ])

    const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentlist = ordData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
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