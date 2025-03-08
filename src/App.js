import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import { mockConversations } from './utils/mockData';
import './styles/App.css';

const App = () => {
  const [conversations, setConversations] = useState(mockConversations);
  const [activeConversation, setActiveConversation] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set the first conversation as active on initial load
  useEffect(() => {
    if (conversations.length > 0 && !activeConversation) {
      setActiveConversation(conversations[0]);
    }
  }, [conversations, activeConversation]);

  // Function to create a new conversation
  const createNewConversation = () => {
    const newConversation = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      date: new Date().toISOString(),
    };
    setConversations([newConversation, ...conversations]);
    setActiveConversation(newConversation);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Function to handle sending a new message
  const handleSendMessage = (content) => {
    if (!activeConversation) return;

    // Create a copy of the active conversation
    const updatedConversation = { ...activeConversation };
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    
    updatedConversation.messages = [...updatedConversation.messages, userMessage];
    
    // Update the conversation title if it's the first message
    if (updatedConversation.messages.length === 1) {
      updatedConversation.title = content.slice(0, 30) + (content.length > 30 ? '...' : '');
    }
    
    // Update conversations state
    const updatedConversations = conversations.map(conv => 
      conv.id === activeConversation.id ? updatedConversation : conv
    );
    
    setConversations(updatedConversations);
    setActiveConversation(updatedConversation);
    
    // Simulate Claude's response after a short delay
    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `This is a simulated response to: "${content}"`,
        timestamp: new Date().toISOString(),
      };
      
      updatedConversation.messages = [...updatedConversation.messages, assistantMessage];
      
      const finalUpdatedConversations = conversations.map(conv => 
        conv.id === activeConversation.id ? updatedConversation : conv
      );
      
      setConversations(finalUpdatedConversations);
      setActiveConversation(updatedConversation);
    }, 1000);
  };

  // Function to select a conversation
  const selectConversation = (conversation) => {
    setActiveConversation(conversation);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  // Function to delete a conversation
  const deleteConversation = (id) => {
    const updatedConversations = conversations.filter(conv => conv.id !== id);
    setConversations(updatedConversations);
    
    if (activeConversation && activeConversation.id === id) {
      setActiveConversation(updatedConversations.length > 0 ? updatedConversations[0] : null);
    }
  };

  // Toggle sidebar visibility (for mobile)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar 
        conversations={conversations}
        activeConversation={activeConversation}
        onSelectConversation={selectConversation}
        onCreateNewConversation={createNewConversation}
        onDeleteConversation={deleteConversation}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />
      <ChatInterface 
        conversation={activeConversation}
        onSendMessage={handleSendMessage}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        isMobile={isMobile}
      />
    </div>
  );
};

export default App;
