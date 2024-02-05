import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, updateBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    //takes the previous state
    //adds a new key-value pair to it
    updateBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //console.log(book)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/book/"+bookId, book);
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
        <button onClick={handleClick}>Update</button>
      </form>
    </>
  );
};

export default Update;
