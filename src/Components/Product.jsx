import { useState } from "react";
export default function Product({ img, name, quantity, price }) {
  const [quantityCount, setQuantityCount] = useState({ quantity });
  return (
    <div className="product">
      <img src={img} alt={name} height="100px" />
      <h3>{name}</h3>
      <p>Quantity: {quantityCount.quantity}</p>
      <p>Price: {price}</p>
      <p>Total Price: {(price * quantityCount.quantity).toFixed(2)}</p>
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
