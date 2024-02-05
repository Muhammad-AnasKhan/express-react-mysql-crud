import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAllBooks()
  }, [])

  const handleDelete = async (id) =>{
    try {
      await axios.delete("http://localhost:8800/book/"+id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
        <div>
          <h1>My Books Shop</h1>
          <Link to='/add'>  <button>Add Book</button></Link>
        </div>
      <div className="books-container">

        {
          books.map((book) => (
            <div key={book.id} className="book">
              {book.cover && <img className='book-cover' src={book.cover} alt={book.cover} />}
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>{book.price}</span>
              <div>

              <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
              <button className="update"><Link to={`/update/${book.id}`}>Update</Link> </button>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Books