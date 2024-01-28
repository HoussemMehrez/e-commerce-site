import React , { useState, useEffect }from 'react'
import './Gooddeals1.css';
import { IonIcon } from '@ionic/react';
import { cartOutline , heartOutline, arrowForwardCircleOutline,arrowBackCircleOutline} from 'ionicons/icons' ;

import Carditemm from '../../components/carditem/Carditemm';
const Gooddeals= () => {
    const [data, setData] = useState([
        {
            
            img : 'pc.png',
            nom:'ASUS VIVOBOOK',
            prix : '2500dt ',
            brand : 'ASUS',
        },
        {
            img : 'pc.png',
            nom:'DELL G15',
            prix : '2500dt ',
            brand : 'DELL',
        },
        {
            img : 'pc.png',
            nom:'ASUS ROG',
            prix : '2500dt ',
            brand : 'ASUS',
        },
        {
            img : 'pc.png',
            nom:'HP OMEN',
            prix : '2500dt ',
            brand : 'HP',
        },
        {
            img : 'pc.png',
            nom:'LENOVO 12',
            prix : '2500dt ',
            brand : 'LENOVO',
        },
        {
            img : 'pc.png',
            nom:'MSI 1',
            prix : '2500dt ',
            brand : 'MSI',
        },
        {
            
            img : 'pc.png',
            nom:'ASUS TUF',
            prix : '2500dt ',
            brand : 'ASUS',
        },
        {
            img : 'pc.png',
            nom:'DELL 2',
            prix : '2500dt ',
            brand : 'DELL',
        },
        {
            img : 'pc.png',
            nom:'LENOVO 2',
            prix : '2500dt ',
            brand : 'LENOVO',
        },
        {
            img : 'pc.png',
            nom:'MSI 2',
            prix : '2500dt ',
            brand : 'MSI',
            
        },
        {
            img : 'pc.png',
            nom:'TOSHIBA 1',
            prix : '2500dt ',
            brand : 'TOSHIBA',
        },
        {
            img : 'pc.png',
            nom:'ASUS FLIBOOK',
            prix : '3500dt ',
            brand : 'ASUS',
        },
        {
            
            img : 'pc.png',
            nom:'HP PAVILLON',
            prix : '2500dt ',
            brand : 'HP',
        },
        {
            img : 'pc.png',
            nom:'LENOVO 3',
            prix : '4500dt ',
            brand : 'LENOVO',
        },
        {
            img : 'pc.png',
            nom:'LENOVO 4',
            prix : '1500dt ',
            brand : 'LENOVO',
        },
        {
            img : 'pc.png',
            nom:'LENOVO 5',
            prix : '500dt ',
            brand : 'LENOVO',
        },
        {
            img : 'pc.png',
            nom:'TOSHIBA 2',
            prix : '5500dt ',
            brand : 'TOSHIBA',
        },
        {
            img : 'pc.png',
            nom:'HP Elitebook',
            prix : '6500dt ',
            brand : 'HP',
        },
      
      
    ]) 
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [sortingOption, setSortingOption] = useState('');

  

    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };
    const handleBrandFilterChange = (e) => {
        setBrandFilter(e.target.value);
      };
      const handleSortingOptionChange = (option) => {
        setSortingOption(option);
      };
  
    const filteredData = data.filter((item) => {
      const itemPrice = parseFloat(item.prix); 
  
      
      return (
        (minPrice === '' || itemPrice >= parseFloat(minPrice)) &&
        (maxPrice === '' || itemPrice <= parseFloat(maxPrice))&&
        (brandFilter === '' || item.brand.toLowerCase().includes(brandFilter.toLowerCase()))
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

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  useEffect(() => {
    // Update combinedData whenever filteredData or sortedData changes
    const updatedData = filteredData.slice().sort((a, b) => {
      switch (sortingOption) {
        case 'increasingPrice':
          return parseFloat(a.prix.replace('dt', '')) - parseFloat(b.prix.replace('dt', ''));
        case 'decreasingPrice':
          return parseFloat(b.prix.replace('dt', '')) - parseFloat(a.prix.replace('dt', ''));
        case 'aToZ':
          return a.nom.localeCompare(b.nom);
        case 'zToA':
          return b.nom.localeCompare(a.nom);
        case 'novelty':
          return data.indexOf(a) - data.indexOf(b);
        default:
          return 0;
      }
    });
    setCombinedData(updatedData);
  }, [filteredData, sortingOption]);
 



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

                <div className="min"><span>Brand:</span></div>    
                <div className="box1"><input type="text" className='txt' value={brandFilter} onChange={handleBrandFilterChange} /></div>
            </div>
        </div>
        
        <div className='totpage'>
        <div className='title'>
          <h2>GOOD DEALS</h2>
          <p>Save all your favorite articles</p>
        </div>
        <div className='sortbuttonposition'>
        <div> <span className='sortbutton' >Sort By</span> </div>
        <div class='dropdownsort'>
            <div className='sortopt' onClick={() => handleSortingOptionChange('increasingPrice')}><a>Increasing Price</a></div>
            <div className='sortopt' onClick={() => handleSortingOptionChange('decreasingPrice')}><a>Decreacing Price</a></div>
            <div className='sortopt' onClick={() => handleSortingOptionChange('aToZ')}><a>A - Z</a></div>
            <div className='sortopt' onClick={() => handleSortingOptionChange('zToA')}><a>Z - A</a></div>
            <div className='sortopt' onClick={() => handleSortingOptionChange('novelty')}><a>Novelty</a></div>

        </div>
        </div>
        <div className='cardtot'>
        <Carditemm data={combinedData.slice(startIndex, startIndex + cardsPerPage)} />
          
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