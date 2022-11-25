import React from "react";
import Stars from './Stars'
class Home extends React.Component{

  render(){
    return(
      <div>
          <h2> Popular books of 2022 </h2>
{/*   
  <div class="book1"> 
      <p id="title"> {this.props.bookname} </p>
          <div class="gr_custom_rating_">
            <div id="dynStars" title="it was amazing">
            </div>
          </div>
  </div> */}


  <div class="book1"> 
      <p id="title">It starts with us</p> 
      <p id="author">Colleen Hoover</p>
      <div id="dynStars" title="it was amazing"> <Stars/>
      <p id="description">Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband</p>
      
      </div>
  </div>

  <div class="book1"> 
      <p id="title">The song of Achilles </p> 
      <div id="dynStars" title="it was amazing"> <Stars/>
      <p id="description">
      Achilles, the best of all the Greeks son of the cruel sea goddess Thetis and the legendary king Peleus, is strong, swift, and beautiful, irresistible to all who meet him. Patroclus is an awkward young prince, exiled from his homeland after an act of shocking violence. Brought together by chance, they forge an inseparable bond, despite risking the gods' wrath</p>
      <div id="dynStars" title="it was amazing">
      </div>
      </div>
      </div>
      </div>
    )
}
}
export default Home;

