import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProfileSection.module.css";
import profileImage from "../../assets/Logo.png"; // Make sure the path is correct

const ProfileSection = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className={styles.profileSection}>
      {/* Logo with hover effect */}
      <motion.img
        src={profileImage}
        alt="Profile"
        className={styles.profileImage}
        whileHover={{
          scale: 1.2,
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
        }}
        transition={{ duration: 0.3 }}
        onClick={toggleOptions} // Toggle options on click
      />

      {/* Animated options */}
      <AnimatePresence>
        {showOptions && (
          <div className={styles.optionsContainer}>
            <motion.div
              className={styles.option}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}>
              New Chat
            </motion.div>
            <motion.div
              className={styles.option}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}>
              Settings
            </motion.div>
            <motion.div
              className={styles.option}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}>
              Logout
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileSection;
