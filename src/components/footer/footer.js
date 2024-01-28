import React, {component} from 'react' ; 
import './footer.css';

function Footer() {
  return (
    
    <footer>
        <div className="left-section">
          <p> Sign up for exclusive offers, original stories,events and less.</p>
          <div className="subscription-form">
            <input type="text" placeholder="Entrez votre e-mail" />
            <button>S'inscrire</button>
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
