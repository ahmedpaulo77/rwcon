import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import flowerImg from '../images/flower.png';
import monImg from '../images/mon.png';
import './Magic.css';
import './ServicePage.css';

const magicProducts = [
  { id: 1, name: 'نبتة عائمة مغناطيسية — فلاور', price: 350, image: flowerImg },
  { id: 2, name: 'نبتة عائمة مغناطيسية — مون',   price: 350, image: monImg },
];

function Magic() {
  // بنخزن الترتيب الرقمي للصورة المفتوحة حالياً
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const showNextImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex < magicProducts.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1);
    } else {
      setCurrentImgIndex(0);
    }
  };

  const showPrevImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    } else {
      setCurrentImgIndex(magicProducts.length - 1);
    }
  };

  return (
    <div className="page page--magic">
      <Navbar />
      <PageHero
        label="نحول مساحتك إلى"
        title="ماجيك"
        description="نباتات عائمة مغناطيسية تضيف لمسة سحرية فريدة على مساحتك"
      />
      <main className="page-content">
        <div className="magic-grid">
          {magicProducts.map((product, index) => (
            <article className="magic-card" key={product.id}>
              <div className="magic-img-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="magic-img magic-imgclickable" 
                  onClick={() => setCurrentImgIndex(index)}
                  title="اضغط لتكبير الصورة"
                />
              </div>
              <div className="magic-details">
                <h3>{product.name}</h3>
                <p className="magic-price">{product.price} ريال</p>
                <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-order">
                  اطلب الآن
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* نافذة التكبير السحرية بالأسهم */}
      {currentImgIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setCurrentImgIndex(null)}>
          <button className="lightbox-close" onClick={() => setCurrentImgIndex(null)}>&times;</button>
          
          <button className="lightbox-arrow lightbox-arrow--left" onClick={showPrevImg}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={magicProducts[currentImgIndex].image} 
              alt={magicProducts[currentImgIndex].name} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">{magicProducts[currentImgIndex].name}</div>
          </div>
          
          <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Magic;