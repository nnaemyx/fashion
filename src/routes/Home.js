import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import BestsellingProducts from '../components/BestsellingProducts';
import Chooseus from '../components/Chooseus';
import Getoff from '../components/Getoff';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Features/>
       <BestsellingProducts/>
       <Chooseus/>
       <Getoff/>
       <TrendingProducts/>
    </div>
  );
}

export default Home;
