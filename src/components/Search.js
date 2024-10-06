import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search GitHub username..." 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;
