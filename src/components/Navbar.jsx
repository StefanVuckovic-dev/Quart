import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`nav ${currentPage === 'menu' ? 'scrolled' : ''}`} id="nav" aria-label="Glavna navigacija">
        <div className="nav-inner">
          <button onClick={() => { setCurrentPage('home'); closeMobile(); }} className="nav-logo" style={{background: 'none', border: 'none', cursor: 'pointer'}}>
            QUART
          </button>
          <ul className="nav-links" role="list">
            <li><button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''} style={{background:'none', border:'none', cursor:'pointer', color:'inherit', font:'inherit'}}>Početna</button></li>
            <li><button onClick={() => setCurrentPage('menu')} className={currentPage === 'menu' ? 'active' : ''} style={{background:'none', border:'none', cursor:'pointer', color:'inherit', font:'inherit'}}>Meni</button></li>
            <li><a href="#about" onClick={() => setCurrentPage('home')}>O nama</a></li>
            <li><a href="#visit" onClick={() => setCurrentPage('home')}>Posetite nas</a></li>
          </ul>
          <button 
            className={`nav-burger ${mobileOpen ? 'open' : ''}`} 
            onClick={toggleMobile} 
            aria-label="Uključi navigaciju" 
            aria-expanded={mobileOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobilna navigacija">
        <button onClick={() => { setCurrentPage('home'); closeMobile(); }} style={{background:'none', border:'none', color:'inherit', fontSize:'1.5rem', cursor:'pointer'}}>Početna</button>
        <button onClick={() => { setCurrentPage('menu'); closeMobile(); }} style={{background:'none', border:'none', color:'inherit', fontSize:'1.5rem', cursor:'pointer'}}>Meni</button>
        <a href="#about" onClick={() => { setCurrentPage('home'); closeMobile(); }}>O nama</a>
        <a href="#visit" onClick={() => { setCurrentPage('home'); closeMobile(); }}>Posetite nas</a>
      </div>
    </>
  );
}