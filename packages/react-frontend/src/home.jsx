/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './homePage.css';

const Header = ({ onSearch }) => {
    return (
        <div className="header">
            <div className="logo">LOGO</div>
            <input
                type="text"
                placeholder="Search books..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <button onClick={() => alert("Add book clicked")}>Add a book</button>
        </div>
    );
}


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
            <div className="main-content">
                {/* <Sidebar />
                <BookTable books={books} /> */}
            </div>
        </div>
    );
}

export default Home;
