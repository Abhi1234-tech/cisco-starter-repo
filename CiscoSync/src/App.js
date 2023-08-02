import React, { useState, useEffect } from "react";
import Header from "./header.js";
import "./App.css";

function App() {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
       
        const ipAddress = data.ip;
        setIpAddress(ipAddress);
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="Display">
      Your IP is: {ipAddress}
      </div>
      <div class="video-background">
       <video src="https://cdn.pixabay.com/vimeo/334689174/transition-23325.mp4?width=1280&hash=d8343efddf13348bea9f287f6ff1f749a14e53d4" autoPlay muted>
      
      
    </video>
  </div>
    </div>
  );
}

export default App;
