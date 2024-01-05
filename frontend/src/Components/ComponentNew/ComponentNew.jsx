import React from "react";
import "./ComponentNew.css";
import Items from "../Items/Items"; // Importing the Items component
import new_collections from "../Assets/new_collections"; // Importing the new collections data

const ComponentNew = () => {
  return (
    <div className="newComponent">
      <h1>LATEST ARRIVALS</h1> {/* Heading for the latest arrivals */}
      <hr /> {/* Horizontal line */}
      <div className="new-item">
        {new_collections.map((item, i) => {
          // Mapping through the new collections data
          return (
            <Items
              key={i} // Unique key for each item
              id={item.id} // Item ID
              name={item.name} // Item name
              image={item.image} // Item image
              new_price={item.new_price} // New price of the item
              old_price={item.old_price} // Old price of the item
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComponentNew;
