import React, { useState } from 'react';

const Dashboard = () => {
  const [, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <button>products</button>  
      <button>users</button>  

      <button>rating</button>  

      <button>total users</button>  


      
    </div>
  );
};

export default Dashboard;
