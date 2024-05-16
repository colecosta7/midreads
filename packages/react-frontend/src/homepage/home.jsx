import React, { useState } from 'react';
import BookTable from './booktable';
import Header from './header';
import Sidebar from './sidebar';
import './homePage.css'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (search) => {
        setSearchTerm(search);
        getBooks(search)
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    return response.json();
                } else if (response.status === 404) {
                    return([]);
                }
            })
            .then(bookList => {
                setBooks(bookList); 
                console.log(bookList);
            })
            .catch(error => {
                console.error('Error getting books:', error);
            });
    };

    function getBooks(search) {
        const url = new URL("http://localhost:8000/getBook");
        url.searchParams.append("title", search);

        const promise = fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
    
        return promise;
      }

    return (
        <div className="container">
            <Header onSearch={handleSearch} />
            <Sidebar />
            <div className="main-content">
                <BookTable books={books} />
            </div>
        </div>
    );
}

export default Home;
