import React from 'react';


const Header = ({ onSearch }) => {
    return (
        <div className="header">
            <div className="logo">MidReads</div>
            <input
                type="text"
                placeholder="Search books..."
                onChange={(e) => onSearch(e.target.value)}
                style={{ color: "black" }}
            />
            <button onClick={() => alert("Add book clicked")}>Add a book</button>
        </div>
    );
}

export default Header;