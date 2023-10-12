import React from 'react'
import {useSelector} from "react-redux";
import ReactDOM from 'react-dom/client'
import './Navbar.css'
import {logout} from "../../auth/auth";

import logo from '../../assets/images/logo.png'
import dp from '../../assets/images/useracc.png'
import si from '../../assets/images/searchicon.jpg'
import styles from "./syles.module.css";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  const profile = '/profile/'
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
      <span href="#" className="navbar-brand"><img src={logo} width="120px" height="40px" alt="Logo" /></span>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarsExample09">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"></a>
          </li>
          
          <li className="nav-item active">
            <a className="nav-link" href="/createPost">Write-Post</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/chat">Chat</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/plantSearch">Plant-Seach</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/explore">Explore</a>
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
        <button className={styles.white_btn} onClick={() => logout()}>
					Logout
				</button>
        
        <form className="form-inline my-2 my-md-0">
          <a href={profile + user?._id}>
          <img src={dp}  className="Navbar_logo__dYWXu" alt="User Account" />
          </a>
        </form>
        
      </div>
    </nav>
  );
};


export default Navbar;