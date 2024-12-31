import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // add item or increase quantity of product
  const addToCart = (product) => {
    setCartItems((prev) => {
      // check if product is already exist or not
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        //if exist return new array with updated quantity
        return prev.map(
          (item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 } //create new obj with updated quantity
              : item //else keep other items same
        );
      }

      return [...prev, { ...product, quantity: 1 }]; // spread existing cart item with all product properties and add qt
    });
  };

  // remove cart item
  const removeCartItem = (id) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  // total cart items for navbar
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  //decrement cart items directly in cart page
  const decrementCartItem = (id) => {
    setCartItems((prevItem) => {
      return prevItem.map((item) =>
        item.id === id //map item and decrease quantity by 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        removeCartItem,
        addToCart,
        totalItems,
        totalAmount,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
