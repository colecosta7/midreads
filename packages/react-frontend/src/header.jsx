import React, { useState } from 'react';

const Header = ({ onSearch }) => {
    const [showForm, setShowForm] = useState(false);
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        pages: 0,
    });

    const handleAddBookClick = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        bookData.pages = parseInt(bookData.pages, 10);
        // add the book to the db
        console.log("Book data submitted:", bookData);
        setBookData({
            title: '',
            author: '',
            pages: 0,
        });
        setShowForm(false);
    };

    return (
        <div className="header">
            <div className="logo">MidReads</div>
            <input
                type="text"
                placeholder="Search books..."
                onChange={(e) => onSearch(e.target.value)}
                style={{ color: "black" }}
            />
            <button onClick={handleAddBookClick}>Add a book</button>

            {showForm && (
                <div className="floating-form">
                    <div className="form-container">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={bookData.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={bookData.author}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="pages"
                            placeholder="Number of pages"
                            value={bookData.pages}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
