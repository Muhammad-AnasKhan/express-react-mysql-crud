import express from "express";
import mysql from "mysql";
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(8800, () => {
    console.log("Connected to Backend 🤩🤩🤩")
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express-react-books-crud"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database💾💾');
});


app.get("/", (req, res) => {
    res.json("this is backendddd")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books;"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)"
    // const values = [
    //     "title from backend", 
    //     "desc from backend", 
    //     "cover from backend"
    // ]

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        // return res.json(data)
        return res.json("Books added successfully")
    })
})

app.delete("/book/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q, [bookId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted successfully")
    })
})

app.put("/book/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE `id` = ?"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]
    db.query(q, [...values, bookId], (err, data)=>{
        if(err) return res.json(err)
        return res.json("Book has been updated successfully")
    })
})