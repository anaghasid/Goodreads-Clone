import React from "react";
import "./Home.css";
import myFavImg1 from './images/im0.jpeg'
import myFavImg2 from './images/im2.jpeg'
import myFavImg3 from './images/im6.jpeg'
import myFavImg4 from './images/im4.jpeg'
import myFavImg from './images/im5.jpeg'

class Home extends React.Component{

  handleClick=(bname) =>{
    window.open(`http://localhost:3000/books/${bname}`)
  }
  render(){
    return(
      <div>
          <h3> Recommended Books For You </h3>

  <div class="book1"> 
      <img src={myFavImg} />
      <p id="title" onClick={this.handleClick.bind(this,'Starts')}>It Starts With Us</p> 
      <p id="author">Colleen Hoover</p>
      <p id="description">Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband.</p>
  </div>

  <div class="book1"> 
      <img src={myFavImg1} alt="not available"/>
      <p id="title" onClick={this.handleClick.bind(this,'song')}>The Song of Achilles</p> 
      <p id="author">Madeline Miller</p>
      <p id="description">Achilles, the best of all the Greeks son of the cruel sea goddess Thetis and the legendary king Peleus, is strong, swift, and beautiful, irresistible to all who meet him. Patroclus is an awkward young prince, exiled from his homeland after an act of shocking violence. Brought together by chance, they forge an inseparable bond, despite risking the gods' wrath.</p>
      </div>

      <div class="book1"> 
      <img src={myFavImg2} alt="not available"/>
      <p id="title" onClick={this.handleClick.bind(this,'BirdBox')}>Bird Box</p> 
      <p id="author">Josh Malerman</p>
      <p id="description">it's time to go, but the journey ahead will be terrifying: twenty miles downriver in a rowboat—blindfolded—with nothing to rely on but her wits and the children's trained ears. One wrong choice and they will die. Something is following them all the while, but is it man, animal, or monster.</p>     
      </div>    

      <div class="book1"> 
      <img src={myFavImg3} alt="not available"/>
      <p id="title" onClick={this.handleClick.bind(this,'Insomnia')}>Insomnia</p> 
      <p id="author">Sarah Pinborough</p>
      <p id="description">In this twisty, mind-bending thriller from the bestselling author of Behind Her Eyes, Emma Averell worries that her crippling insomnia is a sign that she’s slowly going insane—like the mother she’s worked so hard to leave in her past.</p>
      </div>

      <div class="book1"> 
      <img src={myFavImg4} alt="not available"/>
      <p id="title" onClick={this.handleClick.bind(this,'Mockingbird')}>To Kill a Mockingbird</p> 
      <p id="author">Harper Lee</p>
      <p id="description">Compassionate, dramatic, and deeply moving, the book takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.</p>
      </div>

      </div>
    )
  }
}
export default Home;