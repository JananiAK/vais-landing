// src/components/ParticleRingBackground/ParticleRingBackground.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useDragControls,
} from "framer-motion";
import { pointsInner, pointsOuter } from "./utils";
import logo from "../../assets/Logo.png"; // Assuming your logo SVG is located here
import Styles from "./ParticleRingBackground.module.css"; // Assuming you have some CSS module for styling

const ParticleRingBackground = () => {
  return (
    <div className="particleRingBackground">
      <Canvas
        camera={{ position: [10, -7.5, -5] }}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
        }}>
        <OrbitControls maxDistance={20} minDistance={10} /> <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} /> <PointCircle />
      </Canvas>{" "}
      <DraggableLogo />
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {" "}
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}{" "}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}{" "}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />{" "}
    </Sphere>
  );
};

const DraggableLogo = () => {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      className={Styles.logoContainer}>
      <img src={logo} alt="Logo" className={Styles.logo} />{" "}
    </motion.div>
  );
};

export default ParticleRingBackground;
