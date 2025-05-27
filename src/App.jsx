import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JobCategories from './components/JobCategories';
import Footer from './components/Footer';

function App() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      <Header />
      <HeroSection onBrowseClick={() => setShowCategories(true)} />
      {showCategories && <JobCategories />}
      <Footer />
    </>
  );
}

export default App;
