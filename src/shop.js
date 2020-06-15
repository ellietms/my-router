import React,{useState,useEffect} from 'react';
import './App.css';

function Shop() {

  useEffect(() => {
    fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get",
      {
          headers: {
              Authorization: 'Bearer [your-token-here]'
          },
      }
   )
   .then(data => { 
     data.json()
    console.log(data)
  })
  },[])


  


  return (
    <div>
        <h1>
            Shop Page
        </h1>
    </div>
  );
}

export default Shop;
