import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';

// صور النباتات
import img4  from '../images/img4.jpeg';
import img5  from '../images/img5.jpeg';
import img11 from '../images/img11.jpeg';
import img14 from '../images/img14.jpeg';
import img16 from '../images/img16.jpeg';

// صور الأواني
import img13 from '../images/img13.jpeg';

// صور الماجيك (نفس المنتج زوايا مختلفة)
import img2  from '../images/img2.jpeg';
import img8  from '../images/img8.jpeg';
import img10 from '../images/img10.jpeg';
import img12 from '../images/img12.jpeg';

import './ServicePage.css';

const products = [
  // نباتات
  { id: 1,  category: 'plants', name: 'فيكس إيلاستيكا',        price: 90,  img: img16 },
  { id: 2,  category: 'plants', name: 'متخصصون في توريد النباتات', price: null, img: img4  },
  { id: 3,  category: 'plants', name: 'تشكيلة نباتات داخلية',   price: null, img: img5  },
  { id: 4,  category: 'plants', name: 'تخطيط وتنسيق نباتات',   price: null, img: img11 },
  { id: 5,  category: 'plants', name: 'نبتة داخلية فاخرة',      price: 140, img: img14 },

  // أواني
  { id: 6,  category: 'pots',   name: 'أصيص سيراميك عصري',     price: 65,  img: img13 },

  // ماجيك
  { id: 7,  category: 'magic',  name: 'نبتة عائمة مغناطيسية',  price: 350, img: img2  },
  { id: 8,  category: 'magic',  name: 'نبتة عائمة — زاوية 2',  price: 350, img: img8  },
  { id: 9,  category: 'magic',  name: 'نبتة عائمة — زاوية 3',  price: 350, img: img10 },
  { id: 10, category: 'magic',  name: 'نبتة عائمة — زاوية 4',  price: 350, img: img12 },
];

const FILTERS = [
  { key: 'all',    label: 'الكل' },
  { key: 'plants', label: '🌿 نباتات' },
  { key: 'pots',   label: '🪴 أواني' },
  { key: 'magic',  label: '✨ ماجيك' },
];

function Plants() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active);

  return (
    <div className="page page--plants">
      <Navbar />
      <PageHero
        title="المزروعات والأواني"
        description="مجموعة متميزة من النباتات الطبيعية والأواني العصرية"
      />
      <main className="page-content service-section">

        {/* الفلتر */}
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3>{product.name}</h3>
                {product.price
                  ? <p className="price">{product.price} ريال</p>
                  : <p className="price-inquiry">السعر عند التواصل</p>
                }
                
                 <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-order">
                  اطلب الآن
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Plants;