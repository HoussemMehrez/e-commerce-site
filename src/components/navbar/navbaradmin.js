import React, { useState } from 'react';
import './navbaradmin.css';
import { IonIcon } from '@ionic/react';
import { menuOutline, searchOutline, appsOutline, eyeOutline, personAddOutline } from 'ionicons/icons'; // Changed imports
import { Link } from 'react-router-dom';
import { useFavorites } from '../../pages/favorits/favorites/Favoritescontext';

const Navbaradmin = () => {
    const { favorites } = useFavorites();
    const [searchVisible, setSearchVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

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
                                <a><Link to="/smartphone" style={{ textDecoration: 'none', color: 'inherit' }}>Smartphone</Link></a>
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
                    <div className='dropdown'>
                        <div className='categ'><a><Link to="/smartphone" style={{ textDecoration: 'none', color: 'inherit' }}>Smartphone</Link></a></div>
                        <div className='categ'><a>Laptop</a></div>
                        <div className='categ'><a>Printers</a></div>
                        <div className='categ'><a>Storage Devices</a></div>
                        <div className='categ'><a>Peripherals</a></div>
                        <div className='categ'><a>Televisions</a></div>
                        <div className='categ'><a>Consoles</a></div>
                        <div className='categ'><a>Tablets</a></div>
                    </div>
                </div>
                <div className='home'><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><span>Home</span></Link></div>
                <div className='support'><span>Support</span></div>
                <div className='logo'><img src='11.png' alt='logo'></img></div>
                <div className='search'>
                    <div className={`search-bar ${searchVisible ? 'active' : ''}`}>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className='iconsearch' onClick={handleSearchClick}>
                        <IonIcon icon={searchOutline} />
                    </div>
                </div>
                <div className='dashbord'><Link to="/admin/Dashbord"><IonIcon icon={appsOutline} id='dash'/></Link></div>
                <div className='cart'><Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}><IonIcon icon={eyeOutline} /></Link></div>
                <div className='person'><Link to="/sign" style={{ textDecoration: 'none', color: 'inherit' }}><IonIcon icon={personAddOutline} /></Link></div>

            </navbar>
        </header>
    )
}

export default Navbaradmin;
