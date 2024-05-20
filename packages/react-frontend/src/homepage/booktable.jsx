import React from 'react';
import './bookTable.css';


const BookTable = ({ books }) => {
    return (
        <table className="book-table">
            <colgroup>
                <col className="title" />
                <col className="author" />
                <col className="pages" />
                <col className="rating" />
                <col className="predicted-rating" />
                <col className="read-later" />
            </colgroup>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Number of Pages</th>
                    <th>Predicted Rating</th>
                    <th>Read Later</th>
                    <th>Rate It</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.numPages}</td>
                        <td>{book.ranking}</td>
                        <td><button onClick={() => alert("Will read later")}>Read Later</button></td>
                        <td><button onClick={() => alert("Rating...")}>Rate It</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookTable;
