import React, { useState, useEffect } from 'react';
import './css/Main.css';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://run.mocky.io/v3/91ac29cb-dbd3-4340-bcc9-0bf1faf76e58'
      );
      setData(result.data.members);
    }

    fetchData();
  }, []);

  return (
    <div className='App'>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className='content-container'>
        <div className='header'>
          <h2>Activity Tracker</h2>
        </div>
        <div className='userCard-container'>
          {data.map((member) => {
            return <UserCard user={member} key={member.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
