import React, { useState, useEffect } from 'react';
import BookTable from './booktable';
import Header from '../header';
import Sidebar from '../sidebar';
import PaginationButton from './PaginationButton' ;
import './homePage.css';;

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        // This function will run when the component is loaded into the page
        handleSearch("");
    }, []);

    const handleSearchInput = debounce((search) => {
        setSearchTerm(search);
        handleSearch(search);
    }, 300);

    const handleSearch = (search) => {
        setCurrentPage(1);
        getBooks(search, 1)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data)
                    return response.json();
                } else if (response.status === 404) {
                    return ([]);
                }
            })
            .then(bookList => {
                setBooks(bookList.data);
                setTotalPages(Math.floor(bookList.count/10));
                console.log(bookList);
            })
            .catch(error => {
                console.error('Error getting books:', error);
            });
    };

    function getBooks(search, currentPage) {
        const url = new URL("http://localhost:8000/getBook");
        url.searchParams.append("title", search);
        url.searchParams.append("page", currentPage);

        const promise = fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        return promise;
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    };
    
    const handleNextPage = () => {
        console.log("next page")
        setCurrentPage(Math.min(currentPage + 1, totalPages)).then(
        getBooks(searchTerm, currentPage)
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    return response.json();
                } else if (response.status === 404) {
                    return [];
                }
            })
            .then(bookList => {
                setBooks(bookList.data); 
                console.log(bookList);
            }))
            .catch(error => {
                console.error('Error getting books:', error);
            });
    };

    return (
        <div className="container">
            <Header onSearch={handleSearchInput} />
            <Sidebar />
            <div className="main-content">
                <BookTable books={books} />
                <div className="PaginationButton">
                    <PaginationButton onClick={handlePreviousPage} label="Previous" />
                    <span>Page {currentPage} of {totalPages}</span>
                    <PaginationButton onClick={handleNextPage} label="Next" />
                </div>
            </div>
        </div>
    );
}

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
