import "./Books.css";
import myFavImg5 from './images/im1.jpeg';
import myFavImg6 from './images/im7.jpeg';
import Stars from './Stars'
import React, { useContext, useState } from "react";
import 'bootstrap';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";



const My_Books = () =>{
  const [books,setAll]=useState([]);
  // setAll can be used to change the state of books
  const navigate=useNavigate();
  const SelectedBook=createContext({})
  useEffect(()=>{
    axios.get("http://localhost:9002/books").then(res=>{setAll(res.data)})
  },[])
    console.log(books)
  
    return(
      <div>
        <h3>My books page</h3>
      {/* <div class="book2">
      <div id="dynStars" title="it was amazing"><Stars name={books[1].Book}/></div> 
      <img src={myFavImg5} />
      <p id="_title">{books[1].Book}</p> 
      <p id="_Author">{books[1].Author}</p>
      <p id="_description"> {books[1].Description} </p>
      </div>
   
        
  <div class="book2">
      <div id="dynStars" title="it was amazing"><Stars name={books[2].Book}/></div> 
      <img src={myFavImg6} />
      <p id="_title">{books[2].Book}</p> 
      <p id="_Author">{books[2].Author}</p>
      <p id="_description"> {books[2].Description} </p>
   
  </div>

  <div class="book2"> 
      <div id="dynStars" title="it was amazing"><Stars name={books[3].Book}/></div>
      <img src={myFavImg6} />
      <p id="_title">{books[3].Book}</p> 
      <p id="_Author">{books[3].Author}</p>
      <p id="_description"> {books[3].Description} </p>
      </div>
        */}
      </div>  

)
}
export default My_Books

// exports.My_Books = function(){}