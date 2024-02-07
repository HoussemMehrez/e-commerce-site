import React from 'react'
import './Creditpayement'
import './Creditpayement.css'
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, lockClosedOutline} from 'ionicons/icons' ;
const Creditpayement = () => {
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
        <div className='numetape' >2</div>
        <div><span className='nametape'>Order's Details</span></div>
        <div ><IonIcon icon={ chevronForwardOutline } /></div>
      </div>
      <div className='etape'>
        <div className='numetape' id='curent'>3</div>
        <div><span  className='nametapecurent'>Payment</span></div>
        <div><IonIcon icon={chevronForwardOutline} /></div>
      </div>
      <div className='etape'>
        <span className='nametape'>Order completed</span>
      </div>
      
      </div>
      <div className='pagetot'>
        <div className='containeroptions'>
            <div className='options'>
                <div  className='option1'>
                <label>
                    <input type="checkbox" name="choix" value="option1" /> Payement by credit card
                </label>
                </div>
                <div>
                    <p>Please enter your payement inoformation</p>
                </div>
            </div>
            <div className='containcardinfo'>
                <div className='cardinfo'>
                    <div className='creditcardinfo'><label>credit card number</label><input type='txt'></input></div>
                    <div className='creditcardinfo'><label>verification code</label><input type='txt'></input></div>
                    <div className='checkcontainer'><div className='check'><p>CHECK</p></div></div>
                </div>
            </div>
            <div className='options' id='newoption'>
                <div  className='option1'>
                <label>
                    <input type="checkbox" name="choix" value="option1" /> Payement in cash on delivery
                </label>
                </div>
            </div>

        </div>
        <div className='yourorder'>
        <div className='details'>
          <div><h1>YOUR ORDER</h1></div>
          <div className='product'><span>Product</span></div>
          <div className='numberitems'><p>2 Items</p></div>
          <div className='itemorder'>
           <img src={require('./pc.png')} alt='pc'/>
            <div>
              <p>1 * DELL G15</p>
              <p>color : noir</p>
              <p>ref : 9S6-BOY10D</p>
            </div>
            <div>2500dt</div>
          </div>
          <div className='itemorder'>
             <img  src={require('./pc.png')} alt='pc'/>
            <div>
              <p>1 * DELL G15</p>
              <p>color : noir</p>
              <p>ref : 9S6-BOY10D</p>
            </div>
            <div>2500dt</div>
          </div>
          <div className='subtotal'>
            <p>Subtotal</p>
            <p>2500dt</p>
          </div>
          <div className='containerorder'>
          <div className='ord'>
           <span>order</span>
          </div>
          </div>
          
        </div>
      
      </div>
      </div>
    </div>
  )
}

export default Creditpayement