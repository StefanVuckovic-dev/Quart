import React from 'react';

export default function VisitInfo() {
  return (
    <section className="section info" id="visit">
      <div className="section-inner">
        <div className="info-grid">
          <div className="reveal">
            <div className="info-block-label">Radno vreme</div>
            <h3 className="info-block-title">Kada smo otvoreni</h3>
            <div className="hours-list">
              <div className="hours-row"><span className="hours-day">Ponedeljak – Nedelja</span><span className="hours-time">7:00 – 00:00</span></div>
            </div>
          </div>

          <div className="reveal d1">
            <div className="info-block-label">Lokacija</div>
            <h3 className="info-block-title">Pronađite nas</h3>
            <p className="address-text">
              Čede Vasovića 14<br />
              Požarevac<br />
              Vaš omiljeni kutak u gradu.<br />
              Očekujemo vas!
            </p>
          </div>

          <div className="reveal d2">
            <div className="info-block-label">Kontaktirajte nas</div>
            <h3 className="info-block-title">Kontakt</h3>
            <div className="contact-links">
              <a href="mailto:kontakt@quart.rs">kontakt@quart.rs</a>
              <a href="tel:+38112000000">+381 (12) 000-000</a>
              <a href="#instagram">Instagram</a>
              <a href="#events">Rezervacije i info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}