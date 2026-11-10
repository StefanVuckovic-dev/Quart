import React from 'react';

export default function Featured({ setCurrentPage }) {
  const featuredItems = [
    {
      num: '01',
      cat: 'Topli napitak',
      name: 'Domaća kafa',
      desc: 'Tradicionalna domaća kafa pripremljena sa merom, omiljeni izbor za početak dana.',
      price: '150 din'
    },
    {
      num: '02',
      cat: 'Topli napitak',
      name: 'Espresso sa mlekom',
      desc: 'Kvalitetan espresso sa dodatkom toplog mleka, idealan balans ukusa.',
      price: '170 din'
    },
    {
      num: '03',
      cat: 'Topli napitak',
      name: 'Cappuccino',
      desc: 'Espresso sa bogatom i kremastom mlečnom penom koju svi obožavaju.',
      price: '170 din'
    }
  ];

  return (
    <section className="section featured" id="featured">
      <div className="section-inner">
        <div className="featured-header">
          <div>
            <span className="eyebrow">Izdvojeno iz ponude</span>
            <h2 className="featured-heading">Najpopularniji <em>izbori</em></h2>
          </div>
          <button 
            onClick={() => setCurrentPage('menu')} 
            className="btn btn-outline"
            style={{ cursor: 'pointer' }}
          >
            Kompletan meni
          </button>
        </div>

        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <div key={index} className={`feat-card reveal d${index + 1}`}>
              <div className="feat-num">{item.num}</div>
              <div className="feat-cat">{item.cat}</div>
              <h3 className="feat-name">{item.name}</h3>
              <p className="feat-desc">{item.desc}</p>
              <div className="feat-price">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="featured-cta">
          <button 
            onClick={() => setCurrentPage('menu')} 
            className="btn btn-fill"
            style={{ cursor: 'pointer' }}
          >
            Istražite kompletan meni
          </button>
        </div>
      </div>
    </section>
  );
}