import React from "react";
import '../styles/Header.css';
import searchIcon from '../assets/search-icon.svg';

const Header = () => {
  return (
    <header>
      <h1>Weather app</h1>

      <div className="city-input">
        <input placeholder="Enter a city" />     
        <button>
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
