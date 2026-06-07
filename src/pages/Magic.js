import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';

// استيراد الصور القديمة والجديدة
import flowerImg from '../images/flower.png';
import monImg from '../images/mon.png';
import potImg from '../images/pot.png'; // إستيراد الصورة الجديدة هنا

import './Magic.css';
import './ServicePage.css';

const magicProducts = [
  { id: 1, name: 'الاصيص الدوار ', desc: 'تحب الإضاءة القوية، وتتحمل الجفاف بشكل رائع، لذا لا تفرط في سقيها.', price: 260, image: flowerImg },
  { id: 2, name: 'الكشاف الدوار ', desc: 'تحب الإضاءة القوية، وتتحمل الجفاف بشكل رائع، لذا لا تفرط في سقيها.', price: 260, image: monImg },
  { id: 3, name: 'حوض مضئ', desc: 'تحب الإضاءة القوية، وتتحمل الجفاف بشكل رائع، لذا لا تفرط في سقيها.', price: 800, image: potImg }, // إضافة المنتج الثالث هنا (تقدر تغير الاسم أو السعر براحتك)
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
                  title="اضغط لتكببر الصورة"
                />
              </div>
              <div className="magic-details">
                <h3>{product.name}</h3>
                <p className="magic-desc">
                  {product.desc}
                </p>
                <p className="magic-price">{product.price}  SAR </p>
                <a href={`https://wa.me/966592001640?text=${encodeURIComponent('السلام عليكم، أريد الاستفسار عن: ' + product.name)}`} target="_blank" rel="noreferrer" className="btn-order">                  اطلب الآن
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