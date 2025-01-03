import React from "react";
import "../CSS/itemList.css"; 

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.length > 0 ? (
        items.map((item) => (
          <div className="item-card" key={item.imdbID}>
            <img
              className="item-poster"
              src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/200"}
              alt={item.Title}
            />
            <h3 className="item-title">{item.Title}</h3>
            <p className="item-year">{item.Year}</p>
          </div>
        ))
      ) : (
        <p>No movies found. Try searching for something else!</p>
      )}
    </div>
  );
};

export default ItemList;
