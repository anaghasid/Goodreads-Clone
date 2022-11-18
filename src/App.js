
import './App.css';
import React from "react";
import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"; //browser router is used for saving history.
import Home from "./Home";
import Contact from "./Contact"
import StyledLink from './style';
import Login from './Login';
// import Form from './Form.js';


// has navbar,
class App extends React.Component{
	render(){
  return(
	<Router>
    <div id="top_elements" class="top_elements order-last order-lg-0">
<ul>
<li><p class="div-link"><StyledLink to ="/"> Home</StyledLink></p></li>
<li><p class="div-link">My books</p></li>
<li class="dropdown"><p><span>Browse by genre</span></p>
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
<li><p class="div-link" href="#contact"><StyledLink to ="/contact">Contact</StyledLink></p></li>

<i class="bi bi-list mobile-nav-toggle"></i>
<li><p class="sign_up-btn"><StyledLink to ="/signup">Sign up or login</StyledLink></p></li>
</ul>
</div>
<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/signup" element={<Login/>}/>
				{/* <Route path="/signup" element={<Form/>}/>  */}
				</Routes>
				</Router>
		)
	}
}				

export default App;
