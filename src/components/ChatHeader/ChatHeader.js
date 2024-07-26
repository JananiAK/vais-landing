// src/components/ChatHeader.js
import React from "react";
import { motion } from "framer-motion";
import profile from "../../assets/Logo.png";
import Styles from "./ChatHeader.module.css";

const ChatHeader = ({ onShowProfile }) => (
  <motion.div
    className={Styles.chatHeader}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}>
    <button className={Styles.backButton} onClick={onShowProfile}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={Styles.backArrow}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>{" "}
    </button>{" "}
    <img src={profile} alt="Profile" className={Styles.profilePic} />{" "}
    <span className={Styles.productName}> VAIZZ </span>{" "}
  </motion.div>
);

export default ChatHeader;
