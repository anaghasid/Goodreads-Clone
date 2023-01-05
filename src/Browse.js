import React from "react";
import "./Browse.css";
import myFavIm3 from './images/im1.jpeg'
import myFavIm4 from './images/im2.jpeg'
import myFavIm5 from './images/im0.jpeg'
import myFavIm6 from './images/im4.jpeg'
import myFavIm7 from './images/im5.jpeg'
import myFavIm8 from './images/im6.jpeg'
import myFavIm9 from './images/im7.jpeg'
import myFavIm10 from './images/im8.jpeg'
import myFavIm11 from './images/im9.jpeg'
import myFavIm12 from './images/im10.jpeg'
import myFavIm13 from './images/im11.jpeg'
import myFavIm14 from './images/im12.jpeg'
import myFavIm15 from './images/im13.jpeg'
import myFavIm16 from './images/im14.jpeg'
import myFavIm17 from './images/im15.jpeg'
import myFavIm18 from './images/im16.jpeg'
import myFavIm19 from './images/im17.jpeg'
import myFavIm20 from './images/im18.jpeg'
import myFavIm21 from './images/im19.jpeg'
import myFavIm22 from './images/im20.jpeg'




class Browse extends React.Component{

  
  handleClick=(bname) =>{
    window.open(`http://localhost:3000/bookss/${bname}`)
  }

  render(){
    return(
      <div>
        <h2> Wanna try new books?</h2>
        <p>Fiction</p>
        <img src={myFavIm3} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm4} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm5} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm6} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <p>Thriller</p>
        <img src={myFavIm7} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm8} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm9} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm10} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <p>Romance</p>
        <img src={myFavIm11} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm12} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm13} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm14} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <p>Comedy</p>
        <img src={myFavIm15} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm16} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm17} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm18} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <p>Autobiography</p>
        <img src={myFavIm19} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm20} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm21} alt="not available" onClick={this.handleClick.bind(this,'song')}/>
        <img src={myFavIm22} alt="not available" onClick={this.handleClick.bind(this,'song')}/> 
        
        
      </div>
    )
  }
}




export default Browse;