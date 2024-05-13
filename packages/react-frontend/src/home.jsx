import React, { useState } from 'react';
import BookTable from './booktable';  
import Header from './header';  
import Sidebar from './sidebar';  
import './homePage.css'

const Home = () => {
    const initialBooks = [
        { title: "Sample Book 1", author: "Author 1", pages: 300, rating: "4.5/5" },
        { title: "Sample Book 2", author: "Author 2", pages: 250, rating: "4.0/5" },
        // Add more books as needed
    ];

    const [books, setBooks] = useState(initialBooks);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (search) => {
        setSearchTerm(search);
        if (search !== "") {
            const filteredBooks = initialBooks.filter(book =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase())
            );
            setBooks(filteredBooks);
        } else {
            setBooks(initialBooks);
        }
    };

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
