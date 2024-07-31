// src/components/ChatFooter.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../firebase";
import { ref, push, serverTimestamp } from "firebase/database";
import Styles from "./ChatFooter.module.css";

const ChatFooter = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      // Save the email to Firebase Realtime Database
      const emailsRef = ref(database, "emails");
      push(emailsRef, {
        email: text.trim(),
        timestamp: serverTimestamp(),
      });

      // Call the onSend function with the text
      onSend(text);
      setText("");
    }
  };

  return (
    <motion.div
      className={Styles.chatFooter}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <motion.input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className={Styles.input}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      />{" "}
      <motion.button
        onClick={handleSend}
        className={Styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}>
        <FontAwesomeIcon icon={faPaperPlane} />{" "}
      </motion.button>{" "}
    </motion.div>
  );
};

export default ChatFooter;
