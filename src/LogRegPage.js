import './App.css'
import Homepage from "./homepagelog"
import Login from "./Login"
import Register from "./Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function LogRegPage () {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default LogRegPage;