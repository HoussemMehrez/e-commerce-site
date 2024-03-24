import React from 'react'
import './my_account.css'
const Myaccount = () => {
  return (
    <div>
        
        <div className='my'> <p>My Account</p></div>

        
        <div className='all'>
          <div className='boxx'>
            <div className='ll'> <span>List User</span></div>
            <div className='ll'> <span>List Admin</span></div>
            <div className='ll'> Code Source</div>
            
            
          </div>

          <div className='boxxx'>
            <div className='box1'>
              <div className='info'> <p>Account Information</p></div>
              <div className='box11'>
                <div className='align'>
                  <div className='contact'> <p>Contact Information</p></div>
                  <div className='edit '> <p> Edit | Change Password</p></div>
                </div>
                  <div className='bb'>
                    <div className='name'> <p>name last name </p></div>
                    <div className='name'> <p>name-lastname@gmail.com </p></div>
                    <div className='name'> <p>+21699888444 </p></div>
                  </div>
                  <div className='alg'>
                <div className='adress'> <p>Address Book</p></div>
                <div className='manage'> <span>|Manage Addresses</span></div>
               
                </div>
              </div>
            </div>

            <div className='box2'>
              
              <div className='box22'>
                <div className='parag'>
                  <div className='prg1 '> 
                   <div className='edd'> <p>Default billing address</p></div>
                   <div className='edd'> <p>You didn't specify a default</p></div>
                   <div className='edd'> <p> billing address.</p></div>
                   <div className='edit1'> <p>Edit address</p></div>
                  </div>
                  
                </div>
                <div className='last'>
                <div className='butt'><span>customer service</span></div>
                <div className='llaa'>
                  <div className='ddd'><p>Default shipping address</p></div>
                  <div className='ddd'><p>You didn't specify a default</p></div>
                  <div className='ddd'><p> shipping address.</p></div>
                  <div className='ddd1'><p> Edit address</p></div>


                </div>
              </div>
              </div>

              
            </div>


            
        </div>


        </div>

        
            
        
    </div>
  )
}

export default Myaccount