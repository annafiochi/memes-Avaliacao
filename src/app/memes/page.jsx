import React from "react";
import Header from "../components/header";
import Footer from "../components/footer"
import styles from "./memes.module.css";
import HeroSection from "../components/herosection";
import InterectionBar from "../components/interectionBar";
import Categories from "../components/categories";

export default function Memes() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainContent}>
             <div className={styles.contentArea}>
             <HeroSection />
             </div>
             <Categories />
    
             <InterectionBar meme={meme} />
            </div>
            <Footer />
        </div>
    );
}