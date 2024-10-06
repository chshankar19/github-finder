import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Load default profile
  useEffect(() => {
    searchUser('chshankar19');
  }, []);

  const searchUser = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      setError('');
    } catch (error) {
      setError('User not found');
      setUser(null);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <h1>GitHub Finder</h1>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Dark 🌙' : 'Day 🌞'}
        </div>
      </div>
      <div className="search-container">
        <Search onSearch={searchUser} />
      </div>
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
