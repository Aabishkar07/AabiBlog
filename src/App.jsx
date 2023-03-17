import Root from "./Routes/Root";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "./component/Context";

const App = () => {
  const [token, setToken] = useState(
  localStorage.getItem("token")? localStorage.getItem("token"):''
  );
  const signIn = (token) => {
    setToken(token);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ signIn }}>
        <Router>
          <Root token={token} />
        </Router>
      </AuthContext.Provider>
    </>
  );
};

export default App;
