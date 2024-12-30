import React, { useState, useEffect, useContext } from "react";
import styles from "./Allproducts.module.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {
  getAllProducts,
  getAllCategories,
  getProductsByCategory,
  searchProductsByName,
} from "../../apis/index";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";

function Allproducts() {
  const [products, setProducts] = useState([]); //store produts in state
  const [categories, setCategories] = useState([]); //store categories in state
  const { isSearchByName } = useContext(ProductsContext);
  const [isOpen, setIsOpen] = useState(false); //for dropdown list
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [isSortDropdownOpen, setIsSortDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleSortDropdoen = () => {
    setIsSortDropDownOpen(!isSortDropdownOpen);
  };

  // fetch all products
  const fetchProducts = async () => {
    try {
      if (isSearchByName) {
        //products by name
        const res = await searchProductsByName(isSearchByName);
        if (res && res.data) {
          setProducts(res.data.products);
        }
      } else if (selectedCategory) {
        //products by category
        const res = await getProductsByCategory(selectedCategory);
        if (res && res.data) {
          setProducts(res.data.products);
        }
      } else {
        const res = await getAllProducts(); // default fetch all products
        if (res && res.data) {
          setProducts(res.data.products);
        }
      }
    } catch (err) {
      console.error("Error occured while fetching products: ", err);
    }
  };

  // fetch all categories
  const fetchCategories = async () => {
    try {
      const res = await getAllCategories();
      if (res && res.data) {
        setCategories(res.data);
      }
    } catch (err) {
      console.error("Error while fetching categories: ", err);
    }
  };

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
    toggleDropdown();
  };
  const handleSortClick = (option) => {
    const sortedProducts = [...products]; //make copy of products
    if (option === "priceLowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price); //sort by price (low to high)
    } else if (option === "priceHighToLow") {
      sortedProducts.sort((a, b) => b.price - a.price); //sort by price (high to low)
    } else if (option === "ratingHighToLow") {
      sortedProducts.sort((a, b) => b.rating - a.rating); //sort by ratings (high to low)
    }
    setProducts(sortedProducts);
    setSelectedSort(option);
    toggleSortDropdoen();
  };
  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    // call function at mounting phase
    fetchProducts();
    fetchCategories();
  }, [selectedCategory, isSearchByName]);
  return (
    <div className={styles.allproducts}>
      <h2>New Collections</h2>
      <div className={styles.dropdownContainer}>
        <p onClick={toggleDropdown} className={styles.categoriesTitle}>
          {selectedCategory ? selectedCategory : "Products by category"}
          {!isOpen ? <SlArrowDown /> : <SlArrowUp />}
        </p>
        {isOpen && (
          <ul className={styles.categories}>
            {categories.length > 0 ? (
              categories.map((item, index) => (
                <li onClick={() => handleCategoryClick(item)} key={index}>
                  {item}
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        )}
        <p onClick={toggleSortDropdoen} className={styles.sortTitle}>
          {selectedSort === "priceLowToHigh"
            ? "Price ( low to high )"
            : selectedSort === "priceHighToLow"
            ? "Price ( high to low )"
            : selectedSort === "ratingHighToLow"
            ? "Ratings ( low to high )"
            : " Sort products by "}{" "}
          {!isSortDropdownOpen ? <SlArrowDown /> : <SlArrowUp />}
        </p>
        {isSortDropdownOpen && (
          <ul className={styles.sorting}>
            <li onClick={() => handleSortClick("priceLowToHigh")}>
              Price ( low to high )
            </li>
            <li onClick={() => handleSortClick("priceHighToLow")}>
              Price ( high to low )
            </li>
            <li onClick={() => handleSortClick("ratingHighToLow")}>
              Ratings ( high to low )
            </li>
          </ul>
        )}
      </div>
      <div className={styles.allproductsContainer}>
        {products.length > 0 ? (
          products.map((item) => (
            <div className={styles.itemContainer} key={item.id}>
              <img src={item.thumbnail} />
              <h3>{item.title}</h3>
              <p id={styles.price}>Price : ${item.price}</p>
              <p id={styles.ratings}>Ratings : {item.rating}</p>
              <p id={styles.category}>Category: {item.category}</p>
              <p onClick={() => handleNavigate(item.id)} id={styles.details}>
                view details...
              </p>
              <button>ADD TO CART</button>
            </div>
          ))
        ) : (
          <div className={styles.loader}>
            <h3>Products not found..</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Allproducts;
