import React from 'react'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import '../css/Nav.css';

function NavBar(){
    return (
       
        <nav class="navbar navbar-expand-md navbar-dark fixed-top" >
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <img src="https://user-images.githubusercontent.com/55467685/112024996-bbaffb00-8b02-11eb-8b90-163b83464486.png" alt="logo" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <Link className="nav-link" to = "/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to = "/signin">Sign In</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to = "/signup">Sign Up</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Regions
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to = "/aboutus">About US</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search"/>
            <button class=" btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
          </form>
        </div>
      </nav>
     
    );
}
export default NavBar;