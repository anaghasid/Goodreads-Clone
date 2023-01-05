import React from "react";
import Stars from'./Stars';
import "./Books.css";
import myFavImg5 from './images/im4.jpeg';
class Perk extends React.Component{
  render(){
    return(
      <div>
        <h3>My books page</h3>

  <div class="book2">
      <div id="dynStars" title="it was amazing"><Stars name="The song of Achilles"/></div> 
      <img src={myFavImg5} />
      <p id="_title"> Beyond the Wand </p> 
      <p id="_Author"> Tom Felton </p>
      <p id="_description">
      They called for a break, and Gambon magicked up a cigarette from out of his beard. He and I were often to be found outside the stage door, having 'a breath of fresh air', as we referred to it. There would be painters and plasterers and chippies and sparks, and among them all would be me and Dumbledore having a crafty cigarette.

From Borrower to wizard, Tom Felton's adolescence was anything but ordinary. His early rise to fame saw him catapulted into the limelight aged just twelve when he landed the iconic role of Draco Malfoy in the Harry Potter films.
<br/><br/>
Speaking with candour and his own trademark humour, Tom shares his experience of growing up on screen and as part of the wizarding world for the very first time. He tells all about his big break, what filming was really like and the lasting friendships he made during ten years as part of the franchise, as well as the highs and lows of fame and the reality of navigating adult life after filming finished.
<br/><br/>
Prepare to meet a real-life wizard.
      </p>
   
  </div>
  </div>
    )
  }
}
export default Perk;