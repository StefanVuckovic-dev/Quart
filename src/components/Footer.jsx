import React from 'react';

export default function Footer({ currentPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">QUART</span>
        <span className="footer-copy">
          {currentPage === 'home' 
            ? 'Čede Vasovića 14, Požarevac · Otvoreno svaki dan · © 2026 Quart'
            : 'Cene na meniju uključuju PDV · Meni se menja sezonski · © 2026 Quart'}
        </span>
      </div>
    </footer>
  );
}