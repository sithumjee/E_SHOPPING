import React from "react";
import "./ComponentNew.css";
import Items from "../Items/Items";
import new_collections from "../Assets/new_collections";

const ComponentNew = () => {
  return (
    <div className="newComponent">
      <h1>LATEST ARRIVALS</h1>
      <hr />
      <div className="new-item">
        {new_collections.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComponentNew;
