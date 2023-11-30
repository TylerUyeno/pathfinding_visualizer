import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ pathfindingVisualizerRef }) {

  return (
    <div className="header">
      <Link to="/" className="headerName">Pathfinding Visualizer</Link>
      <div className="header-right">
        <div className="left-section">
          <button class="button" onClick={() => window.location.reload(true)}> Clear Board </button>
        </div>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
