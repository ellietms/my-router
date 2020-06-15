import React,{useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
 const [items,setItems] = useState()

  return (
    <div>
      <Link to={`/shop/sun`}>
      <img src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg"
       alt="sun" width={600} height={600} style={{padding:"20px"}}></img>
       </Link>
    </div>
  );
}

export default Shop;
