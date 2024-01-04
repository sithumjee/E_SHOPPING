import React, { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContent";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="mainCategory">
      <div className="shop-category">
        <img src={props.banner} alt="" />
      </div>

      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          }

          return null;
        })}
      </div>

      <Footer />
    </div>
  );
}
