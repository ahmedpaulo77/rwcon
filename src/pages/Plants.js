import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';

// نباتات
import p1 from '../images/1.png';
import p2 from '../images/2.png';
import p3 from '../images/3.png';
import p4 from '../images/4.png';
import p5 from '../images/5.png';
import p6 from '../images/6.png';
import p7 from '../images/7.png';
import p10 from '../images/10.png';
import p11 from '../images/11.png';
import p12 from '../images/12.png';
import p13 from '../images/13.png';
import p14 from '../images/14.png';
import p15 from '../images/15.png';
import p16 from '../images/16.png';
import p17 from '../images/17.png';
import p18 from '../images/18.png';
import p19 from '../images/19.png';

// أواني
import pot1 from '../images/1-.png';
import pot2 from '../images/2-.png';
import pot3 from '../images/3-.png';
import pot4 from '../images/4-.png';
import pot5 from '../images/5-.png';
import pot6 from '../images/6-.png';
import pot7 from '../images/7-.png';
import pot8 from '../images/8-.png';
import pot9 from '../images/9-.png';
import pot10 from '../images/10-.png';
import pot11 from '../images/11-.png';
import pot12 from '../images/12-.png';
import pot13 from '../images/13-.png';
import pot14 from '../images/14-.png';
import pot15 from '../images/15-.png';
import pot16 from '../images/16-.png';
import pot17 from '../images/17-.png';
import pot18 from '../images/18-.png';
import pot19 from '../images/19-.png'; 
import pot20 from '../images/20-.png';
import pot21 from '../images/21-.png';
import pot22 from '../images/22-.png';
import pot23 from '../images/23-.png';
import pot24 from '../images/24-.png';
import pot25 from '../images/25-.png';
import pot26 from '../images/26-.png';
import pot27 from '../images/27-.png';
import pot28 from '../images/28-.png';
import pot29 from '../images/29-.png';
import pot30 from '../images/30-.png';
import pot31 from '../images/31.png';
import pot32 from '../images/32.png';
import pot33 from '../images/33.png';
import pot34 from '../images/34.png';
import pot35 from '../images/35.png';
import pot36 from '../images/36.png';

import './ServicePage.css';

const products = [
  // نباتات
  { id: 1,  category: 'plants', name: 'سرو إيطالي',         price: null, img: p1 },
  { id: 2,  category: 'plants', name: 'فيكس بنجامينا',       price: null, img: p2 },
  { id: 3,  category: 'plants', name: 'نخيل أريكا',          price: null, img: p3 },
  { id: 4,  category: 'plants', name: 'سرو ليموني',          price: null, img: p4 },
  { id: 5,  category: 'plants', name: 'دراسينا',             price: null, img: p5 },
  { id: 6,  category: 'plants', name: 'سانسيفيريا',          price: null, img: p6 },
  { id: 7,  category: 'plants', name: 'فيكس إيلاستيكا',      price: null, img: p7 },
  { id: 8,  category: 'plants', name: 'فيكس جينسنج',         price: null, img: p10 },
  { id: 9,  category: 'plants', name: 'فيكس بونساي',         price: null, img: p11 },
  { id: 10, category: 'plants', name: 'فيكس بونساي فاخر',    price: null, img: p12 },
  { id: 11, category: 'plants', name: 'فيكس بونساي كلاسيك',  price: null, img: p13 },
  { id: 12, category: 'plants', name: 'فيكس باندا',          price: null, img: p14 },
  { id: 13, category: 'plants', name: 'نبتة خارجية',         price: null, img: p15 },
  { id: 14, category: 'plants', name: 'يوكا ثلاثية',         price: null, img: p16 },
  { id: 15, category: 'plants', name: 'نخيل منزلي',          price: null, img: p17 },
  { id: 16, category: 'plants', name: 'سرو ليموني صغير',     price: null, img: p18 },
  { id: 17, category: 'plants', name: 'فيكس إيلاستيكا داكن', price: null, img: p19 },

  // أواني
  { id: 18, category: 'pots', name: 'روكن الموج الأسود',   price: null, img: pot1 },
  { id: 19, category: 'pots', name: 'روكن الموج الأبيض',   price: null, img: pot2 },
  { id: 20, category: 'pots', name: 'روكن الموج الرمادي',  price: null, img: pot3 },
  { id: 21, category: 'pots', name: 'روكن انجولو',         price: null, img: pot4 },
  { id: 22, category: 'pots', name: 'روكن بابلز',          price: null, img: pot5 },
  { id: 23, category: 'pots', name: 'روكن بامبو',          price: null, img: pot6 },
  { id: 24, category: 'pots', name: 'روكن توندو',          price: null, img: pot7 },
  { id: 25, category: 'pots', name: 'روكن جاردينيا',       price: null, img: pot8 },
  { id: 26, category: 'pots', name: 'روكن كالستو',         price: null, img: pot9 },
  { id: 27, category: 'pots', name: 'روكن بيكو',           price: null, img: pot10 },
  { id: 28, category: 'pots', name: 'روكن كاميليا',        price: null, img: pot11 },
  { id: 29, category: 'pots', name: 'روكن إعصار',          price: null, img: pot12 },
  { id: 30, category: 'pots', name: 'روكن كاريا',          price: null, img: pot13 },
  { id: 31, category: 'pots', name: 'روكن كاميثا',         price: null, img: pot14 },
  { id: 32, category: 'pots', name: 'روكن منتا',           price: null, img: pot15 },
  { id: 33, category: 'pots', name: 'روكن ماكسي',          price: null, img: pot16 },
  { id: 34, category: 'pots', name: 'روكن كيرف',           price: null, img: pot17 },
  { id: 35, category: 'pots', name: 'روكن ليف كيوب',       price: null, img: pot18 },
  { id: 36, category: 'pots', name: 'روكن ميني',           price: pot19 }, 
  { id: 37, category: 'pots', name: 'روكن وود',            price: null, img: pot20 },
  { id: 38, category: 'pots', name: 'روكن برايل',          price: null, img: pot21 },
  { id: 39, category: 'pots', name: 'روكن بحر',            price: null, img: pot22 },
  { id: 40, category: 'pots', name: 'روكن خرز',            price: null, img: pot23 },
  { id: 41, category: 'pots', name: 'روكن شعاع',           price: null, img: pot24 },
  { id: 42, category: 'pots', name: 'روكن صخر',            price: null, img: pot25 },
  { id: 43, category: 'pots', name: 'روكن صدف',            price: null, img: pot26 },
  { id: 44, category: 'pots', name: 'روكن كأس',            price: null, img: pot27 },
  { id: 45, category: 'pots', name: 'روكن محيط',           price: null, img: pot28 },
  { id: 46, category: 'pots', name: 'روكن دوامة',          price: null, img: pot29 },
  { id: 47, category: 'pots', name: 'روكن خطوط',           price: null, img: pot30 },
  { id: 48, category: 'pots', name: 'مود الطبيعة',         price: null, img: pot31 },
  { id: 49, category: 'pots', name: 'مود المربع الصغير',   price: null, img: pot32 },
  { id: 50, category: 'pots', name: 'مود المربع الكبير',   price: null, img: pot33 },
  { id: 51, category: 'pots', name: 'مود المستطيل الأكبر', price: null, img: pot34 },
  { id: 52, category: 'pots', name: 'مود المستطيل الكبير', price: null, img: pot35 },
  { id: 53, category: 'pots', name: 'روكن أزرق',           price: null, img: pot36 },
];

