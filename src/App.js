import React, { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {login, logout} from "./services/auth.service";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useDispatch, useSelector } from "react-redux";



function App() {


  const { user: currentUser } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  let location = useLocation();
  //login('shiva','123456').then((data)=>{console.log('data', data)})
  const logOut = useCallback(()=>{
    dispatch(logout);
  },[dispatch]);




  
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        bezKoder
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Login
          </Link>
          <Link to={"/profile"} className="nav-link">
            Profile
          </Link>
          
        </li>
      </div>

      {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}

    </nav>

    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>

  </div>
  );
}

export default App;
