import React from 'react'
import styles from './Home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Bannerone from '../../components/bannerone/Bannerone';
import Footer from '../../components/footer/Footer';
import Allproducts from '../../components/allproducts/Allproducts';

function Home() {
    return (
        <div className={styles.home}>
            <Navbar />
            <Bannerone />
            <Allproducts/>
            <Footer />
        </div>
    )
}

export default Home
