import React, { useEffect, useState } from 'react';
import './description.css'
const Description = ({  }) => {
  

  return (
    <div className='p0'>
      <div id='p1'>
      <h3>NAME OF ARTICLE</h3>
      <hr/> <img src='pc.png' alt='nom' />
      </div>
   
      <div id='p5'>
      
        <h6 id='p2'> 
          Description of article:<br/>
          ..............................<br/>
          ..............................<br/>
          ..............................<br/>
          ..............................<br/>
          ..............................
        </h6>
      </div>
      <div id='p3'>
        <h6>brand</h6>
        <h6>prix</h6>
      </div>
      <div id='p4'>
        <h6>
          Technical file:<br/>
          ..............................<br/>
          ..............................<br/>
          ..............................<br/>
          ..............................<br/>
          ..............................
        </h6>
      </div>
    </div>
  );
};

export default Description;
