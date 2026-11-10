import React from 'react';

export default function Hero({ setCurrentPage }) {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-content">
        <span className="hero-eyebrow">Čede Vasovića 14 · Požarevac</span>
        <h1 className="hero-title">QUART</h1>
        <div className="hero-divider"></div>
        <p className="hero-tagline">Vrhunska kafa, omiljeni napici<br />i odlična atmosfera.</p>
        <p className="hero-meta">Otvoreni svaki dan &nbsp;·&nbsp; 07:00 –00:00</p>
        <div className="hero-actions">
          <button onClick={() => setCurrentPage('menu')} className="btn btn-fill" style={{cursor:'pointer'}}>Pogledajte meni</button>
          <a href="#about" className="btn btn-outline">O nama</a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="ring-art">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
          <div className="ring-label"><span>Kafa · Piće · Uživanje</span></div>
          <div className="ring-center">
            <svg className="bean-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <ellipse cx="24" cy="24" rx="14" ry="20" fill="rgba(240,226,200,0.88)" transform="rotate(15 24 24)"/>
              <path d="M17 14 Q24 24 17 34" stroke="#1a0c06" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}