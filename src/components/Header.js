import React from 'react';
import { FaBars, FaEllipsisV } from 'react-icons/fa';

const Header = ({ title, toggleSidebar, isSidebarOpen, isMobile }) => {
  return (
    <div className="chat-header">
      {isMobile && (
        <button 
          className="toggle-sidebar-button button-icon"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <FaBars />
        </button>
      )}
      
      <h2 className="header-title">{title}</h2>
      
      <button className="button-icon" aria-label="More options">
        <FaEllipsisV />
      </button>
    </div>
  );
};

export default Header;
