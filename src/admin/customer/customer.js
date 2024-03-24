import React, { useState } from 'react';
import './customer.css';

const Customer = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div>
            <div className='starter'>
                <div className='welcome'><p>Welcome to customer service</p></div>
                <div className='what'><p>What can we do to help you today?</p></div>
            </div>

            <div className='full'>
                <div className='aa1'>
                    <div className='where'><p>Where is my </p></div>
                    <div className='where'><p>order?</p></div>
                    <div className='paraga'><p>Enter the order number found in your order confirmation email.</p></div>
                    <div className='numb'><p>Order number <span>*</span></p></div>
                    <div className='bv'> <input type='number' ></input></div>
                    <div className='track'><p>track my order</p></div>
                </div>


                <div className='aa1'>
                    <div className='would'><p>I would like to </p></div>
                    <div className='would'><p> return a package</p></div>
                    <div className='paraga1' ><p>Register your returns easily online. </p></div>
                    <div className='paraga2' ><p>All you need is the order number found in your order confirmation email and the email address you used when placing your order.</p></div>
                    <div className='track'><p>Register a return</p></div>
                </div>
            </div>

            <div className='pop'>POPULAR TOPICS</div>

            <div className='full1'>
                <div className='gris'>
                    <div className='dropdown' onClick={toggleDropdown}><p>Where is my order</p></div>
                    <div className='plus'><span>+</span></div>
                    {dropdownVisible && (
                        <div className="dropdown-content">
                            <p>Texte du dropdown pour "Where is my order"</p>
                        </div>
                    )}
                </div>

                <div className='gris'>
                    <div className='ord1'><p>Did you process my return</p></div>
                    <div className='plus'><span>+</span></div>
                </div>

                <div className='gris'>
                    <div className='ord1'><p>I am missing an item in my order</p></div>
                    <div className='plus'><span>+</span></div>
                </div>

                <div className='gris'>
                    <div className='ord1'><p>I need a return label</p></div>
                    <div className='plus'><span>+</span></div>
                </div>
            </div>
            <div className='last'><p><u>Do not hesitate to contact us</u></p></div>
        </div>
    );
};

export default Customer;
