import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  const { firebaseContext } = useAuth();
  const { user, Logout,admin } = firebaseContext;
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/">
            <img src={logo} width="140px" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  activeStyle={{ color: "#FEB800" }}
                  className="nav-link nav-NavLink active "
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "#FEB800" }}
                  className="nav-link  nav-NavLink active"
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              {!user.email ? (
                <>
                  <li className="nav-item">
                    <button onClick={handleClick} className="btn my-btn">
                      Login
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item dropdown nav-NavLink active">
                    <NavLink
                      class="nav-link dropdown-toggle "
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-th-list text-white m-2"></i>
                      Dashboard
                    </NavLink>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                     {!admin &&  <NavLink
                      style={{color: "white"}}
                        activeStyle={{ color: "#FEB800" }}
                        className="nav-link active nav-NavLink"
                        to="/pay"
                      >
                        <i class="fas fa-money-bill-wave text-white m-2"></i>
                        Pay
                      </NavLink>}

                     {!admin && <NavLink
                      style={{color: "white"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/myOrders"
                    >
                      <i class="fas fa-shopping-basket text-white m-2"></i>
                      My Orders
                    </NavLink>}
                     
                     {!admin && <NavLink
                      style={{color: "white"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/review"
                    >
                      <i class="fas fa-comment-medical text-white m-2"></i>
                      Review
                    </NavLink>}
                      
                    { admin && 
                    <>
                   
                   <NavLink
                      style={{color: "white"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/manageAllOrder"
                    >
                      <i class="fas fa-sort-alpha-up-alt text-white m-2"></i>
                      All Orders
                      </NavLink>
                   <NavLink
                      style={{color: "white"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/addProducts"
                    >
                      <i class="fas fa-plus text-white m-2"></i>
                      Add a Products
                      </NavLink>
                   <NavLink
                      style={{color: "white"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/manageProduct"
                    >
                      <i class="fas fa-tasks text-white m-2"></i>
                      Manage Products
                      </NavLink>
                      <NavLink
                      style={{color: "white"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      to="/makeAdmin"
                    >
                      <i class="fas fa-users-cog text-white m-2"></i>
                      Make Admin
                    </NavLink>
                    </>
                    }
                    
                     
                     <li
                      style={{color: "white", cursor: "pointer"}}
                      activeStyle={{ color: "#FEB800" }}
                      className="nav-link active nav-NavLink"
                      onClick={Logout}
                      
                    >
                      <i class="fas fa-sign-out-alt text-white m-2" ></i>
                      log out
                    </li>
                  
                    
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeStyle={{ color: "#F34E3A" }}
                      className="nav-link active nav-NavLink"
                      to="/"
                    >
                      {user.displayName}
                    </NavLink>
                  </li>
                  <li onClick={Logout} className=" btn ">
                    <i
                      style={{ color: "#F34E3A" }}
                      class="fas fa-sign-out-alt"
                    ></i>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
