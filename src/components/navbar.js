import react , { useState } from 'react';
import './navbar.css';
import { IonIcon } from '@ionic/react';
import { menuOutline , searchOutline , heartOutline , cartOutline, personAddOutline} from 'ionicons/icons' ;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const   Navbar = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    

    const handleSearchClick = () => {
      setSearchVisible(!searchVisible);
      
    };

    const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [dropdown2Visible, setDropdown2Visible] = useState(false);

  const toggleDropdown2 = () => {
    setDropdown2Visible(!dropdown2Visible);
  };

    return (
        <header>
            <navbar>
                <div className='boutton-bar' onClick={toggleDropdown}><div id='icon'><IonIcon icon={menuOutline} /></div></div>
                {dropdownVisible && (
                        <div className="dropdown1">
                            <a id='clickcateg' onClick={toggleDropdown2}>Catégories</a>
                                {dropdown2Visible && (
                                    <div className="dropdown2">
                                        <a>Smartphone</a>
                                        <a>Laptops</a>
                                        <a>Printers</a>
                                        <a>Storage Devices</a>
                                        <a>Peripherals</a>
                                        <a>Televisions</a>
                                        <a>Consoles</a>
                                        <a>Tablets</a>
                                    </div>
                                )}
                            <a>Home</a>
                            <a>Support</a>
                        </div>
                )}
                <div className='categories'>
                    <div id='icon'><IonIcon icon={menuOutline} /></div>
                    <div><span>categories</span></div>
                    <div class='dropdown'>
                        <dic className='categ'><a>Smartphone</a></dic>
                        <dic className='categ'><a></a>laptop</dic>
                        <dic className='categ'><a>printers</a></dic>
                        <dic className='categ'><a></a>storage devices</dic>
                        <dic className='categ'><a></a>Peripherals</dic>
                        <dic className='categ'><a>Televisions</a></dic>
                        <dic className='categ'><a></a>Consoles</dic>
                        <dic className='categ'><a>Tablets</a></dic>
                    </div>
                </div>
                <div className='home'><Link to="/"><span>Home</span></Link></div>
                <div className='support'><Link to="/Gooddeal"><span>Support</span></Link></div>
                <div className='logo'><img src={require('./11.png')} alt='logo'></img></div>
                <div className='search'>
                    <div className={`search-bar ${searchVisible ? 'active' : ''}`}>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='iconsearch'onClick={handleSearchClick}>
                        <IonIcon icon={searchOutline} />
                    </div>
                </div>
                <div className='favoris'><IonIcon icon={heartOutline} /></div>
                <div className='cart'><IonIcon icon={cartOutline} /></div>
                <div className='person'><IonIcon icon={personAddOutline} /></div>
                
            </navbar>
        </header>
    )
}


export default Navbar 

