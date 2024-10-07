//Product component takes in four props: img, name, quantity, and priceOptions.
//img is a string that represents the URL of the image of the product.
//name is a string that represents the name of the product.
//quantity is a number that represents the quantity of the product.
//priceOptions is an array of numbers that represents the different price options for the product.
//Product component renders the image, name, quantity, price, total price, and two buttons to add or remove the product.
//The price is displayed as a dropdown menu with the different price options.

import { useState } from "react";

export default function Product({ img, name, quantity, priceOptions }) {
  //quantityCount is an object with two properties: quantity and priceOptions.
  //quantityCount is initialized with the quantity and the first price option.
  //quantityCount is a state variable that is updated using the setQuantityCount function.
  const [quantityCount, setQuantityCount] = useState({
    quantity,
    priceOptions: priceOptions[0],
  });
  return (
    <div className="product">
      <img src={img} alt={name} height="100px" />
      <h3>{name}</h3>
      <p>Quantity: {quantityCount.quantity}</p>
      <p>
        Price:{" "}
        {
          <select
            value={quantityCount.priceOptions}
            onChange={(e) =>
              setQuantityCount((prevCount) => {
                return {
                  ...prevCount,
                  priceOptions: parseFloat(e.target.value),
                };
              })
            }
          >
            {priceOptions.map((price, index) => (
              <option key={index} value={price}>
                {price.toFixed(2)}
              </option>
            ))}
          </select>
        }
      </p>
      <p>
        Total Price:{" "}
        {(quantityCount.priceOptions * quantityCount.quantity).toFixed(2)}
      </p>
      <button
        onClick={() =>
          setQuantityCount((prevCount) => {
            return { ...prevCount, quantity: prevCount.quantity + 1 };
          })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          setQuantityCount((prevCount) => {
            return prevCount.quantity > 0
              ? {
                  ...prevCount,
                  quantity: prevCount.quantity - 1,
                }
              : { ...prevCount, quantity: 0 };
          })
        }
      >
        Remove
      </button>
    </div>
  );
}
