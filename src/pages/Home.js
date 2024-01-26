import React from 'react';
import './Home.css';
import Carousel from '../components/carousel';
import Slider from '../components/slider';
import '../components/slider.css'




const Home = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer1',
  
    },
    {
      id: 2,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer 2',
    
    },
    {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
     
    },
    {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
     
    }, {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
     
    }, {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
     
    }, {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
      
     
    },
    {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
     
    },
    {
      id: 3,
      imageSrc: 'pc.png',
      iconeSrc: 'heart.png',
      title: 'pc gamer3',
     
    },
    
  ]
  const images = ['affiche.png', 'affiche1.png', 'affiche.png'];;  
  return (
    <div >
      <Slider images={images}/>
      
      <h3 id='a1'>
        GOOD DEALS
      </h3>
      <Carousel cardData={cardData}/>
      <div id='a3'>
        <button id='a2'>
        see list
        </button>
      </div>
      <h3 id='a1'>
        BEST SELLERS
      </h3>
      <Carousel cardData={cardData}/>
      <div id='a3'>
        <button id='a2'>
        see list
        </button>
      </div>
      <div>
      <img id='a50'src='affiche.png' height='50%'width='100%'></img>
      </div>
     
      
    </div>
  );
}

export default Home;