import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

class Stars extends React.Component
{
  constructor(props){
    super(props);
    this.state = {bookname:this.props.name, stars:0, 
    first:"https://s.gr-assets.com/images/layout/gr_red_star_inactive.png",
  second:"https://s.gr-assets.com/images/layout/gr_red_star_inactive.png",
third:"https://s.gr-assets.com/images/layout/gr_red_star_inactive.png",
fourth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png",
fifth:"https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"}

  }

  sendToDB()
  {
    const uname = "Pavan"
    const stars = String(this.state.stars)
    console.log(uname)
    const book = this.props.name
    const senddata = {book,stars}
    console.log(senddata)
    // CHANGE QWERTY HERE
    axios.post("http://localhost:9002/books", senddata)
        .then(res => {
            alert(res.data.message)
        })
        .catch(function(err){
          console.log(err)
        })
  }
  
  one()
  {
    this.setState({first: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({second: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({third: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({fourth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({fifth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({stars:1})
    this.sendToDB()
  }
  two()
  {    
    this.setState({first: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({second: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({third: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({fourth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({fifth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({stars:2})
    this.sendToDB()

  }
  three()
  {
    this.setState({first: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({second: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({third: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({fourth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({fifth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({stars:3})
    this.sendToDB()
  }

  four()
  {
    this.setState({first: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({second: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({third: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({fourth: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({fifth: "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"})
    this.setState({stars:4})
    this.sendToDB()
  }

  five()
  {
    this.setState({first: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({second: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({third: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({fourth: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({fifth: "https://s.gr-assets.com/images/layout/gr_red_star_active.png"})
    this.setState({stars:5})
    this.sendToDB()
  }

  render(){
    return(
      <div>
        <img id="i1" alt="it was amazing" src={this.state.first} onClick={this.one.bind(this)}/>
        <img id="i2" alt="" src={this.state.second} onClick={this.two.bind(this)}/>
        <img id="i3" alt="" src={this.state.third} onClick={this.three.bind(this)}/>
        <img id="i4" alt="" src={this.state.fourth} onClick={this.four.bind(this)}/>
        <img id="i5" alt="" src={this.state.fifth} onClick={this.five.bind(this)}/> 
      </div>
    )
  }
}

export default Stars;