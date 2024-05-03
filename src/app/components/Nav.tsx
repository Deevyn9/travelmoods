import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className="path-name">
          <h3>TravelMood</h3>
        </div>
        <div className="edit-mood">
          <button>Edit Mood</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
