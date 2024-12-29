import axios from 'axios';


//get all products 
export const getAllProducts = async()=>{
    const res = await axios.get(`https://dummyjson.com/products`);
    return res; 
}