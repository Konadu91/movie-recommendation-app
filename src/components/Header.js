import React from 'react';
import './Header.css';  // You can create a custom CSS file for styling
import Search from './search'; // Import the Search component

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div>
        <span className="logo-letter">M</span>
        <span className="logo-letter">o</span>
        <span className="logo-letter">v</span>
        <span className="logo-letter">i</span>
        <span className="logo-letter">e</span>
        <span className="logo-letter">A</span>
        <span className="logo-letter">p</span>
        <span className="logo-letter">p</span>
        
        </div>
        <Search />  {/* Include the Search component inside the Header */}
      </nav>
    </header>
  );
};

export default Header;
