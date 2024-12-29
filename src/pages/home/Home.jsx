import React from 'react'
import styles from './Home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Bannerone from '../../components/bannerone/Bannerone';
import Footer from '../../components/footer/Footer';
function Home() {
    return (
        <div className={styles.home}>
            <Navbar />
            <Bannerone />
            <Footer />

        </div>
    )
}

export default Home
