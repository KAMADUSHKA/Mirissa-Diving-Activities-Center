
import React from 'react'
import Header from '../(component)/Header.jsx'
import Footer from '../(component)/footer'
import Swiper from "../(component)/swiper";
import Contact from '../(component)/contact';
import MainPackage from '../(component)/mainPackage';
import ReviewParallax from '../(component)/review';

function page() {
  return (
    <>
      <>
        <div>
          <Header/>
        </div>
              <Swiper />
              <MainPackage/>
              <Contact/>
              <ReviewParallax/>
        <div>
          <Footer/>
        </div>
      </>
    </>
  )
}

export default page
