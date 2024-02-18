import React from 'react'
import { IonIcon } from '@ionic/react';
import {addCircleOutline} from 'ionicons/icons' ;
import './newcard.css'

const Newcard = () => {
  return (
    <div className='ADDContainer'>
       <IonIcon icon={addCircleOutline} className="ADD"/>
    </div>
  )
}

export default Newcard