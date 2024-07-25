// src/components/ChatMessage.js
import React from "react";
import { motion } from "framer-motion";
import Styles from "./ChatMessage.module.css";

const ChatMessage = ({ text, sender }) => (
  <motion.div
    initial={{ opacity: 0, x: sender === "user" ? 100 : -100 }}
    animate={{ opacity: 1, x: 0 }}
    className={`${Styles.message} ${
      sender === "user" ? Styles.user : Styles.system
    }`}>
    {" "}
    {text}{" "}
  </motion.div>
);

export default ChatMessage;
