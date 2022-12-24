import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemEdit(props) {
  const [title, setTitle] = useState({});
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios.get(
        `http://localhost:8000/api/blogs/${props.item.id}`
      );
      setTitle(result.data.data.title);
      setBody(result.data.data.body);
    };
    fetchItem();
  }, []); // the empty array means the effect will only run once (on mount)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/blogs/${props.item.id}`, {
      title,
      body,
    });
    props.fetchData(); // call fetchData function to reset list
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Title: <span style={{ color: "red" }}>* </span>
      </label>
      <input
        type="text"
        id="title"
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
      <button type="submit">Update Item</button>
      {` `}
      <button type="button" onClick={props.cancelEdit}>
        Cancel Edit
      </button>
    </form>
  );
}

export default ItemEdit;
