import React from 'react'
import styles from './Home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Allproducts from '../../components/allproducts/Allproducts';

function Home() {
    return (
        <div className={styles.home}>
            <Navbar isDetails={false} />
            <Allproducts/>
            <Footer />
        </div>
    )
}

export default Home
