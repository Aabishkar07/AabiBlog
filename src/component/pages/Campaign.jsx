import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://ipapi.co/json/");
      setCountry(response.data.country_name);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center pt-5 ps-5">
      <p className="text-center pt-5 ">Country: {country}</p>
    </div>
  );
}
export default App;
