import React from 'react';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="/profile">Home</a>
            <a href="/profile">My Profile</a>
            <a href="/library">Library</a>
            <a href="/read-later">Read Later</a>
            <a href="/friends">Friends</a>
        </div>
    );
}

export default Sidebar;
