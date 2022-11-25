/*import './App.css';

import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom"; //browser router is used for saving history.
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import StyledLink from './style';
class App extends React.Component{
	render(){
		return(
			<Router>
				<div> <StyledLink to ="/"> Home</StyledLink></div>
				<div> <StyledLink to ="/about"> About</StyledLink></div>
				<div> <StyledLink to ="/contact"> Contact</StyledLink></div>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>	
			</Router>
		)
	}
}
export default App;*/


// export default Top;*/


import './App.css';
import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom"; //browser router is used for saving history.
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import My_Books from "./Books";
import Browse from "./Browse";
import StyledLink from './style';
import LogRegPage from './LogRegPage'
import Register from './Register';


class App extends React.Component{
	render(){
  return(
	<Router>
    <div id="top_elements" class="top_elements order-last order-lg-0">
<ul>
<li><p class="div-link"><StyledLink to ="/"> Home</StyledLink></p></li>
<li><p class="div-link"><StyledLink to ="/books"> My Books</StyledLink></p></li>
<li class="dropdown"><p><span><StyledLink to ="/browse"> Browse By Genre</StyledLink></span></p>
  <ul>
    <li>Autobiography</li>
    <li class="dropdown"><p><span>Fiction</span></p>
      <ul>
        <li>Fantasy</li>
        <li>Literary Fiction</li>
        <li>Romance</li>
        <li> Thrillers</li>
      </ul>
    </li>
    <li>Self help</li>
    <li>Mystery</li>
    <li>Poetry</li>
  </ul>
</li>
<li><p class="div-link" href="#contact" ><StyledLink to ="/contact">Contact</StyledLink></p></li>

<i class="bi bi-list mobile-nav-toggle"></i>
<li><p class="sign_up-btn"><StyledLink to ="/logreg">Sign up or login</StyledLink></p></li>
</ul>
</div>
<Routes>
	<Route exact path="/" element={<Home/>}/>
	<Route path="/contact" element={<Contact/>}/>
	<Route path="/books" element={<My_Books/>}/>
	<Route path="/browse" element={<Browse/>}/>
<<<<<<< HEAD
	<Route path="/logreg" element={<Login/>}/>
	<Route path="/register" element={<Register/>}/>
=======
	<Route path="/login" element={<Login/>}/>
>>>>>>> 97cf245b5be256e9bcda07093d8869944262950a
</Routes>
</Router>
		)
	}
}				

export default App;
