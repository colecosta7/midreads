import React from 'react';


const Header = ({ onSearch }) => {

    return (
        <div className="header">
            <div className="logo">MidReads</div>
            <input
                type="text"
                placeholder="Search friends..."
                onChange={(e) => onSearch(e.target.value)}
                style={{ color: "black" }}
            />
            <button onClick={() => alert("Add friend clicked")}>Add friend</button>
        </div>
    );
}

export default Header;