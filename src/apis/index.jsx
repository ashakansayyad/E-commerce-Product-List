import axios from "axios";

//get all products
export const getAllProducts = async () => {
  const res = await axios.get(`https://dummyjson.com/products?limit=0`);
  return res;
};

// get all categories
export const getAllCategories = async () => {
  const res = await axios.get(`https://dummyjson.com/products/category-list`);
  return res;
};

// get products by category
export const getProductsByCategory = async (category) => {
  const res = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  return res;
};

//search products by name
export const searchProductsByName = async (name) => {
  const res = await axios.get(
    `https://dummyjson.com/products/search?q=${name}`
  );
  return res;
};

// get single product
export const getSingleProduct = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res;
};
