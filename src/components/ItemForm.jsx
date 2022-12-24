import React, { useState } from "react";
import axios from "axios";

function ItemForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/blogs", {
      title,
      body,
    });
    setTitle("");
    setBody("");
    props.fetchData(); // call fetchData function to reset list
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Title: <span style={{ color: "red" }}>* </span>
      </label>
      <input
        type="text"
        id="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="body"> Content: </label>
      <input
        type="text"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {` `}
      <button type="submit">Add Item </button>
    </form>
  );
}

export default ItemForm;
