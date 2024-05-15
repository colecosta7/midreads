// backend.js
import express from "express";
import cors from "cors";
import userServices from "./services/userServices.mjs";
import bookServices from "./services/book-services.mjs";
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.post("/createUser", async (req, res) => {
    const user = req.body;
    console.log(req);
    let promise = userServices.addUser(user);
    promise.then((newUser) => {
        res.status(201).json(newUser);
    })
});

app.get("/login", async (req, res) => {
  const userName = req.query.userName;
  const pwd = req.query.password;
  let promise = userServices.getUser(userName, pwd);
  promise.then((loggedInUser) => {
    console.log(loggedInUser);
    if(loggedInUser.length != 0)
      res.status(200).json(loggedInUser);
    else
      res.status(401).send("Invalid username or password");
  })
});

app.post("/addBook", async (req, res) => {
  const book = req.body;
  console.log(req);
  let promise = bookServices.addBook(book);
  promise.then((newBook) =>{
    res.status(201).json(newBook);
  })
});

app.get("/getBook", async (req, res) => {
  const title = req.query.title;
  let promise = bookServices.findBooksWithSubstring(title);
  promise.then((book) => {
    if(book.length != 0)
      res.status(200).json(book);
    else 
      res.status(404).send("Book not found.");
  })
});

app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${port}`
    );
  });
