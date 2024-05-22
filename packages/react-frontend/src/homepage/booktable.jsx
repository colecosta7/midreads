import React, { useState } from 'react';
import './bookTable.css';
import { useAuth } from '../Auth';
import { Input, UncontrolledPopover, PopoverBody, PopoverHeader } from 'reactstrap'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const BookTable = ({ books }) => {
    
    const { currentUser } = useAuth();

    const handleRating = (book) => {
        console.log("rating...")
        console.log(book.title)
       
        rateBook(currentUser.uid, book._id, 5.0)
    }

    const handleReadLater = (book) => {
        readLater(currentUser.uid, book);
    }

    const [rating, setRating] = useState(0);

    function rateBook(uid, book, rating) {
        const rateData = {
            by: uid,
            about: book,
            rating: rating
          };
    
        const promise = fetch("http://localhost:8000/rateBook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rateData)
        });
    }

    function readLater(uid, book) {
        const bookData = {
            uid: uid,
            book: book
        }
        console.log(uid);
        console.log(book);
        const promise = fetch("http://localhost:8000/readLater", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData)
          });
        promise.then((result) => {
            if(result.status === 406) {
                alert("Error: Book already in read later");
            } else if (result.status === 200) {
                alert("Book successfully added to read later");
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
                <col className="predicted-rating" />
                <col className="read-later" />
            </colgroup>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Number of Pages</th>
                    <th>Rating</th>
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
                        <td><button onClick={() => handleReadLater(book)}>Read Later</button></td>
                        <td><button id="ratingbutton" type="button" onClick={() => handleRating(book)}>Rate It</button></td>
                          <div className="root">
                            <UncontrolledPopover
                              placement='right'
                              target='ratingbutton'
                              trigger='legacy'
                            >
                              <PopoverHeader className="root">
                                YOYOYO  
                              </PopoverHeader>
                              <PopoverBody>
                                <Rating style={{ maxWidth: 200 }}
                                        value={rating}
                                        onChange={setRating} />
                                <button onClick={() => rateBook(currentUser.uid, book, rating)}>Rate</button>
                              </PopoverBody>
                            </UncontrolledPopover>
                          </div>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookTable;
