import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from  '../../components/footer/Footer';
import DescriptionBox from "../../components/descriptionbox/DescriptionBox";
import styles from "./Details.module.css";
import { getSingleProduct } from "../../apis/index";

import SimilarProducts from "../../components/similarproducts/SimilarProducts";
function Details() {
  const [productById, setProductById] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();
  const fetchSingleProduct = async () => {
    try {
      const res = await getSingleProduct(id);
      if (res && res.data) {
        setProductById(res.data);
      }
    } catch (err) {
      console.error("error occured: ", err);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  return (
    <div className={styles.details}>
      <Navbar isDetails = {true}/>
     
      {isLoading ? (
        <div className={styles.loader}>
          <svg className={styles.svg} viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
            <p>Loading...</p>
          </svg>
        </div>
      ) : (
        <>
        <div className={styles.productdisplay}>
          <div className={styles.productdisplay_left}>
            <div className={styles.productdisplay_img}>
              <img
                className={styles.productdisplay_main_img}
                src={productById.images?.[0]}
                alt="img"
              />
            </div>
          </div>
          <div className={styles.productdisplay_right}>
            <h1>{productById.title}</h1>
            <div className={styles.productdisplay_right_stars}>
              <p>
                <span>Ratings : </span> {productById.rating}
              </p>
            </div>
            <div className={styles.productdisplay_right_prices}>
              <div className={styles.productdisplay_right_price}>
                ${productById.price}
              </div>

              <div className={styles.productdisplay_right_discount}>
                Discount : {productById.discountPercentage}%
              </div>
            </div>
            <div className={styles.productdisplay_right_description}>
              {productById.description}
            </div>
            <button>ADD TO CART</button>
            <div>
              <p className={styles.productdisplay_right_category}>
                <span>Categoty:</span> {productById.category}
              </p>
              {productById.brand && (
                <p className={styles.productdisplay_right_category}>
                  <span>Brand:</span> {productById.brand}
                </p>
              )}
            </div>
          </div>

        </div>
            <DescriptionBox productDetails={productById}/>
        <SimilarProducts 
        category={productById.category}
        />
        <Footer/>
        </>
      )}
    </div>
  );
}

export default Details;
