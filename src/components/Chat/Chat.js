import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatFooter from "../ChatFooter/ChatFooter";
import Styles from "./Chat.module.css"; // Correctly import CSS module

const initialMessages = [
  {
    id: 1,
    text: "Hey there! 👋 Tired of the same old ecommerce routine? Brace yourself—something revolutionary is on the horizon!",
    sender: "system",
  },
  { id: 2, text: "What's coming?", sender: "user" },
  {
    id: 3,
    text: "We're transforming shopping with cutting-edge AI chat. Imagine a personal assistant guiding you to perfect finds effortlessly.",
    sender: "system",
  },
  { id: 4, text: "Intrigued?", sender: "system" },
  {
    id: 5,
    text: "Share your email below, and we'll keep you in the loop!",
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
