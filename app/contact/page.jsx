'use client'
import React from 'react'
import Header from '../(component)/Header.jsx'
import Footer from '../(component)/footer'
import Swiper from "../(component)/swiper";
import Contact from '../(component)/contact';
import MainPackage from '../(component)/mainPackage';
import Marquee from '../(component)/marquee.jsx';
import FloatingWhatsApp from '../(component)/floatingWhatsApp.jsx';
import GoogleReviews from '../(component)/googleReviews.jsx';

function page() {
  return (
    <>
      <>
        <div>
          <Header/>
        </div>
              <Swiper />
              <Marquee/>
              <MainPackage/>
              <Contact/>
<GoogleReviews/>
        <div>
          <Footer/>
        </div>
            <FloatingWhatsApp />
      </>
    </>
  )
}

export default page
