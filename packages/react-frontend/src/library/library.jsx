import React, { useState, useEffect } from 'react';
import BookTable from './booktable';
import Header from '../header';
import Sidebar from '../sidebar';
import PaginationButton from './PaginationButton';
import './library.css';
import { useAuth } from '../Auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            console.log('No user is logged in.');
            navigate("/login");
        } else {
            //console.log(currentUser);
            handleSearch("");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        if (currentUser) {
            getBooks(searchTerm, currentPage, currentUser.uid)
                .then(response => {
                    console.log("LIBRARY");
                    if (response.status === 200) {
                        return response.json();
                    } else if (response.status === 404) {
                        console.log("BAD")
                        return { data: [], count: 0 };
                    }
                })
                .then(bookList => {
                    console.log(bookList);
                    setBooks(bookList.data);
                    console.log(bookList.count);
                    setTotalPages(Math.ceil(bookList.count / 10));
                })
                .catch(error => {
                    console.error('Error getting books:', error);
                });
        }
    }, [currentPage, searchTerm, currentUser]);

    const handleSearchInput = debounce((search) => {
        setSearchTerm(search);
        setCurrentPage(1);
    }, 300);

    const handleSearch = (search) => {
        setSearchTerm(search);
        setCurrentPage(1);
    };

    function getBooks(search, currentPage, uid) {
        //console.log(currentUser);
        const url = new URL("http://localhost:8000/getBook");
        url.searchParams.append("title", search);
        url.searchParams.append("page", currentPage);
        url.searchParams.append("uid", uid);

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    const handlePreviousPage = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
    };

    return (
        <div className="container">
            <Header onSearch={handleSearchInput} />
            <div className="content-wrapper">
                <Sidebar />
                <div className="home-main-content">
                    <BookTable books={books} />
                    <div className="pagination-container">
                        <PaginationButton onClick={handlePreviousPage} label="Previous" />
                        <span>Page {currentPage} of {totalPages}</span>
                        <PaginationButton onClick={handleNextPage} label="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
};

function debounce(func, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export default Home;
