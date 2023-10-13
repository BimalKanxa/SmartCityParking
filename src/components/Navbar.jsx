import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  let navigate = useNavigate()
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleClick = () => setClick(!click);
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false);
    navigate('/')
  };

  

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

    // Check for login status when the component mounts
      // Check for login status when the component mounts
  useEffect(() => {
    checkLoginStatus();
  }); 
  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           <h3>Smart City Parking</h3>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}> 
            
          <li className="nav-item">
              <NavLink
                exact
                to="/cars"
                activeClassName="active"
                className="nav-links homeLink"
                onClick={handleClick}
              >
                Car Spaces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/bikes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bike Spaces
              </NavLink>
            </li>

              {isLoggedIn ? ( <>
              {/* // Show Logout button when the user is logged in */}
              <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
            <li className="nav-item">
                  <NavLink
                    exact
                    to="/profile"
                    activeClassName="active"
                    className="nav-links nav-contact"
                    onClick={handleClick}
                  >
                    My Profile
                  </NavLink>
                </li>
            </> 
            ) : (
              // Show Login and Register links when the user is not logged in
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/register"
                    activeClassName="active"
                    className="nav-links nav-contact"
                    onClick={handleClick}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
{/*             
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links homeLink"
                onClick={handleClick}
              >
                My Profile
              </NavLink>
            </li> */}
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;