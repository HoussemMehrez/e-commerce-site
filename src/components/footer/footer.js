import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="left-section1">
        <p>Sign up for exclusive offers, original stories,</p>
        <div className="left-section2">
          <p>events and more.</p>
          <div className="subscription-form">
            <input type="text" placeholder="Entrez votre adresse e-mail" />
            <button>Subscribe</button>
          </div>
        <div className="follow-us">
          <p>Follow Us</p>
        </div> 
          <div className="social-icons">
            <img src='fb.png' alt="Facebook Logo" />
            <img src='instagram.png' alt="Instagram Logo" />
            <img src='linkdin.png' alt="LinkedIn Logo" />
            <img src='twitter.png' alt="Twitter Logo" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className='containcontact'>
        <p>Contact us : </p> 
        <p>contact@theteczone.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;