// src/App.js
import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import Logo from "./components/Logo/Logo";
import ParticleRingBackground from "./components/ParticleRingBackground/ParticleRingBackground";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Logo /> {/* <ParticleRingBackground /> */}{" "}
        <motion.div
          className="chatContainer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <Chat />
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
