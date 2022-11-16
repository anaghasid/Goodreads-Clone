
import './App.css';

function App() 
{
  return(
    <div id="top_elements" class="top_elements order-last order-lg-0">
<ul>
<li><p class="div-link">Home</p></li>
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
<li><p class="div-link" href="#contact">Contact</p></li>

<i class="bi bi-list mobile-nav-toggle"></i>
<li><p class="sign_up-btn">Sign up or login</p></li>
</ul>
</div>
);
}

export default App;
// export default Top;