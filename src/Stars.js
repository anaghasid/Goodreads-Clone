import React from "react";

class Stars extends React.Component
{
  one()
  {
    var first = document.getElementById('i1');
    var second = document.getElementById('i2');
    var third = document.getElementById('i3');
    var fourth = document.getElementById('i4');
    var fifth = document.getElementById('i5');
    first.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    second.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
    third.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
    fourth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
    fifth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" 
  }
  two()
  {
    var first = document.getElementById('i1');
    var second = document.getElementById('i2');
    var third = document.getElementById('i3');
    var fourth = document.getElementById('i4');
    var fifth = document.getElementById('i5');
    first.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    second.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    third.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
    fourth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
    fifth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
  }
  three()
  {
    var first = document.getElementById('i1');
    var second = document.getElementById('i2');
    var third = document.getElementById('i3');
    var fourth = document.getElementById('i4');
    var fifth = document.getElementById('i5');
    first.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    second.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    third.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    fourth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
    fifth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
  }

  four()
  {
    var first = document.getElementById('i1');
    var second = document.getElementById('i2');
    var third = document.getElementById('i3');
    var fourth = document.getElementById('i4');
    var fifth = document.getElementById('i5');
    first.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    second.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    third.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    fourth.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    fifth.src = "https://s.gr-assets.com/images/layout/gr_red_star_inactive.png"
  }

  five()
  {
    var first = document.getElementById('i1');
    var second = document.getElementById('i2');
    var third = document.getElementById('i3');
    var fourth = document.getElementById('i4');
    var fifth = document.getElementById('i5');
    first.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    second.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    third.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    fourth.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
    fifth.src = "https://s.gr-assets.com/images/layout/gr_red_star_active.png"
  }
  render(){
    return(
      <div>
        <img id="i1" alt="it was amazing" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" onClick={this.one.bind(this)}/>
        <img id="i2" alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" onClick={this.two.bind(this)}/>
        <img id="i3" alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" onClick={this.three.bind(this)}/>
        <img id="i4" alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" onClick={this.four.bind(this)}/>
        <img id="i5" alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" onClick={this.five.bind(this)}/> 
      </div>
    )
  }
}

export default Stars;