import React, { useState } from 'react';
import "./signin.css"; 
 

const Signup = () => {
  const [action, setAction] = useState("wolcome to The TechZone");

  return (
<div>
      <table>
        <tbody>
          <tr>
            <th>
            <img scr="background.png" alt="" />
</th>
<th>
  
 < img scr="the_tecgzone.png" alt=""/> 
     <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        
      </div>
      <div className='inputs'>
        {action === "Login" ? null : 
          <div className='input'>
            <img src="person.png"alt=""/>
            <input placeholder="Name" type="text"/>
          </div>
        }
        <div className='input'>
          <img src="email.png" alt=""/>
          <input placeholder="Email Id" type="email"/>
        </div>
        <div className='input'>
          <img src="password.png" alt=""/>
          <input placeholder='Password' type='password'/>
        </div>
        <div className={action === "Sign Up" ? 'forgot-password' : null}>
          {action === "Sign Up" ? null : <span>forgot Your Password? Click Here!</span>}
        </div>
      </div>
      <div className="submit-container">  
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
      </div>
    </div>
    </th> 





      </tr>
      </tbody>
      </table>
      </div>
  );
}

export default Signup;
