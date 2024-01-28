import React from 'react'
import './Favorits.css'
import { useFavorites } from '../../components/favorites/Favoritescontext';
import Carditemm from '../../components/carditem/Carditemm';

const Favorits = () => {
    const { favorites } = useFavorites();
  return (
    <div className='Favorits'>
      <h2>Favorites</h2>
      <p id='p'>Save all your favorits articles</p>
      <Carditemm data={favorites} />
    </div>
  )
}

export default Favorits
