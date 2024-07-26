import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatFooter from "../ChatFooter/ChatFooter";
import Styles from "./Chat.module.css"; // Correctly import CSS module

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
    text: "Imagine having a personal shopping assistant right in your chat. Our new AI platform will make finding and buying what you need easier than ever. Get personalized recommendations instantly through a simple conversation!",
    sender: "system",
  },
  {
    id: 4,
    text: "That sounds cool! How does it work?",
    sender: "user",
  },
  {
    id: 5,
    text: "You’ll chat with our AI assistant, which learns your preferences and helps you discover the perfect products. It’s all about making your shopping experience smooth and enjoyable.",
    sender: "system",
  },
  {
    id: 6,
    text: "Want to be one of the first to try it out? Drop your email below, and we’ll keep you updated with all the exciting details and exclusive previews!",
    sender: "system",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState(null);
  const messageEndRef = useRef(null); // Initialize useRef

  useEffect(() => {
    const interval = 1000; // Delay between messages in milliseconds
    initialMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages((prevMessages) => {
          // Check if the message is already present
          if (!prevMessages.some((m) => m.id === msg.id)) {
            return [...prevMessages, msg];
          }
          return prevMessages;
        });
      }, index * interval);
    });
  }, []);
  useEffect(() => {
    // Auto-scroll to the bottom of the chat when messages update
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = (text) => {
    console.log(email);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newMessages = [];

    if (emailPattern.test(text)) {
      setEmail(text);
      newMessages.push({ id: messages.length + 1, text, sender: "user" });
      newMessages.push({
        id: messages.length + 2,
        text: "Thanks! 🎉 You're now on the list for exciting updates. Expect to hear from us soon with all the latest news!",
        sender: "system",
      });
    } else {
      newMessages.push({ id: messages.length + 1, text, sender: "user" });
      newMessages.push({
        id: messages.length + 2,
        text: "Please enter a valid email address.",
        sender: "system",
      });
    }

    setMessages((prevMessages) => {
      // Avoid adding duplicate messages
      return [
        ...prevMessages,
        ...newMessages.filter(
          (msg) => !prevMessages.some((m) => m.id === msg.id)
        ),
      ];
    });
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
        {" "}
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
        ))}{" "}
        <div ref={messageEndRef} />{" "}
      </motion.div>{" "}
      <ChatFooter onSend={handleSend} />{" "}
    </motion.div>
  );
};

export default Chat;
