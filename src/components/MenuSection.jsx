import React from 'react';

export const menuCategories = [
  {
    id: 'topli-napitci',
    title: 'Topli napitci',
    note: 'Pripremljeni sa pažnjom za savršen početak dana.',
    items: [
      { name: 'Domaća kafa', desc: 'Tradicionalna domaća kafa', price: '150 din' },
      { name: 'Esspreso bez mleka', desc: 'Kratki ili produženi espresso', price: '150 din' },
      { name: 'Esspreso sa mlekom', desc: 'Espresso sa dodatkom toplog mleka', price: '170 din' },
      { name: 'Nesscaffe', desc: 'Klasična kremasta nes kafa', price: '180 din' },
      { name: 'Cappucino', desc: 'Espresso sa bogatom mlečnom penom', price: '170 din' },
      { name: 'Topla čokolada', desc: 'Gusta i kremasta topla čokolada', price: '200 din' },
      { name: 'Čaj', desc: 'Nana, kamilica ili voćni', price: '160 din' },
    ]
  },
  {
    id: 'hladni-napitci',
    title: 'Hladni napitci',
    note: 'Osveženje za svaki deo dana.',
    items: [
      { name: 'Guarana', desc: '0.25l', price: '200 din' },
      { name: 'Knjaz Miloš Limun', desc: '0.33l', price: '200 din' },
      { name: 'Aqua Viva voda', desc: '0.25l', price: '170 din' },
      { name: 'Knjaz Miloš kisela voda', desc: '0.25l', price: '170 din' },
      { name: 'Pepsi', desc: '0.33l', price: '230 din' },
      { name: '7Up', desc: '0.33l', price: '230 din' },
      { name: 'Tonik', desc: '0.33l', price: '230 din' },
      { name: 'Bitter Lemon', desc: '0.33l', price: '230 din' },
      { name: 'Ledeni čaj', desc: '0.25l', price: '230 din' },
      { name: 'Coca Cola', desc: '0.33l', price: '230 din' },
      { name: 'Cedevita', desc: 'Narandža, limun, zova, ananas & mango', price: '160 din' },
    ]
  },
  {
    id: 'alkohol',
    title: 'Alkoholna pića',
    note: 'Izbor piva, vina i žestokih pića.',
    items: [
      { name: 'Carlsberg', desc: '0.4l', price: '230 din' },
      { name: 'Tuborg', desc: '0.5l', price: '250 din' },
      { name: 'Nikšićko', desc: '0.5l', price: '230 din' },
      { name: 'Jelen', desc: '0.5l', price: '230 din' },
      { name: 'Vodka shot', desc: '0.03l', price: '170 din' },
      { name: 'Šljiva shot', desc: '0.03l', price: '170 din' },
      { name: 'Crveno vino', desc: '0.2l', price: '200 din' },
      { name: 'Belo vino', desc: '0.2l', price: '200 din' },
    ]
  }
];

export default function MenuSection() {
  return (
    <div className="menu-page">
      <header className="menu-hero">
        <h1 className="menu-hero-title">Naš <em>Meni</em></h1>
        <p className="menu-hero-sub">Odaberite svoj omiljeni topli napitak, osveženje ili piće u Quart-u.</p>
      </header>

      {/* Sticky kategorije */}
      <nav className="cat-nav">
        <div className="cat-nav-inner">
          {menuCategories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="cat-link">
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Sekcije menija */}
      <main className="menu-body">
        {menuCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="menu-section">
            <div className="menu-section-head">
              <h2 className="menu-section-title">{cat.title}</h2>
              <div className="section-line"></div>
            </div>
            <p className="menu-section-note">{cat.note}</p>

            <div className="items-grid">
              {cat.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
                    {item.desc && <p className="item-desc">{item.desc}</p>}
                  </div>
                  <div className="item-price-col">
                    <span className="item-price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}