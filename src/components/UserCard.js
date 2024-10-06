import React from 'react';
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <img src={user.avatar_url} alt="User Avatar" className="user-avatar" />
        <div className="user-details">
          {/* Display name without link */}
          <h2 className="user-name">{user.name || user.login}</h2>
        </div>
        <div className="joined-date">
          <p>Joined {new Date(user.created_at).toDateString()}</p>
          {/* GitHub ID as clickable link */}
          <p className="github-id">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              @{user.login}
            </a>
          </p> {/* Moved below the joined date */}
        </div>
      </div>

      {/* Rectangle for Repos, Followers, and Following */}
      <div className="user-stats-container">
        <div className="user-stats">
          <div className="stat-item">
            <span>Repos</span>
            <div>{user.public_repos}</div> {/* Moved number below */}
          </div>
          <div className="stat-item">
            <span>Followers</span>
            <div>{user.followers}</div> {/* Moved number below */}
          </div>
          <div className="stat-item">
            <span>Following</span>
            <div>{user.following}</div> {/* Moved number below */}
          </div>
        </div>
      </div>

      <div className="user-location">
        <div className="location-left">
          <p><FaMapMarkerAlt /> {user.location || 'Not Available'}</p>
          <p><FaLink /> {user.blog ? <a href={user.blog}>{user.blog}</a> : 'Not Available'}</p>
        </div>
        <div className="location-right">
          <p><FaTwitter /> {user.twitter_username ? <a href={`https://twitter.com/${user.twitter_username}`}>@{user.twitter_username}</a> : 'Not Available'}</p>
          <p><FaBuilding /> {user.company || 'Not Available'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
