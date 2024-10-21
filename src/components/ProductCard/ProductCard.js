// src/components/ProductCard/ProductCard.js
import React from "react";
import { motion } from "framer-motion";
import "./ProductCard.css"; // Import the CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }} // Slightly enlarge the card on hover
      transition={{ type: "spring", stiffness: 300 }}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
      <motion.button
        className="product-action"
        onClick={() => alert(`Purchased ${product.name}`)}
        whileTap={{ scale: 0.95 }} // Slightly shrink the button on tap
        transition={{ type: "spring", stiffness: 300 }}>
        Buy Now
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
