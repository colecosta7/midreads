import React from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import './profilePage.css';

const Profile = () => {
    return (
        <div className="container">
            <Header />
            <div className="content-wrapper">
                <Sidebar />
                <div className="main-content">
                    <div className="profile-section">
                        <div className="user-section">
                            <div className="user-photo">User Photo</div>
                            <div className="user-details">
                                <div className="user-name">Name: [User Name]</div>
                                <div className="books-read"># Books Read: [Number]</div>
                                <div className="pages-read">Total Pages Read: [Number]</div>
                                <div className="user-rank">Rank: [Rank]</div>
                                <button className="edit-button">Edit</button>
                                <button className="logout-button">Logout</button>
                                <button className="delete-account-button">Delete my account</button>
                            </div>
                        </div>
                        <div className="bio-section">
                            <div className="user-bio">User Created Bio</div>
                            <div className="top-rated-books">Top Rated Books</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
