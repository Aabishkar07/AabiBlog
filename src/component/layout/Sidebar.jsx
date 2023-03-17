
import { Link,useNavigate } from "react-router-dom";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiFillDashboard,AiFillFolder,AiOutlineMessage} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import {MdCampaign,MdAnalytics} from "react-icons/md"
import {CgShortcut} from "react-icons/cg"
import {SiCodio} from "react-icons/si"
import { Button } from "bootstrap";

const Sidebar = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // clear the token from localStorage
    localStorage.removeItem("token");
    // redirect to the login page
    history.push("/login");
  };
  return (
    <div className="Section mb-2 ">
       <header className="landing">
        <nav className="navbar navbar-dark fixed-top bg-success flex-md-nowrap p-0 shadow">
          <h3 className="ps-5"><SiCodio/></h3>
          <p className="pt-3">CodingLab</p>
         
          <input
            type="text"
            className="form-control form-control-light w-100 ms-5"
            placeholder="Search..."
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
               <Link className="nav-link text-light me-5" to="#" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
          
        </nav>
        <div> 
      
    </div>
      </header>
    <div className="sidebar mt-5">
      <Link className="active ps-5" to="/dashboard">
        <AiFillDashboard/>  Dashboard 
      </Link>

      <div className="dropdown">
        <ul className="main-nav-ul ">
          <li>
            <Link to="/home" className="ps-3" > <AiFillHome /> Home </Link>
          </li>

          <li>
            <Link to="/campaign">
             <MdCampaign/> Campaign<IoMdArrowDropdown/>
              <span class="sub-arrow" />
            </Link>
            <ul>
              <li>
                <Link to="#">Item 1</Link>
              </li>
              <li>
                <Link to="#">Item 2</Link>
              </li>
              <li>
                <Link to="#">Item 3</Link>
              </li>
              <li>
                <Link to="#">Item 4</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/countries"><AiFillFolder/> Countries</Link>
          </li>
          <li>
            <Link to="#"><MdAnalytics/> Analytics</Link>
          </li>
          <li>
            <Link to="#"><AiOutlineMessage/> Messages</Link>
          </li>
          <li>
            <Link to="#"><CgShortcut/> Shortcuts<IoMdArrowDropdown/></Link>
            <ul>
              <li>
                <Link to="#">Item 1</Link>
              </li>
              <li>
                <Link to="#">Item 2</Link>
              </li>
              <li>
                <Link to="#">Item 3</Link>
              </li>
              <li>
                <Link to="#">Item 4</Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul />
      </div>
      
    </div>
    </div>
  );
};

export default Sidebar;
