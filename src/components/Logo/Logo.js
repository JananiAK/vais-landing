import React from "react";
import LogoIco from "../../assets/Logo.png";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <img className={styles.logoIco} src={LogoIco} alt="Logo" />
  </div>
);

export default Logo;
