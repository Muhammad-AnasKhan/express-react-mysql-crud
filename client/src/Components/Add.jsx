import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, addBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    //takes the previous state
    //adds a new key-value pair to it
    addBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //console.log(book)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>Add Books</div>
      <form action="">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          id=""
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Description"
          name="desc"
          id=""
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Price"
          name="price"
          id=""
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Cover"
          name="cover"
          id=""
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </>
  );
};

export default Add;
