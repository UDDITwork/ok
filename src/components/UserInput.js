import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUp, FaPaperclip } from 'react-icons/fa';

const UserInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef(null);

  // Adjust textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.trim() !== '');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    
    onSendMessage(trimmedMessage);
    setMessage('');
    setIsTyping(false);
    
    // Focus back to textarea after sending
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  };

  return (
    <div className="user-input">
      <div className="textarea-container">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Message Claude..."
          rows={1}
          className="message-textarea"
        />
        
        <div className="input-actions">
          <button 
            className="attach-button"
            aria-label="Attach file"
          >
            <FaPaperclip />
          </button>
          
          <button 
            className={`send-button ${isTyping ? 'active' : ''}`}
            onClick={handleSubmit}
            disabled={!isTyping}
            aria-label="Send message"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
      
      <div className="input-footer">
        <span className="input-hint">Shift + Enter for new line</span>
      </div>
    </div>
  );
};

export default UserInput;
