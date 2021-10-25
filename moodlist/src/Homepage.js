import Button from 'react-bootstrap';
import React from 'react';
import styles from './App.css';

function Homepage() {
  return (
    <div className='App'>
        <p className="welcome-title">Welcome to Moodlist</p>
        <button className="login-button">Login with Spotify</button>
    </div>
  );
}

export default Homepage;
