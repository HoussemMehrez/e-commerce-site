import React from 'react'
import './Orderdetails.css'
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, lockClosedOutline} from 'ionicons/icons' ;
const payement = () => {
  return (
    <div>
      <div className='etapes'>
      <div className='etape'>
        <IonIcon icon={ lockClosedOutline } id='ion'/>
        <div className='numetape'>1</div>
        <div><span className='nametape'>Basket</span></div>
        <div><IonIcon icon={ chevronForwardOutline } /></div>
      </div>
      <div className='etape'>
        <div className='numetape' id='curent'>2</div>
        <div><span className='nametapecurent'>Order's Details</span></div>
        <div ><IonIcon icon={ chevronForwardOutline } /></div>
      </div>
      <div className='etape'>
        <div className='numetape'>3</div>
        <div><span className='nametape'>Payment</span></div>
        <div><IonIcon icon={chevronForwardOutline} /></div>
      </div>
      <div className='etape'>
        <span className='nametape'>Order completed</span>
      </div>
      
      </div>
      <div className='relogin'>
        <p>Already customer?</p><p>Click here to login</p>
      </div>
      <div className='pagetot'>
      <div className='orderform'>
        <div><p id='build'>Building and shipping</p></div>
        <div className='inform'>
          <div className='iteminform'> 
            <label>First name*</label>
            <input type='txt'></input>
          </div>
          <div className='iteminform'>
            <label>name*</label>
            <input type='txt'></input>
          </div>
        </div>
        <div className='oneinform'>
          <div className='iteminform'>
            <label>Country*</label>
            <input type='txt'></input>
          </div>
        </div>
        <div className='oneinform'>
          <div className='iteminform'>
            <label>Adress*</label>
            <input type='txt'></input>
          </div>
        </div>
        <div className='inform'>
          <div className='iteminform'>
            <label>Governorate*</label>
            <input type='txt'></input>
          </div>
          <div className='iteminform'  >
            <label>City*</label>
            <input type='txt'></input>
          </div>
        </div>
        <div className='oneinform'  >
          <div className='iteminform'>
            <label>Phone*</label>
            <input type='txt'></input>
          </div>
        </div>
        <div className='oneinform' >
          <div className='iteminform'>
            <label>Mail*</label>
            <input type='txt'></input>
          </div>
        </div>
        <div className='moreinfo'>
          <div className='moremore'>
          <h3>Further Informations :</h3>
          <p>Order Notes (optional)</p>
          </div>
          <textarea className='area' placeholder='comment regarding your order, e.g.: delivery instructions'></textarea>
        </div>

      </div>
      <div className='yourorder'>
        <div className='details'>
          <h1>YOUR ORDER</h1>
          <span>Product</span>
        </div>
      
      </div>
      </div>


      
    </div>
  )
}

export default payement