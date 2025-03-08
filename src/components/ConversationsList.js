import React from "react";
import { FaTrash, FaComment } from "react-icons/fa";

const ConversationsList = ({ 
  conversations, 
  activeConversation, 
  onSelectConversation,
  onDeleteConversation
}) => {
  // Format date to display time or date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const isToday = date.getDate() === now.getDate() &&
                    date.getMonth() === now.getMonth() &&
                    date.getFullYear() === now.getFullYear();
    
    if (isToday) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else {
      return date.toLocaleDateString([], { month: "short", day: "numeric" });
    }
  };

  // Get preview text from the first message
  const getPreviewText = (conversation) => {
    if (!conversation.messages || conversation.messages.length === 0) {
      return "New conversation";
    }
    
    const firstMessage = conversation.messages[0];
    const preview = firstMessage.content.slice(0, 50);
    return preview + (firstMessage.content.length > 50 ? "..." : "");
  };

  return (
    <div className="conversations-list">
      {conversations.map((conversation) => {
        const isActive = activeConversation && activeConversation.id === conversation.id;
        
        return (
          <div 
            key={conversation.id} 
            className={`conversation-item ${isActive ? "active" : ""}`}
            onClick={() => onSelectConversation(conversation)}
          >
            <div className="conversation-icon">
              <FaComment />
            </div>
            <div className="conversation-details">
              <div className="conversation-title">{conversation.title}</div>
              <div className="conversation-preview">{getPreviewText(conversation)}</div>
            </div>
            <div className="conversation-actions">
              <span className="conversation-date">{formatDate(conversation.date)}</span>
              <button 
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteConversation(conversation.id);
                }}
                aria-label="Delete conversation"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConversationsList;