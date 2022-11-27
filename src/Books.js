/*import React from "react";
class My_Books extends React.Component{
  render(){
    return(
      <div>
        <div class="book1"> 
      <p id="title">The Perks of Being a Wallflower</p> 
      <p id="author">Stephen Chbosky</p>
      <img src="box.jpg" id="book_img"></img>
      <p id="description">This is the story of what it's like to grow up in high school. More intimate than a diary, Charlie's letters are singular and unique, hilarious and devastating. We may not know where he lives. We may not know to whom he is writing. All we know is the world he shares. Caught between trying to live his life and trying to run from it puts him on a strange course through uncharted territory.</p>
      <div id="dynStars" title="it was amazing">
      </div>
      </div>    

      <div class="book1"> 
      <p id="title">The Silent Patient</p> 
      <p id="author">Alex Michaelides</p>
      <img src="box.jpg" id="book_img"></img>
      <p id="description">The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.</p>
      <div id="dynStars" title="it was amazing">
      </div>
      </div>

      <div class="book1"> 
      <p id="title">Fahrenheit 451</p> 
      <p id="author">Ray Bradbury</p>
      <img src="box.jpg" id="book_img"></img>
      <p id="description">When the character is introduced to a past by his eccentric young neighbour where people did not live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.</p>
      <div id="dynStars" title="it was amazing">
      </div>
      </div>
      </div>
    )
  }
}
export default My_Books;



import React from "react";
import Stars from'./Stars';
import "./Books.css";
import myFavImg5 from './perk.jpg';
import myFavImg6 from './game.jpg';
class My_Books extends React.Component{
  render(){
    return(
      <div>
        <h3>My books page</h3>

  <div class="book2">
      <div id="dynStars" title="it was amazing"><Stars name="Starts"/></div> 
      <img src={myFavImg5} />
      <p id="_title">The Perks of Being a Wallflower</p> 
      <p id="_Author">-Stephen Chbosky</p>
      <p id="_description">This is the story of what it's like to grow up in high school. More intimate than a diary, Charlie's letters are singular and unique, hilarious and devastating. We may not know where he lives. We may not know to whom he is writing. All we know is the world he shares. Caught between trying to live his life and trying to run from it puts him on a strange course through uncharted territory.
      </p>
   
  </div>

  <div class="book2"> 
      <div id="dynStars" title="it was amazing"><Stars name="Starts"/></div>
      <img src={myFavImg6} />
      
      <p id="_title">The Inheritance Games</p> 
      <p id="_Author">-Jennifer Lynn Barnes</p>
      <p id="_description">To receive her inheritance, Avery must move into sprawling, secret passage-filled Hawthorne House, where every room bears the old man's touch -- and his love of puzzles, riddles, and codes. Unfortunately for Avery, Hawthorne House is also occupied by the family that Tobias Hawthorne just dispossessed.
      </p>

      </div>
      </div>

)
}
}
export default My_Books*/

import React from 'react';
import { useNavigate } from "react-router-dom"

class My_Books extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><nav to="/react">Your favourite books</nav></li>
                </ul>
            </div>
        );
    }
}
export default My_Books;
