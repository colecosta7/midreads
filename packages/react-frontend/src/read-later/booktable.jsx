import React from 'react';
import './bookTable.css';
import { useAuth } from '../Auth';


const BookTable = ({ books, removeBook }) => {

    const { currentUser } = useAuth();

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
                    <th>Rating</th>
                    <th>Remove</th>
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
                        <td><button onClick={() => removeBook(currentUser.uid, book)}>Remove</button></td>
                        <td><button onClick={() => handleRating(book)}>Rate It</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookTable;
