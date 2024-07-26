// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Profile from "./components/ProfileSection/ProfileSection";
import ParticleRingBackground from "./components/ParticleRingBackground/ParticleRingBackground";
import Chat from "./components/Chat/Chat";

function App() {
  const [showProfile, setShowProfile] = useState(true);

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
