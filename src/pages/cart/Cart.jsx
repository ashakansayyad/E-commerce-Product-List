import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CartContext } from "../../context/cartContext";

function Cart() {
  const { cartItems, removeCartItem, totalAmount,addToCart ,decrementCartItem } = useContext(CartContext);

  return (
    <div className={styles.cart}>
   
      <Navbar isDetails={true} />
      
    
      <div className={styles.cartContainer}>
        {cartItems.length > 0 ? (
          <div className={styles.cartTableContainer}>
            <table className={styles.cartTable}>
              {/* Table Header */}
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              
           
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.thumbnail}
                        alt="Product"
                        className={styles.productImage}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                    <div className={styles.quantityControls}>
                        <button
                          className={styles.decrementButton}
                          onClick={() => decrementCartItem(item.id)}
                          disabled={item.quantity === 1} // Disable if quantity is 1
                        >
                          -
                        </button>
                        <span className={styles.quantityDisplay}>{item.quantity}</span>
                        <button
                          className={styles.incrementButton}
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                      </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeCartItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
           
                <tr className={styles.totalRow}>
                  <td colSpan="6" className={styles.totalAmount}>
                    Total Amount: ${totalAmount.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          // Empty Cart Message
          <div className={styles.emptyCartMessage}>
            <h3>Your cart is empty!</h3>
          </div>
        )}
      </div>

   
      <Footer />
    </div>
  );
}

export default Cart;
