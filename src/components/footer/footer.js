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
            <img src='fb.png'alt="Facebook Logo" />
            <img src='instagram.png' alt="instagram Logo" />
            <img src='linkdin.png'alt="linkedin Logo" />
            <img src='twitter.png' alt="twitter Logo" />
            
          </div>
        </div>
        <div className="right-section">
          <p>Contact : contact@theteczone.com</p>
        </div>
      </footer>
    
  );
}

export default Footer;
