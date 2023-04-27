import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import "./Navbar.css";




export default function Navbar({ crrUser, rmvUser }) {

  let navigate = useNavigate()

  function logout() {
    rmvUser()
    navigate('/login')
  }



  return <>

    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="#">FreshCart</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="brands">Brands</NavLink>
            
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to=""> Cart 
              <i className="fa" style={{'fontSize':'12px'}}>&#xf07a;</i>
              <span className='badge badge-warning' id='lblCartCount'> 5 </span>
              
              </NavLink>
            </li>
          </ul>




          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {crrUser ? <> <li className="nav-item">
              <NavLink className="nav-link" to="profile">Profile</NavLink>
            </li>

              <li className="nav-item">
                <span onClick={logout} style={{ cursor: 'pointer' }} className="nav-link">Logout</span>
              </li> </> : <>
              <li className="nav-item">
                <NavLink className="nav-link" to="login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="register">Register</NavLink>
              </li>

            </>}






          </ul>

        </div>
      </div>
    </nav>

  </>
}
