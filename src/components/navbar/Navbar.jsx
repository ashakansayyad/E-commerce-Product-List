import React,{useContext,useCallback} from "react";
import styles from "./Navbar.module.css";
import { logo, cart_icon } from "../../assets/index";
import { IoSearch } from "react-icons/io5";
import { ProductsContext } from "../../context/productsContext";


function Navbar() {
    const {setIsSearchByName} = useContext(ProductsContext);
    
   // debouncing for searching products
    const debounceProducts = (mainFunc,deley) => {
        let timer;
        return (...args)=>{
            clearTimeout(timer);
            timer = setTimeout(()=>{
                mainFunc(...args);
            },deley);
        }
    }

    // usecallback for memoize function for every rerender
    const handleDebounceSearch = useCallback(  
      debounceProducts((value)=>{
        setIsSearchByName(value)
      },2000),[]
    )
  return (
    <div className={styles.navbar}>
      <div className={styles.logoConatiner}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h2 className={styles.title}>SHOPPER</h2>
      </div>
      <div className={styles.searchContainer}>
        <IoSearch style={{fontSize:"25px"}} />
        <input type="text" 
        placeholder='Search products by name eg.phone,laptop'
        onChange={(e)=>handleDebounceSearch(e.target.value)}  //pass the value in debounce function
        />
      </div>
      <div className={styles.cartConatiner}>
        <button className={styles.loginBtn}>Login</button>
        <img className={styles.cartIcon} src={cart_icon} alt="cart_icon" />
        <div className={styles.cartCount}>0</div>
      </div>
    </div>
  );
}

export default Navbar;
