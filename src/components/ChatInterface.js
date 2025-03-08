import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import MessageBubble from './MessageBubble';
import UserInput from './UserInput';
import Header from './Header';
import '../styles/ChatInterface.css';

const ChatInterface = ({ conversation, onSendMessage, toggleSidebar, isSidebarOpen, isMobile }) => {
  const messagesEndRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const chatContainerRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  // Check if should show scroll to bottom button
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom && conversation?.messages?.length > 0);
    };

    chatContainer.addEventListener('scroll', handleScroll);
    return () => chatContainer.removeEventListener('scroll', handleScroll);
  }, [conversation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!conversation) {
    return (
      <div className="chat-interface">
        <div className="chat-empty-state">
          <div className="empty-state-content">
            <img 
              src="/assets/images/claude-logo.svg" 
              alt="Claude Logo" 
              className="claude-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://cdn.anthropic.com/claude-favicon.png";
              }}
            />
            <h2>Welcome to Claude</h2>
            <p>Start a new conversation to chat with Claude.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-interface">
      <Header 
        title={conversation.title} 
        toggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen}
        isMobile={isMobile}
      />
      
      <div className="chat-messages" ref={chatContainerRef}>
        {conversation.messages.map((message) => (
          <MessageBubble 
            key={message.id} 
            message={message} 
          />
        ))}
        <div ref={messagesEndRef} />
        
        {showScrollButton && (
          <button 
            className="scroll-to-bottom-button"
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
          >
            <FaChevronDown />
          </button>
        )}
      </div>
      
      <div className="chat-input-container">
        <UserInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default ChatInterface;
