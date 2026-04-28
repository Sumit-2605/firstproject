import { useContext } from "react";
import { CartContext } from "./CartContext";
import Home from "./HomePage";
import axios from "axios"

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
const placeOrder = async () => {
  try {
    const res = await axios.post("http://localhost:8000/api/menu/order", cart);

    alert("Order placed successfully ✅");
    console.log(res.data);

  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message || "Order failed ❌"
    );
  }
};
  return (

    <>
   <Home />


      <div className="container mt-5">
      <h2>🛒 My Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between border p-2 mb-2"
            >
              <div>
                <h6>{item.name}</h6>
                <small>Qty: {item.qty}</small>
              </div>

              <div>
                ₹ {item.price * item.qty}

                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h4>Total: ₹ {totalPrice}</h4>

          <button className="btn btn-success w-100 mt-2" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div> 
    </>
 
  );
};

export default Cart;