import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../Context";
import { Link } from "react-router-dom";

function Userlogin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://api.devsrvofads.com/api/login",
        { email, password }
      );
      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.setItem("token", response.data.token); // Save user token in local storage
        auth.signIn(response.data.token);
      }
    } catch (error) {
      console.error(error);
      setError(" Invalid Email or password ");
      
    }
  };
  return (
    <div className=" Component">
      

      <form onSubmit={handleSubmit}>
      <h3 className="text-dark  pt-4 text-center ">Login Form</h3>
      <button className="btn btn-primary ms-5 mt-3 mb-2" style={{width:"120px"}}>Login</button>
      <button className="btn btn-light mt-3 mb-2" style={{width:"120px"}}>Signup</button>
        <div className="ms-5 mt-4">
          {/* <label>Email:</label> */}
          <input
            className="form-control border-1 mb-2"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{width:"240px"}}
          />
        </div>
        <div className="ms-5 mt-3">
          {/* <label>Password:</label> */}
          <input
            className="form-control border-1 "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width:"240px"}}
          />
          <Link to="#" className="text-primary" style={{textDecoration:"none"}}>Forget Password?</Link>
        </div>
        {error && <span className="error">{error}</span>}
        <button className="btn btn-primary mt-3 ms-5" style={{width:"240px"}}>Login</button>
        <Link className="ms-5 text-dark mt-3" style={{textDecoration:"none"}}>Create an account <span className="text-primary">Signup now</span></Link>
      </form>
    </div>
  );
}

export default Userlogin;
