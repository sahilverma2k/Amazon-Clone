/* eslint-disable */
import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../providers/StateProvider"
import StarIcon from '@material-ui/icons/Star';

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
      //Add item to basket...
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id,
              title,
              image,
              price,
              rating
          }
      })
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((index) => (
             <StarIcon key={index} className="product__star" />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
export default Product;
