import React from "react";
class Home extends React.Component{
  render(){
    return(
      <div>
          <h2> Popular books of 2022 </h2>
  
  <div class="book1"> 
      <p id="title">The Alchemist</p>
          <div class="gr_custom_rating_">
            <div id="dynStars" title="it was amazing">
            </div>
          </div>
  </div>


  <div class="book1"> 
      <p id="title">Harry Potter</p> 
      <p id="description"> </p>
      {/* <!-- <p id="description">
          Idk, you should know who Harry Potter is 
      </p>
      </p> --> */}
      <div id="dynStars" title="it was amazing">
      </div>
  </div>

  <div class="book1"> 
      <p id="title">Five Ways to Succeed </p> 
      {/* <!-- <img src="alchemist.jpg" alt="alchemist" id="book_img"> --> */}
      <p id="description">
          1. Be consistent <br/>
          2. Do your web tech project before it's too late <br/>
          3. Do not procrastinate
      </p>
      <div id="dynStars" title="it was amazing">

      </div>
      </div>
      </div>
    )
  }
}
export default Home;