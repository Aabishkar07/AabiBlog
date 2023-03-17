import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <header className="landing">
        <nav className="navbar navbar-dark fixed-top bg-Success flex-md-nowrap p-0 shadow">
          <Link className="navbar-brand col-sm-3 col-md-2 mr-0 text-dark" to="#">
            Dashboard
          </Link>
          <input
            type="text"
            className="form-control form-control-primary w-100"
            placeholder="Search..."
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Link className="nav-link text-light" to="#">
                Logout
              </Link>
            </li>
          </ul>
          
        </nav>
        <div> 
      
    </div>
      </header>
    </>
  );
}

export default Sidebar;





























































































