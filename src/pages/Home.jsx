import React, { useState, useEffect } from "react";
import axios from "axios";

import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";
import ItemEdit from "../components/ItemEdit";

function Home() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/api/blogs");
    setItems(result.data.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const cancelEdit = () => {
    setEditing(false);
    setCurrentItem({});
  };
 
  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditing(true);
  };

  const handleDelete = async (item) => {
    await axios.delete(`http://localhost:8000/api/blogs/${item.id}`);
    fetchData() // call fetchData function to reset list
  };

  return (
    <div className="App">
      {editing ? (
        <ItemEdit item={currentItem} cancelEdit={cancelEdit} fetchData={fetchData} />
      ) : (
        <ItemForm fetchData={fetchData} />
      )}
      <hr />
      <ItemList items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
