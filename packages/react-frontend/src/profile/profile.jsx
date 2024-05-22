import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import './profilePage.css';
import { useAuth } from '../Auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const Profile = () => {
    const { currentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        } else {
            console.log('No user is logged in.');
            navigate("/login");
        }
    }, [currentUser]);

    const onLogoutClick = async () => {
        auth.signOut().then(() => {
            console.log('User signed out successfully.');
            navigate("/login");
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    };

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
                                <button className="logout-button" onClick={onLogoutClick}>Logout</button>
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
