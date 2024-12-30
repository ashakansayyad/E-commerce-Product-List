import React, { useState, useEffect, useContext } from "react";
import styles from "./Allproducts.module.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { getAllProducts, getAllCategories, getProductsByCategory, searchProductsByName } from "../../apis/index";
import { ProductsContext } from "../../context/productsContext";

function Allproducts() {
    const [products, setProducts] = useState([]); //store produts in state
    const [categories, setCategories] = useState([]); //store categories in state
    const { isSearchByName } = useContext(ProductsContext)
    const [isOpen, setIsOpen] = useState(false);  //for dropdown list
    const [selectedCategory, setSelectedCategory] = useState(null)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  
    // fetch all products
    const fetchProducts = async () => {
        try {
            if (isSearchByName) {         //products by name 
                const res = await searchProductsByName(isSearchByName);
                if (res && res.data) {
                    setProducts(res.data.products);
                }

            } else if (selectedCategory) {  //products by category
                const res = await getProductsByCategory(selectedCategory);
                if (res && res.data) {
                    setProducts(res.data.products);
                }
            } else {
                const res = await getAllProducts();  // default fetch all products
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
    }

 
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
                    <ul>
                        {categories.length > 0 ? (
                            categories.map((item, index) => (
                                <li onClick={() => handleCategoryClick(item)} key={index}>{item}</li>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </ul>
                )}
            </div>
            <div className={styles.allproductsContainer}>
                {products.length > 0 ? (
                    products.map((item) => (
                        <div 
                        className={styles.itemContainer} 
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
    );
}

export default Allproducts;
