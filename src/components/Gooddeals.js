import React , { useState }from 'react'
import './Gooddeals.css';
import { IonIcon } from '@ionic/react';
import { cartOutline , heartOutline, arrowForwardCircleOutline,arrowBackCircleOutline} from 'ionicons/icons' ;
import Footer from './footer'
import Carditemm from './Carditemm';
const Gooddeals= () => {
    const [data, setData] = useState([
        {
            
            img : 'pc.png',
            nom:'pc gamer1',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer2',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer3',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer4',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer5',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer6',
            prix : '2500dt ',
        },
        {
            
            img : 'pc.png',
            nom:'pc gamer7',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer8',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer9',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer10',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer11',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer12',
            prix : '3500dt ',
        },
        {
            
            img : 'pc.png',
            nom:'pc gamer13',
            prix : '2500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer14',
            prix : '4500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer15',
            prix : '1500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer16',
            prix : '500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer17',
            prix : '5500dt ',
        },
        {
            img : 'pc.png',
            nom:'pc gamer18',
            prix : '6500dt ',
        },
      
    ]) 
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
  

    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };
  
    const filteredData = data.filter((item) => {
      const itemPrice = parseFloat(item.prix); 
  
      
      return (
        (minPrice === '' || itemPrice >= parseFloat(minPrice)) &&
        (maxPrice === '' || itemPrice <= parseFloat(maxPrice))
      );
    });
    const cardsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);

  const nextGroup = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + cardsPerPage, data.length - cardsPerPage));
  };

  const prevGroup = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };
    
  return (
    <div>
        <div className='page'>
        <div className='filtre'>
            <div className="filtering"><span>FILTERING</span></div>
            <div className="box">
                <div className="min"><span>MIN PRICE:</span></div>    
                <div className="box1"><input type="text" className='txt' value={minPrice} onChange={handleMinPriceChange} /></div>

                <div className="min"><span>MAX PRICE:</span></div>    
                <div className="box1"> <span><input type="text" className='txt' value={maxPrice} onChange={handleMaxPriceChange}/></span> </div>

                <div className="min"><span>MAKER:</span></div>    
                <div className="box1"><input type="text" className='txt' /></div>
            </div>
        </div>
        
        <div className='totpage'>
        <div className='title'>
          <h2>GOOD DEALS</h2>
          <p>Save all your favorite articles</p>
        </div>
        <div className='cardtot'>
          <Carditemm data={filteredData.slice(startIndex, startIndex + cardsPerPage)} />
        </div>
        <div className='flech'>
        <IonIcon icon={arrowBackCircleOutline} className="cercle" onClick={prevGroup} />
        <IonIcon icon={arrowForwardCircleOutline} className="cercle" onClick={nextGroup} />
        </div>
      </div>
      
   </div>
   <Footer />
    </div>
   

  )
}

export default Gooddeals ;

