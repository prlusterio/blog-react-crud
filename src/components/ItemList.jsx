import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemList(props) {
  const { items, handleEdit, handleDelete } = props;

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Blog</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, i) => (
          <tr key={i}>
            <td>
              {item.title} {item.body}
            </td>
            <td>
              <button onClick={() => handleEdit(item)}>Edit</button> {` `}
              <button onClick={() => handleDelete(item)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
