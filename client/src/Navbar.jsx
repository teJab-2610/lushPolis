import React from 'react'
import ReactDOM from 'react-dom/client'
import './Navbar.css'
import logo from './assets/logo.png'
import dp from './assets/useracc.png'
import si from './assets/searchicon.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      <span href="#" className="navbar-brand"><img src={logo} width="120px" height="40px" alt="Logo" /></span>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarsExample09">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li>
          <div class=" searchp p-1 bg-light rounded rounded-pill shadow-sm" style={{ width: '35rem'}} >
            <div class="input-group">
              <div class="input-group-prepend">
                <button id="button-addon2" type="submit" class="btn btn-link text-warning"><img src={si} style={{    width: '1.2rem'}}></img></button>
              </div>
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon2" class="form-control border-0 bg-light"/>
            </div>
          </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <a href="/login"><img src={dp} className="Navbar_logo__dYWXu" alt="User Account" /></a>
        </form>
      </div>
    </nav>
  );
};


export default Navbar;