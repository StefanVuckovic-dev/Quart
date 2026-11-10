import React from 'react';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="reveal">
            <span className="eyebrow">Naša priča</span>
            <h2 className="about-heading">Mesto gde se <em>opušta.</em></h2>
            <div className="rule"></div>
            <div className="about-body">
              <p>
                Quart je nastao sa jasnom idejom da Požarevac dobije udoban, moderan i prijatan kutak u ulici Čede Vasovića 14, gde svako može da pronađe svoj mir uz omiljeni napitak.
              </p>
              <p>
                Bilo da svraćate na brzu jutarnju kafu pre posla, popodnevno druženje sa prijateljima ili večernje opuštanje, naš prostor je dizajniran tako da se uvek osećate opušteno i dobrodošlo.
              </p>
            </div>
          </div>

          <div className="reveal d1">
            <div className="about-pillars">
              <div className="pillar">
                <h3 className="pillar-title">Vrhunska usluga</h3>
                <p className="pillar-body">Naš ljubazni tim je uvek tu da vas dočeka sa osmehom i pripremi vaš omiljeni napitak tačno po vašoj želji.</p>
              </div>
              <div className="pillar">
                <h3 className="pillar-title">Prijatan ambijent</h3>
                <p className="pillar-body">Topli tonovi, udoban enterijer i sjajna atmosfera čine Quart idealnim mestom za svakodnevni boravak.</p>
              </div>
              <div className="pillar">
                <h3 className="pillar-title">Uvek tu za vas</h3>
                <p className="pillar-body">Radimo svakog dana u nedelji od 07:00 do 00:00 časova, spremni da upotpunimo svaki vaš trenutak.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}