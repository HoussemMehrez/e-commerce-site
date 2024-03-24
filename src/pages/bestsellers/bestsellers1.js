import React , { useState, useEffect }from 'react'
import './bestsellers1.css';
import { IonIcon } from '@ionic/react';
import { cartOutline , heartOutline, arrowForwardCircleOutline,arrowBackCircleOutline} from 'ionicons/icons' ;
import Carditemm from '../../components/carditem/Carditemm';
const Bestsellers= () => {
    const [data, setData] = useState([
        {
            id: 1 ,
            img : 'pc.png',
            nom:'ASUS VIVOBOOK',
            prix : '2500dt ',
            brand : 'ASUS',
            description: 'This is a section of descriptions...',
            quantity : 1 ,
        },
        {
          id: 2 ,
            img : 'pc.png',
            nom:'DELL G15',
            prix : '2500dt ',
            brand : 'DELL',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 3 ,
            img : 'pc.png',
            nom:'ASUS ROG',
            prix : '2500dt ',
            brand : 'ASUS',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 4 ,
            img : 'pc.png',
            nom:'HP OMEN',
            prix : '2500dt ',
            brand : 'HP',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 5 ,
            img : 'pc.png',
            nom:'LENOVO 12',
            prix : '2500dt ',
            brand : 'LENOVO',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 6 ,
            img : 'pc.png',
            nom:'MSI 1',
            prix : '2500dt ',
            brand : 'MSI',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
            
          id: 7 ,
            img : 'pc.png',
            nom:'ASUS TUF',
            prix : '2500dt ',
            brand : 'ASUS',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 8,
            img : 'pc.png',
            nom:'DELL 2',
            prix : '2500dt ',
            brand : 'DELL',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 9 ,
            img : 'pc.png',
            nom:'LENOVO 2',
            prix : '2500dt ',
            brand : 'LENOVO',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 10 ,
            img : 'pc.png',
            nom:'MSI 2',
            prix : '2500dt ',
            brand : 'MSI',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

            
        },
        {
          id: 11 ,
            img : 'pc.png',
            nom:'TOSHIBA 1',
            prix : '2500dt ',
            brand : 'TOSHIBA',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 12 ,
            img : 'pc.png',
            nom:'ASUS FLIBOOK',
            prix : '3500dt ',
            brand : 'ASUS',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 13 ,
            img : 'pc.png',
            nom:'HP PAVILLON',
            prix : '2500dt ',
            brand : 'HP',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 14 ,
            img : 'pc.png',
            nom:'LENOVO 3',
            prix : '4500dt ',
            brand : 'LENOVO',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 15 ,
            img : 'pc.png',
            nom:'LENOVO 4',
            prix : '1500dt ',
            brand : 'LENOVO',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 16 ,
            img : 'pc.png',
            nom:'LENOVO 5',
            prix : '500dt ',
            brand : 'LENOVO',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 17 ,
            img : 'pc.png',
            nom:'TOSHIBA 2',
            prix : '5500dt ',
            brand : 'TOSHIBA',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

        },
        {
          id: 18 ,
            img : 'pc.png',
            nom:'HP Elitebook',
            prix : '6500dt ',
            brand : 'HP',
            description: 'This is a section of descriptions...',
            quantity : 1 ,

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
        (maxPrice === '' || itemPrice <= parseFloat(maxPrice)) &&
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

                <div className="min"><span>MAKER:</span></div>    
                <div className="box1"><input type="text" className='txt' /></div>
            </div>
        </div>
        
        <div className='totpage'>
        <div className='title'>
          <h2>BEST SELLERS</h2>
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

export default Bestsellers ;

