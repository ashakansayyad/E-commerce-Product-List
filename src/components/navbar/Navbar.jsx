import React, { useContext, useCallback } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { logo, cart_icon } from "../../assets/index";
import { IoSearch } from "react-icons/io5";
import { ProductsContext } from "../../context/productsContext";
import { CartContext } from "../../context/cartContext";

function Navbar({ isDetails }) {
  const { setIsSearchByName } = useContext(ProductsContext);
  const { totalItems } = useContext(CartContext);
  const navigate = useNavigate();

  // debouncing for searching products
  const debounceProducts = (mainFunc, deley) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        mainFunc(...args);
      }, deley);
    };
  };

  // usecallback for memoize function for every rerender
  const handleDebounceSearch = useCallback(
    debounceProducts((value) => {
      setIsSearchByName(value);
    }, 1000),
    []
  );
  return (
    <div className={styles.navbar}>
      <div onClick={() => navigate("/")} className={styles.logoConatiner}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h2 className={styles.title}>MY SHOP</h2>
      </div>
      {!isDetails ? (
        <div className={styles.searchContainer}>
          <IoSearch style={{ fontSize: "25px" }} />
          <input
            type="text"
            placeholder="Search products by name eg.phone,laptop"
            onChange={(e) => handleDebounceSearch(e.target.value)} //pass the value in debounce function
          />
        </div>
      ) : (
        ""
      )}
      <div className={styles.cartConatiner}>
        <img
          onClick={() => navigate("/cart")}
          className={styles.cartIcon}
          src={cart_icon}
          alt="cart_icon"
        />
        <div className={styles.cartCount}>{totalItems}</div>
      </div>
    </div>
  );
}

export default Navbar;
