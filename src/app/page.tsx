import React from 'react';
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import RootLayout from './layout';

const Home: React.FC = () => {
  return (
    <RootLayout>
      <Header />
      <main>
        <HomeSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </RootLayout>
  );
};

export default Home;
