import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);                          //for terminal
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">OwnNote</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/"? "active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about"? "active":""}`} to="/about">About</Link>
            </li>
          </ul>

          {!localStorage.getItem('token')?<form className="d-flex">
          <Link className="btn btn-success mx-2" to="/login" role="button">LogIn</Link>
          <Link className="btn btn-info mx-2" to="/signup" role="button">SignUp</Link>
          </form>:<button onClick={handleLogout} className="btn btn-secondary">Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
