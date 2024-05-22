import React from 'react';
import './friendsTable.css';

const FriendsTable = ({ friends }) => {
    return (
        <table className="friends-table">
            <colgroup>
                <col className="profile-pic" />
                <col className="name" />
                <col className="status" />
                <col className="visit-profile" />
            </colgroup>
            <thead>
                <tr>
                    <th>Profile Pic</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Visit Profile</th>
                </tr>
            </thead>
            <tbody>

                <tr key={1234}>
                    <td><img src="src" alt={`Kylan's Profile Pic`} className="profile-pic" /></td>
                    <td>kylan</td>
                    <td>online</td>
                    <td><button onClick={() => alert("Visit Profile")}>Visit Profile</button></td>
                </tr>
                {/* {friends.map(friend => (
                    <tr key={friend._id}>
                        <td>{friend.pic}</td>
                        <td>{friend.name}</td>
                        <td>{friend.status}</td>
                        <td><button onClick={() => alert("Visit Profile")}>Visit Profile</button></td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    );
}

export default FriendsTable;
