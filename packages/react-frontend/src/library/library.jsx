import React, { useState, useEffect } from 'react';
import BookTable from './booktable';
import Header from '../header';
import Sidebar from '../sidebar';
import PaginationButton from './PaginationButton';
import './library.css';
import { useAuth } from '../Auth';
import { useNavigate } from 'react-router-dom';

const Library = () => {
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        } else {
            //console.log(currentUser);
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        if (currentUser) {
            getBooks(currentUser.uid)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else if (response.status === 404) {
                        console.log("BAD")
                        return { data: [], count: 0 };
                    }
                })
                .then(bookList => {
                    setBooks(bookList.data);
                    setCount(bookList.count);
                })
                .catch(error => {
                    console.error('Error getting books:', error);
                });
        }
    }, [currentUser]);

    function getBooks(uid) {
        //console.log(currentUser);
        const url = new URL("http://localhost:8000/getBook");
        url.searchParams.append("uid", uid);

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    return (
        <div className="container">
            <Header />
            <div className="content-wrapper">
                <Sidebar />
                <div className="home-main-content">
                    <BookTable books={books} />
                    <div className="pagination-container">
                        <span>{count} books in library</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;
