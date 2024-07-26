import React from "react";
import { motion } from "framer-motion";
import styles from "./ProfileSection.module.css";
import profileImage from "../../assets/Logo.png"; // Update with the path to your logo image

const ProfileSection = () => (
  <motion.div
    className={styles.ProfileSection}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}>
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />{" "}
        <div className={styles.profileName}> Vaizz </div>{" "}
      </div>{" "}
      <div className={styles.profileBio}>
        Welcome!I’ m your Vaizz, here to make shopping easy by helping you find
        and buy products through our conversation.{" "}
      </div>{" "}
      <div className={styles.profileContact}>
        Contact: your.email @example.com{" "}
      </div>{" "}
    </div>{" "}
  </motion.div>
);

ProfileSection.propTypes = {};

ProfileSection.defaultProps = {};

export default ProfileSection;
