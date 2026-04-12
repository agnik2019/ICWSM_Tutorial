import React from "react";
import MyNavbar from "../MyNavbar/MyNavbar";
import HeroSection from "../HeroSection/HeroSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;