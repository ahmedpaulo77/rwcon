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
import pot33 from '../images/33.png';
import pot35 from '../images/35.png';
import pot36 from '../images/36.png';

import './ServicePage.css';

const products = [
  // ==================== 1. النباتات (plants) ====================
  { id: 1, category: 'plants', name: 'الأقحوان الشجيرى', price: 35, desc: 'يزدهر في الشمس الكاملة، وهو ما يساعده على إنتاج غزير للزهور .', img: p1 },
  { id: 2, category: 'plants', name: 'البقس', price: 220, desc: 'شجيرة زينة دائمة الخضرة تتميز بأوراق كثيفة صغيرة، مثالية للتشكيل والديكورات.', img: p2 },
  { id: 3, category: 'plants', name: 'السيكاس ', price: 300, desc: 'نموها بطيء جدا مما يجعلها ثمينة، تتحمل الحرارة والبرودة، وتفضل الأماكن الواسعة لتبرز جمالها .', img: p3 },
  { id: 4, category: 'plants', name: ' باكيرا ', price: 250, desc: 'نبات زينة أنيق يعرف بشجرة المال، يتميز بسهولة العناية به ويعرف بشجرة المال، يتميز بسهولة العناية به .', img: p4 },
  { id: 5, category: 'plants', name: 'بيتوسبوروم مبرقش (ايفونيموس) ', price: 250, desc: 'هو نبات مرن يزدهر في الشمس المباشرة أو الظل الجزئي، ويحتاج إلى ري متوسط عند جفاف التربة مع ضرورة وجود صرف جيد للمياه لتجنب تعفن الجذور .', img: p5 },
  { id: 6, category: 'plants', name: 'جلد النمر ', price: 50, desc: 'قوي جدا يتحمل قلة الضوء وقلة السقي، مثالي جدا لغرف النوم والمكاتب.', img: p6 },
  { id: 7, category: 'plants', name: ' دراسينا مانسجيانا ', price: 140, desc: 'نبات داخلي بامتياز، يحب الضوء الساطع غير المباشر، ولايحتاج للكثير من الماء؛ فهو يتحمل الإهمال قليلا.', img: p7 },
  { id: 8, category: 'plants', name: 'فيكس باندا', price: 30, desc: 'هو شجرة زينة صغيرة بأوراق كثيفة لامعة، تتميز بسهولة العناية وتناسب الديكورات الداخلية والخارجية.', img: p10 },
  { id: 9, category: 'plants', name: ' فيكس بنجامينا ', price: 230, desc: 'شجرة زينة أنيقة بأوراق خضراء متدلية، تضيف لمسة طبيعية جميلة وتناسب الأماكن الداخلية والخارجية مع عناية بسيطة.', img: p11 },
  { id: 10, category: 'plants', name: ' فيكس بونساى', price: 180, desc: 'تحتاج إلى ضوء ساطع، ورطوبة جوية (رش الأوراق برذاذ الماء)، وتنسيق بسيط للحفاظ على شكلها الجمالى.', img: p12 },
  { id: 11, category: 'plants', name: 'فيكس جينسنج', price: 130, desc: 'تحتاج إلى ضوء ساطع، ورطوبة جوية رش الأوراق برذاذ الماء، وتنسيق بسيط للحفاظ على شكلها الجمالى.', img: p13 },
  { id: 12, category: 'plants', name: 'ليمون', price: 50, desc: 'تنتج ليمون وتحتاج إلى شمس مباشرة (خارجية)، ري منتظم عند جفاف التربة، وتعتبر من الأشجار التي تضفى حيوية وطاقة إيجابية للمكان.', img: p14 },
  { id: 13, category: 'plants', name: 'يوكا ثلاثية ', price: 210, desc: 'تحب الإضاءة القوية، وتتحمل الجفاف بشكل رائع، لذا لا تفرط في سقيها.', img: p15 },
  { id: 14, category: 'plants', name: 'سرو ليمونى', price: 250, desc: 'يفضل الأماكن الباردة والضوء القوي جدا، ويجب الحفاظ على تربته رطبة باستمرار دون إغراق.', img: p18 },
  { id: 15, category: 'plants', name: ' فيكس ايلاستيكا', price: null, desc: 'تعشق الضوء الساطع "غير المباشر" (خلف نافذة)؛ فالإضاءة الضعيفة تجعل أوراقها تتساقط، والشمس المباشرة القوية جداً قد تحرق أطرافه .', img: p19 },

  // ==================== 2. تشكيلة ليف - أواني مميزة (leaf) ====================
  { id: 16, category: 'leaf', name: ' روكن ورقة الشجر', price: 'صغير: 120 | كبير: 180', img: pot36 },
  { id: 40, category: 'leaf', name: 'روكن ليف كيوب', price: 'صغير: 120 | كبير: 210', img: pot17 },
  { id: 19, category: 'leaf', name: 'مود الطبيعة', price: 'صغير: 120 | كبير: 200', img: pot31 },
  { id: 33, category: 'leaf', name: 'روكن وود ناتشور', price: 'صغير: 210 | كبير: 310', img: pot21 },
  { id: 21, category: 'leaf', name: 'مود المربع الكبير', price: 'صغير: 390 | كبير: 460', img: pot33 },
  { id: 23, category: 'leaf', name: 'مود المستطيل الكبير', price: 'صغير: 800 | كبير: 900', img: pot35 },

  // ==================== 3. تشكيلة نيتشور - أشكال طبيعية (nature) ====================
  { id: 26, category: 'nature', name: 'روكن الموج الأبيض', price: 190, img: pot2 },
  { id: 27, category: 'nature', name: 'روكن الموج الأسود', price: 250, img: pot3 },
  { id: 28, category: 'nature', name: 'روكن بامبو', price: 120, img: pot6 },
  { id: 49, category: 'nature', name: 'روكن خطوط', price: 150, img: pot10 },
  { id: 25, category: 'nature', name: 'روكن إعصار', price: 260, img: pot1 },
  { id: 31, category: 'nature', name: 'روكن بابلز', price: 180, img: pot5 },
  { id: 37, category: 'nature', name: 'روكن صخر', price: 'صغير: 200 | كبير: 320', img: pot27 },
  { id: 35, category: 'nature', name: 'روكن برايل', price: 'صغير: 120 | كبير: 170', img: pot23 },
  { id: 34, category: 'nature', name: 'روكن جرة', price: 75, img: pot24 },
  { id: 38, category: 'nature', name: 'روكن شعاع', price: 250, img: pot26 },
  { id: 32, category: 'nature', name: 'روكن خرز', price: 'صغير: 120 | كبير: 175', img: pot25 },
  { id: 36, category: 'nature', name: 'روكن بحر', price: 200, img: pot22 },
  { id: 52, category: 'nature', name: 'روكن دوامة ', price: 150, img: pot11 },
  { id: 41, category: 'nature', name: 'روكن صدفة', price: 320, img: pot28 },
  { id: 39, category: 'nature', name: 'روكن كأس', price: 140, img: pot29 },
  { id: 44, category: 'nature', name: 'روكن كيرف', price: 100, img: pot16 },
  { id: 29, category: 'nature', name: 'روكن محيط', price: 200, img: pot30 },

  // ==================== 4. تشكيلة فيلا - أواني فاخرة (villa) ====================
  { id: 24, category: 'villa', name: 'روكن مينى', price: 260, img: pot20 },
  { id: 18, category: 'villa', name: 'روكن ماكسى', price: 350, img: pot18 },
  { id: 43, category: 'villa', name: 'روكن منتا', price: 630, img: pot19 },
  { id: 45, category: 'villa', name: ' روكن كاميتا', price: 650, img: pot15 },
  { id: 47, category: 'villa', name: 'روكن انجولو', price: 650, img: pot4 },
  { id: 51, category: 'villa', name: 'روكن كالستو', price: 380, img: pot13 },
  { id: 50, category: 'villa', name: 'روكن بيكو', price: 500, img: pot7 },
  { id: 53, category: 'villa', name: 'روكن توندو', price: 620, img: pot8 },
  { id: 30, category: 'villa', name: 'روكن كاريا', price: 620, img: pot12 },
  { id: 46, category: 'villa', name: 'روكن كامنثا', price: 750, img: pot14 },
  { id: 48, category: 'villa', name: 'روكن جاردينيا', price: 560, img: pot9 }
];

