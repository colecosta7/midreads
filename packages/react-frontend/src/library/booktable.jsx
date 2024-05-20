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
                <col className="change-rating" />
            </colgroup>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Number of Pages</th>
                    <th>My Rating</th>
                    <th>Change my Rating</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.numPages}</td>
                        <td>{book.ranking}</td>
                        <td><button onClick={() => alert("Change my rating")}>Change my Rating</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookTable;
