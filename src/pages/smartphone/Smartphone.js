import React , { useState }from 'react'
import '../gooddeals/Gooddeals1';
import { IonIcon } from '@ionic/react';
import { cartOutline , heartOutline, arrowForwardCircleOutline,arrowBackCircleOutline} from 'ionicons/icons' ;
import Footer from '../../components/footer/footer'
import Carditemm from '../../components/carditem/Carditemm';
const Gooddeals= () => {
    const [data, setData] = useState([
        {
            
            img : 'iphone.png',
            nom:'smartphone1',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone2',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone3',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone4',
            prix : '2500dt ',
        },
        { 
            img : 'iphone.png',
            nom:'smartphone5',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone6',
            prix : '2500dt ',
        },
        {
            
            img : 'iphone.png',
            nom:'smartphone7',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone8',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone9',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone10',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone11',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone12',
            prix : '3500dt ',
        },
        {
            
            img : 'iphone.png',
            nom:'smartphone13',
            prix : '2500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone14',
            prix : '4500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone15',
            prix : '1500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone16',
            prix : '500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone17',
            prix : '5500dt ',
        },
        {
            img : 'iphone.png',
            nom:'smartphone18',
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
          <h2>Smartphone</h2>
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
   
    </div>
   

  )
}

export default Gooddeals ;