const FILTERS = [
  { key: 'all', label: 'الكل' },
  { key: 'plants', label: 'النباتات' },
  { key: 'leaf', label: ' تشكيلة ليف - أواني مميزة' },
  { key: 'nature', label: 'تشكيلة نيتشور - أشكال طبيعية' },
  { key: 'villa', label: 'تشكيلة فيلا - أواني فاخرة' }
];

function Plants() {
  const [active, setActive] = useState('all');
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active);

  const showNextImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex < filtered.length - 1) {
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
      setCurrentImgIndex(filtered.length - 1);
    }
  };

  return (
    <div className="page page--plants">
      <Navbar />
      <PageHero
        title="المزروعات والأواني الفاخرة"
        description="تصفح مجموعاتنا المتنوعة المصنفة بحسب كتالوج الشركة الرسمي"
      />
      <main className="page-content service-section">
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? 'filter-btn--active' : ''}`}
              onClick={() => {
                setActive(f.key);
                setCurrentImgIndex(null);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filtered.map((product, index) => (
            <article className="product-card" key={product.id}>
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

                {product.desc && (
                  <p className="product-desc" style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', marginBottom: '8px', lineHeight: '1.4' }}>
                    {product.desc}
                  </p>
                )}

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

      {currentImgIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setCurrentImgIndex(null)}>
          <button className="lightbox-close" onClick={() => setCurrentImgIndex(null)}>&times;</button>
          <button className="lightbox-arrow lightbox-arrow--left" onClick={showPrevImg}>&#10094;</button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[currentImgIndex].img}
              alt={filtered[currentImgIndex].name}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <strong>{filtered[currentImgIndex].name}</strong>
              {filtered[currentImgIndex].desc && ` - ${filtered[currentImgIndex].desc}`}
            </div>
          </div>

          <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Plants;