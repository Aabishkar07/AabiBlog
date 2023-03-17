import React from "react";
import { Routes, Route,Redirect, BrowserRouter } from "react-router-dom";
import Dashboard from "../component/pages/Dashboard";
import Campaign from "../component/pages/Campaign";
import Sidebar from "../component/layout/Sidebar";
import { Navigate } from "react-router-dom";
import Countries from "../component/pages/Countries";
const Global = () => {
  
  return (
    <>
      <Sidebar />
      <Routes>
        <Route exact  path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route  path="/campaign" element={<Campaign />}  />
       <Route path ="/countries" element={<Countries/>}></Route>
      </Routes>
    </>
  );
};

export default Global;