const FILTERS = [
  { key: 'all',    label: 'الكل' },
  { key: 'plants', label: '🌿 نباتات' },
  { key: 'pots',   label: '🪴 أواني' },
];

function Plants() {
  const [active, setActive] = useState('all');
  // بنخزن الـ Index (الترتيب الرقمي) للمنتج المفتوح حالياً بدل مسار الصورة
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active);

  // دالة للانتقال للصورة التالية
  const showNextImg = (e) => {
    e.stopPropagation(); // يمنع إغلاق النافذة عند الضغط على الزرار
    if (currentImgIndex < filtered.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1);
    } else {
      setCurrentImgIndex(0); // يرجع لأول صورة لو وصل للآخر
    }
  };

  // دالة للانتقال للصورة السابقة
  const showPrevImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    } else {
      setCurrentImgIndex(filtered.length - 1); // يروح لآخر صورة لو كان في الأول
    }
  };

  return (
    <div className="page page--plants">
      <Navbar />
      <PageHero
        title="المزروعات والأواني"
        description="مجموعة متميزة من النباتات الطبيعية والأواني العصرية"
      />
      <main className="page-content service-section">
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'filter-btn--active' : ''}`}
              onClick={() => {
                setActive(f.key);
                setCurrentImgIndex(null); // تصفير الـ Slider عند تغيير الفلتر
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filtered.map((product, index) => (
            <article className="product-card" key={product.id}>
              {/* عند الضغط، بنبعت الـ index بتاع الصورة في المصفوفة المفلترة */}
              <img 
                src={product.img} 
                alt={product.name} 
                className="product-imgclickable" 
                onClick={() => setCurrentImgIndex(index)}
                title="اضغط لتكبير الصورة"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/logo192.png';
                }}
              />
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

      {/* نافذة التكبير السحرية المدعومة بأزرار التنقل يمين وشمال */}
      {currentImgIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setCurrentImgIndex(null)}>
          <button className="lightbox-close" onClick={() => setCurrentImgIndex(null)}>&times;</button>
          
          {/* زرار السهم لـ اليسار (السابق) */}
          <button className="lightbox-arrow lightbox-arrow--left" onClick={showPrevImg}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filtered[currentImgIndex].img} 
              alt={filtered[currentImgIndex].name} 
              className="lightbox-img" 
            />
            {/* كتابة اسم المنتج تحت الصورة جوه الصندوق لزيادة الاحترافية */}
            <div className="lightbox-caption">{filtered[currentImgIndex].name}</div>
          </div>
          
          {/* زرار السهم لـ اليمين (التالي) */}
          <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Plants;