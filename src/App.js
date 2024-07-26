import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./components/ProfileSection/ProfileSection";
import ParticleRingBackground from "./components/ParticleRingBackground/ParticleRingBackground";
import Chat from "./components/Chat/Chat";

function App() {
  const [showProfile, setShowProfile] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowProfile(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div className="content">
        <ParticleRingBackground />{" "}
        {showProfile && <Profile className="profile" />}{" "}
        <motion.div
          className="chatContainer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}>
          {" "}
          {window.innerWidth < 768 && showProfile && (
            <button
              className="backButton"
              onClick={() => setShowProfile(false)}>
              Back{" "}
            </button>
          )}{" "}
          <Chat />
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
