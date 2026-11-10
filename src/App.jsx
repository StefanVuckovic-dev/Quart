import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import VisitInfo from './components/VisitInfo';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <main>
          <Hero setCurrentPage={setCurrentPage} />
          <About />
          <Featured setCurrentPage={setCurrentPage} />
          <VisitInfo />
        </main>
      ) : (
        <main style={{ paddingTop: '20px', minHeight: '80vh' }}>
          <MenuSection />
        </main>
      )}

      <Footer currentPage={currentPage} />
    </div>
  );
}