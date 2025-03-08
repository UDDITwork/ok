import React from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import '../styles/MessageBubble.css';

const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';
  
  // Function to format the message timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Function to process and render message content with markdown-like formatting
  const renderContent = (content) => {
    // Simple markdown-like processing (could be replaced with a proper markdown parser)
    // This is a simplified version - a real implementation would use react-markdown or similar
    
    // Replace code blocks
    const processedContent = content
      .split('\n')
      .map((line, i) => {
        // Check for code blocks, bold, italic, etc. here
        return <p key={i}>{line}</p>;
      });
    
    return processedContent;
  };
  
  return (
    <div className={`message-bubble ${isUser ? 'user-message' : 'assistant-message'}`}>
      <div className="message-avatar">
        {isUser ? <FaUser /> : <FaRobot />}
      </div>
      <div className="message-content">
        <div className="message-sender">
          {isUser ? 'You' : 'Claude'}
          <span className="message-time">{formatTimestamp(message.timestamp)}</span>
        </div>
        <div className="message-text">
          {renderContent(message.content)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
