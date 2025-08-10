"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./(component)/footer";
import Header from "./(component)/header";
import Swiper from "./(component)/swiper"

export default function Home() {
  return (
    <>
      <div>
        <Header/>
      </div>

      <h1>home page </h1>
      <Swiper/>
      <div>
        <Footer />
      </div>
    </>
  );
}
