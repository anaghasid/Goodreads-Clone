import React from "react";
import Stars from'./Stars';
import "./Books.css";
import myFavImg5 from './images/im0.jpeg';
class Perk extends React.Component{
  render(){
    return(
      <div>
        <h3>My books page</h3>

  <div class="book2">
      <div id="dynStars" title="it was amazing"><Stars name="The song of Achilles"/></div> 
      <img src={myFavImg5} />
      <p id="_title">The Song of Achilles</p> 
      <p id="_Author">Stephen Chbosky</p>
      <p id="_description">This is the story of what it's like to grow up in high school. More intimate than a diary, Charlie's letters are singular and unique, hilarious and devastating. We may not know where he lives. We may not know to whom he is writing. All we know is the world he shares. Caught between trying to live his life and trying to run from it puts him on a strange course through uncharted territory.
      </p>
   
  </div>
  </div>
    )
  }
}
export default Perk;