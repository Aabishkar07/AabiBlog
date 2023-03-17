import React, { useState } from "react";
import Auth from "./Auth";
import Global from "./Global";

const Root = ({token}) => {
  return <>{token ? <Global /> : <Auth />}</>;

};

export default Root;

