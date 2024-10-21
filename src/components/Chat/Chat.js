// src/components/Chat/Chat.js
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatFooter from "../ChatFooter/ChatFooter";
import ProductData from "../ProductData/ProductData"; // Import product data
import Styles from "./Chat.module.css";
import ProductCarousel from "../ProductCard/ProductCarousel"; // Import ProductCarousel component

const initialMessages = [
  {
    id: 1,
    text: "Hey there! 👋 Ready to shake up your shopping experience? Something exciting is coming your way!",
    sender: "system",
  },
  {
    id: 2,
    text: "What’s it all about?",
    sender: "user",
  },
  {
    id: 3,
    text: "Imagine having a personal shopping assistant right in your chat...",
    sender: "system",
  },
  {
    id: 4,
    text: "That sounds cool! How does it work?",
    sender: "user",
  },
  {
    id: 5,
    text: "You’ll chat with our AI assistant...",
    sender: "system",
  },
  {
    id: 6,
    text: "Want to be one of the first to try it out?",
    sender: "system",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [showProducts, setShowProducts] = useState(false); // Control when to show products
  const messageEndRef = useRef(null); // Scroll control

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (text) => {
    const newMessages = [{ id: messages.length + 1, text, sender: "user" }];

    // Check if user is asking for products
    if (text.toLowerCase().includes("show products")) {
      setShowProducts(true);
      newMessages.push({
        id: messages.length + 2,
        text: "Here are some products for you!",
        sender: "system",
      });
    } else {
      newMessages.push({
        id: messages.length + 2,
        text: "I'm here to help!",
        sender: "system",
      });
    }

    setMessages((prevMessages) => [...prevMessages, ...newMessages]); // Update message state
  };

  return (
    <motion.div
      className={Styles.chatContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}>
      <ChatHeader />
      <motion.div
        className={Styles.messageList}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
        <div ref={messageEndRef} />

        {/* Display product carousel when showProducts is true */}
        {showProducts && (
          <div className={Styles.productCarouselContainer}>
            <ProductCarousel products={ProductData} />
          </div>
        )}
      </motion.div>
      <ChatFooter onSend={handleSend} />
    </motion.div>
  );
};

export default Chat;
