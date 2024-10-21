// src/components/ProductCarousel/ProductCarousel.js
import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCarousel.css";

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto play
    autoplaySpeed: 2000, // Speed of auto play
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="product-carousel">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
