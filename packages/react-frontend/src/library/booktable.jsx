import React from 'react';
import './bookTable.css';
import { useAuth } from '../Auth';




const BookTable = ({ books }) => {

    const { currentUser } = useAuth();

    const handleRating = (book) => {
        //console.log("rating...")
        //console.log(book.title)
        
        // Insert logic for rating a book

        rateBook(currentUser.uid, book._id, 4.0)
    }

    function rateBook(uid, book, rating) {
        const rateData = {
            by: uid,
            about: book,
            rating: rating
          };
        //console.log("SENDING", rateData);
    
        const promise = fetch("http://localhost:8000/rateBook", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rateData)
        });
        promise.then((result) => {
            if(result.status === 500) {
                alert("Error updating rating");
            } else if (result.status === 200) {
                alert("Rating successfully updated");
            }
        })
    }

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
                        <td><button onClick={() => handleRating(book)}>Change my Rating</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookTable;
