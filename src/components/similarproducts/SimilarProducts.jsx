import React, { useState, useEffect } from "react";
import styles from "./SimilarProducts.module.css";
import { getProductsByCategory } from "../../apis/index";
import { useNavigate } from "react-router-dom";
import { FaSortAmountDown,FaSortAmountUp, FaStar } from "react-icons/fa";

function SimilarProducts({ category }) {
  const [similarProducts, setSimilarProducts] = useState([]); //store produts in state
  const [selectedBtn, setSelectedBtn] = useState();
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const res = await getProductsByCategory(category);
      if (res && res.data) {
        setSimilarProducts(res.data.products);
      }
    } catch (err) {
      console.error("Error occured while fetching products: ", err);
    }
  };

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  const handleSortProducts = (option) => {
    const sortedProducts = [...similarProducts]; //make copy of products
    if (option === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price); //sort by price (low to high)
    } else if (option === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price); //sort by price (high to low)
    
    } else if (option === "ratingHighToLow") {
      sortedProducts.sort((a, b) => b.rating - a.rating); //sort by ratings (high to low)
    }
    setSimilarProducts(sortedProducts);
    setSelectedBtn(option);
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className={styles.similarproducts}>
      <h2>Similar Products</h2>
      <div className={styles.similarproducts_main}>
        <div className={styles.similarproducts_main_left}>
          <h3>Sort Products</h3>
          <button
            className={selectedBtn === "priceLowToHigh" ? styles.active : ""}
            onClick={() => handleSortProducts("priceLowToHigh")}
          >
            <FaSortAmountUp className={styles.icon} /> Sort by Price (Low to
            High)
          </button>
          <button
            className={selectedBtn === "priceHighToLow" ? styles.active : ""}
            onClick={() => handleSortProducts("priceHighToLow")}
          >
            <FaSortAmountDown className={styles.icon} /> Sort by Price (High to
            Low)
          </button>
          <button
            className={selectedBtn === "ratingHighToLow" ? styles.active : ""}
            onClick={() => handleSortProducts("ratingHighToLow")}
          >
            <FaStar className={styles.icon} /> Sort by Ratings (High to Low)
          </button>
        </div>
        <div className={styles.similarproducts_main_right}>
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <div
                className={styles.itemContainer}
                onClick={() => handleNavigate(item.id)}
                key={item.id}
              >
                <img src={item.thumbnail} />
                <h3>{item.title}</h3>
                <p id={styles.price}>Price : ${item.price}</p>
                <p id={styles.ratings}>Ratings : {item.rating}</p>
                <p id={styles.category}>Category: {item.category}</p>
              </div>
            ))
          ) : (
            <div className={styles.loader}>
              <svg className={styles.svg} viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
                <p>Loading...</p>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimilarProducts;
