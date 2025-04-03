import React from "react";
import Header from "../components/header";
import Footer from "../components/footer"
import styles from "./memes.module.css";
import HeroSection from "../components/herosection";

export default function Memes() {
    return (
        <div className= {styles.container}>
            <Header />
            <HeroSection />
            <Footer />
        </div>
    );
}