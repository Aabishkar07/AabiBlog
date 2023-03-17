import React from "react";
import Userlogin from "../component/authorize/Userlogin";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Auth = () => {
  return (
  <>
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Userlogin />} />
    </Routes>
</>

  );
};

export default Auth;

