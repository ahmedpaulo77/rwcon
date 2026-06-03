import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Magic.css'; 

// استدعاء الصورة بامتدادها الفعلي الصحيحavif
import magicImage from '../images/mag.jpg';

const magicProducts = [
  { id: 1, name: "أبجورة مودرن مضيئة", price: 120, image: magicImage },
  { id: 2, name: "وحدة إضاءة ديكورية فاخرة", price: 180, image: magicImage },
  { id: 3, name: "إكسسوارات ماجيك مضيئة", price: 95, image: magicImage },
  { id: 4, name: "أبجورة طاولة كلاسيك", price: 150, image: magicImage },
  { id: 5, name: "حامل إضاءة أرضي مودرن", price: 290, image: magicImage },
  { id: 6, name: "طقم إضاءة ديكور متكامل", price: 340, image: magicImage },
];

function Magic() {
  return (
    // الكلاس هنا مخصص لعمل التوليفة الملونة المطلوبة
    <div className="magic-custom-layout">
      <Navbar />
      
      <section className="service-section" style={{ padding: '5rem 2rem' }}>
        {/* تم تعديل الجملة هنا وتثبيت لونها الأخضر بشكل مباشر لضمان عدم تأثرها بأي كود قديم */}
        <p className="section-label" style={{ fontWeight: 700, color: '#2e7d32' }}>
          نحول مساحتك إلى...
        </p>
        <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1rem' }}>ماجيك</h1>
        <p className="service-desc" style={{ color: '#4a5568', marginBottom: '4rem' }}>
          تعديل الأجواء وإضافة لمسات سحرية من خلال أرقى الأبجورات ووحدات الإضاءة العصرية
        </p>
        
        <div className="magic-grid">
          {magicProducts.map((product) => (
            <div className="magic-card" key={product.id}>
              <div className="magic-img-container">
                <img src={product.image} alt={product.name} className="magic-img" />
              </div>
              <div className="magic-details">
                <h3>{product.name}</h3>
                <p className="magic-price">{product.price} ريال</p>
                <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-order">
                  اطلب الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Magic;