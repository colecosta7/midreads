import React from 'react';

const BookTable = ({ books }) => {
    return (
        <table className="book-table">
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
                    <tr key={book.title}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.pages}</td>
                        <td>{book.rating}</td>
                        <td><button onClick={() => alert("Will read later")}>Read Later</button></td>
                        <td><button onClick={() => alert("Rating...")}>Rate It</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookTable;
