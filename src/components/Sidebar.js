import React from 'react';
import { FaPlus, FaTimes, FaTrash, FaRegUser } from 'react-icons/fa';
import ConversationsList from './ConversationsList';
import '../styles/Sidebar.css';

const Sidebar = ({ 
  conversations,
  activeConversation,
  onSelectConversation,
  onCreateNewConversation,
  onDeleteConversation,
  isOpen,
  toggleSidebar,
  isMobile
}) => {
  // Function to group conversations by date
  const groupConversationsByDate = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const yesterday = new Date(today - 86400000).getTime();
    const thisWeek = new Date(today - 6 * 86400000).getTime();
    const lastWeek = new Date(today - 13 * 86400000).getTime();
    
    const groups = {
      today: [],
      yesterday: [],
      thisWeek: [],
      lastWeek: [],
      older: []
    };
    
    conversations.forEach(conversation => {
      const conversationDate = new Date(conversation.date).getTime();
      
      if (conversationDate >= today) {
        groups.today.push(conversation);
      } else if (conversationDate >= yesterday) {
        groups.yesterday.push(conversation);
      } else if (conversationDate >= thisWeek) {
        groups.thisWeek.push(conversation);
      } else if (conversationDate >= lastWeek) {
        groups.lastWeek.push(conversation);
      } else {
        groups.older.push(conversation);
      }
    });
    
    return groups;
  };
  
  const conversationGroups = groupConversationsByDate();
  
  // Only render the sidebar if it's open or not on mobile
  const sidebarClass = `sidebar ${isOpen ? 'open' : 'closed'}`;
  
  return (
    <>
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <div className={sidebarClass}>
        <div className="sidebar-header">
          <button className="new-chat-button" onClick={onCreateNewConversation}>
            <FaPlus className="icon" />
            <span>New chat</span>
          </button>
          {isMobile && (
            <button className="close-sidebar-button" onClick={toggleSidebar}>
              <FaTimes className="icon" />
            </button>
          )}
        </div>
        
        <div className="sidebar-content">
          {Object.keys(conversationGroups).map(group => {
            const conversations = conversationGroups[group];
            if (conversations.length === 0) return null;
            
            let groupTitle;
            switch(group) {
              case 'today':
                groupTitle = 'Today';
                break;
              case 'yesterday':
                groupTitle = 'Yesterday';
                break;
              case 'thisWeek':
                groupTitle = 'This Week';
                break;
              case 'lastWeek':
                groupTitle = 'Last Week';
                break;
              case 'older':
                groupTitle = 'Older';
                break;
              default:
                groupTitle = '';
            }
            
            return (
              <div key={group} className="conversation-group">
                <h3 className="group-title">{groupTitle}</h3>
                <ConversationsList 
                  conversations={conversations}
                  activeConversation={activeConversation}
                  onSelectConversation={onSelectConversation}
                  onDeleteConversation={onDeleteConversation}
                />
              </div>
            );
          })}
        </div>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <FaRegUser />
            </div>
            <div className="user-name">Your Account</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;