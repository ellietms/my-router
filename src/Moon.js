import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  return (
    <div>
      <Link to={`/sky/sun`}>
      <img src="https://d.newsweek.com/en/full/408892/12-24-15-christmas-full-moon.jpg"
       alt="sun" width={600} height={600} style={{padding:"20px"}}></img>
       </Link>
    </div>
  );
}

export default Shop;
