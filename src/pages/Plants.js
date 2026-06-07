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

// قاموس الألوان الثابتة المأخوذة من سكرينات الكتالوج بالظبط
const C = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  orange: '#F39200',
  yellow: '#FFF100',
  lightGrey: '#C9C9C9',
  beige: '#D9B98C',
  pink: '#E65AA6',
  brown: '#6B2F12',
  grey: '#B8B8B8',
  darkBlue: '#2E1557'
};
const products = [
  // ==================== 1. النباتات (plants) ====================
  { id: 1, category: 'plants', name: 'الأقحوان الشجيرى', sizes: [{ size: 'نبات طبيعي', price: '35 SAR' }], desc: 'يزدهر في الشمس الكاملة، وهو ما يساعده على إنتاج غزير للزهور .', img: p1 },
  { id: 2, category: 'plants', name: 'البقس', sizes: [{ size: 'نبات طبيعي', price: '220 SAR' }], desc: 'شجيرة زينة دائمة الخضرة تتميز بأوراق كثيفة صغيرة، مثالية للتشكيل والديكورات.', img: p2 },
  { id: 3, category: 'plants', name: 'السيكاس ', sizes: [{ size: 'نبات طبيعي', price: '300 SAR' }], desc: 'نموها بطيء جدا مما يجعلها ثمينة، تتحمل الحرارة والبرودة، وتفضل الأماكن الواسعة لتبرز جمالها .', img: p3 },
  { id: 4, category: 'plants', name: ' باكيرا ', sizes: [{ size: 'نبات داخلي', price: '250 SAR' }], desc: 'نبات زينة أنيق يعرف بشجرة المال، يتميز بسهولة العناية به ويتميز بسهولة العناية به .', img: p4 },
  { id: 5, category: 'plants', name: 'بيتوسبوروم مبرقش (ايفونيموس) ', sizes: [{ size: 'نبات طبيعي', price: '250 SAR' }], desc: 'هو نبات مرن يزدهر في الشمس المباشرة أو الظل الجزئي، ويحتاج إلى ري متوسط عند جفاف التربة مع ضرورة وجود صرف جيد للمياه لتجنب تعفن الجذور .', img: p5 },
  { id: 6, category: 'plants', name: 'جلد النمر ', sizes: [{ size: 'نبات داخلي', price: '50 SAR' }], desc: 'قوي جدا يتحمل قلة الضوء وقلة السقي، مثالي جدا لغرف النوم والمكاتب.', img: p6 },
  { id: 7, category: 'plants', name: ' دراسينا مانسجيانا ', sizes: [{ size: 'نبات داخلي', price: '140 SAR' }], desc: 'نبات داخلي بامتياز، يحب الضوء الساطع غير المباشر، ولايحتاج للكثير من الماء؛ فهو يتحمل الإهمال قليلا.', img: p7 },
  { id: 8, category: 'plants', name: 'فيكس باندا', sizes: [{ size: 'نبات طبيعي', price: '30 SAR' }], desc: 'هو شجرة زينة صغيرة بأوراق كثيفة لامعة، تتميز بسهولة العناية وتناسب الديكورات الداخلية والخارجية.', img: p10 },
  { id: 9, category: 'plants', name: ' فيكس بنجامينا ', sizes: [{ size: 'نبات طبيعي', price: '230 SAR' }], desc: 'شجرة زينة أنيقة بأوراق خضراء متدلية، تضيف لمسة طبيعية جميلة وتناسب الأماكن الداخلية والخارجية مع عناية بسيطة.', img: p11 },
  { id: 10, category: 'plants', name: ' فيكس بونساى', sizes: [{ size: 'شجرة زينة', price: '180 SAR' }], desc: 'تحتاج إلى ضوء ساطع، ورطوبة جوية (رش الأوراق برذاذ الماء)، وتنسيق بسيط للحفاظ على شكلها الجمالى.', img: p12 },
  { id: 11, category: 'plants', name: 'فيكس جينسنج', sizes: [{ size: 'شجرة زينة', price: '130 SAR' }], desc: 'تحتاج إلى ضوء ساطع، ورطوبة جوية رش الأوراق برذاذ الماء، وتنسيق بسيط للحفاظ على شكلها الجمالى.', img: p13 },
  { id: 12, category: 'plants', name: 'ليمون', sizes: [{ size: 'شجرة مثمرة', price: '50 SAR' }], desc: 'تنتج ليمون وتحتاج إلى شمس مباشرة (خارجية)، ري منتظم عند جفاف التربة، وتعتبر من الأشجار التي تضفى حيوية وطاقة إيجابية للمكان.', img: p14 },
  { id: 13, category: 'plants', name: 'يوكا ثلاثية ', sizes: [{ size: 'نبات داخلي', price: '210 SAR' }], desc: 'تحب الإضاءة القوية، وتتحمل الجفاف بشكل رائع، لذا لا تفرط في سقيها.', img: p15 },
  { id: 14, category: 'plants', name: 'سرو ليمونى', sizes: [{ size: 'نبات طبيعي', price: '250 SAR' }], desc: 'يفضل الأماكن الباردة والضوء القوي جدا، ويجب الحفاظ على تربته رطبة باستمرار دون إغراق.', img: p18 },
  { id: 15, category: 'plants', name: ' فيكس ايلاستيكا', sizes: [{ size:  'شجرة زينة', price: '90 SAR' }], desc: 'تعشق الضوء الساطع "غير المباشر" (خلف نافذة)؛ فالإضاءة الضعيفة تجعل أوراقها تتساقط، والشمس المباشرة القوية جداً قد تحرق أطرافه .', img: p19 },

  // ==================== 2. تشكيلة ليف (leaf) ====================
  { id: 16, category: 'leaf', name: ' روكن ورقة الشجر', sizes: [{ size: '30DX25H', price: '120 SAR' }, { size: '39DX32H', price: '180 SAR' }], img: pot36 },
  { id: 40, category: 'leaf', name: 'روكن ليف كيوب', sizes: [{ size: '29L X 29 W X 25H', price: '120 SAR' }, { size: '38L X38 W X 32 H', price: '210 SAR' }], img: pot17 },
  { id: 19, category: 'leaf', name: 'مود الطبيعة', sizes: [{ size: '30DX25H', price: '120 SAR' }, { size: '39DX32H', price: '200 SAR' }], img: pot31 },
  { id: 33, category: 'leaf', name: 'روكن وود ناتشور', sizes: [{ size: '29DX28H', price: '210 SAR' }, { size: '39DX39H', price: '310 SAR' }], img: pot21 },
  { id: 21, category: 'leaf', name: 'مود المربع الكبير', sizes: [{ size: 'H 39 W X 39 39L X', price: '390 SAR' }, { size: '35L X 35 W X 55 H', price: '460 SAR' }], img: pot33 },
  { id: 23, category: 'leaf', name: 'مود المستطيل الكبير', sizes: [{ size: '99L X 39 W X 39 H', price: '800 SAR' }, { size: '99L X 39 W X 39 H', price: '900 SAR' }], img: pot35 },

  // ==================== 3. تشكيلة نيتشور (nature) ====================
  { id: 26, category: 'nature', name: 'روكن الموج الأبيض', sizes: [{ size: '30DX25H', price: '190 SAR' }], img: pot2 },
  { id: 27, category: 'nature', name: 'روكن الموج الأسود', sizes: [{ size: '45DX51H', price: '250 SAR' }], img: pot3 },
  { id: 28, category: 'nature', name: 'روكن بامبو', sizes: [{ size: '41DX27H', price: '120 SAR' }], img: pot6 },
  { id: 49, category: 'nature', name: 'روكن خطوط', sizes: [{ size: '31DX32H', price: '150 SAR' }], img: pot10 },
  { id: 25, category: 'nature', name: 'روكن إعصار', sizes: [{ size: '49DX40H', price: '260 SAR' }], img: pot1 },
  { id: 31, category: 'nature', name: 'روكن بابلز', sizes: [{ size: '23DX17H', price: '180 SAR' }], img: pot5 },
  { id: 37, category: 'nature', name: 'روكن صخر', sizes: [{ size: '40DX30H', price: '200 SAR' }, { size: '55DX41H', price: '320 SAR' }], img: pot27 },
  { id: 35, category: 'nature', name: 'روكن برايل', sizes: [{ size: '23DX24H', price: '120 SAR' }, { size: '30DX30H', price: '170 SAR' }], img: pot23 },
  { id: 34, category: 'nature', name: 'روكن جرة', sizes: [{ size: '28DX22H', price: '75 SAR' }  , { size: '38DX33H', price: '120 SAR' }], img: pot24 },
  { id: 38, category: 'nature', name: 'روكن شعاع', sizes: [{ size: '44DX45H', price: '250 SAR' }], img: pot26 },
  { id: 32, category: 'nature', name: 'روكن خرز', sizes: [{ size: '21DX21H', price: '175 SAR' }, { size: '17DX17H', price: '120 SAR' }], img: pot25 },
  { id: 36, category: 'nature', name: 'روكن بحر', sizes: [{ size: '41DX25H', price: '200 SAR' }], img: pot22 },
  { id: 52, category: 'nature', name: 'روكن دوامة ', sizes: [{ size: '36LX34XWX13H', price: '150 SAR' }], img: pot11 },
  { id: 41, category: 'nature', name: 'روكن صدفة', sizes: [{ size: '49LX32WX29H', price: '320 SAR' }], img: pot28 },
  { id: 39, category: 'nature', name: 'روكن كأس', sizes: [{ size: '16DX23H', price: '140 SAR' }], img: pot29 },
  { id: 44, category: 'nature', name: 'روكن كيرف', sizes: [{ size: '36LX33WX25H', price: '100 SAR' }], img: pot16 },
  { id: 29, category: 'nature', name: 'روكن محيط', sizes: [{ size: '50DX20H', price: '200 SAR' }], img: pot30 },

  // ==================== 4. تشكيلة فيلا (الألوان الدقيقة لكل عنصر من الـ 11 بناءً على السكرينات) ====================
  // ==================== 4. تشكيلة فيلا ====================

{ id: 24, category: 'villa', name: 'روكن مينى',
  colors: [C.white,C.black,C.red,C.yellow,C.lightGrey,C.pink,C.beige,C.brown,C.orange,C.darkBlue,C.grey],
  sizes: [{ size: '35DX33H', price: '260 SAR' }],
  img: pot20
},

{ id: 18, category: 'villa', name: 'روكن ماكسى',
  colors: [C.white,C.black,C.red,C.yellow,C.lightGrey,C.beige,C.brown,C.darkBlue,C.grey],
  sizes: [{ size: '42DX40H', price: '350 SAR' }],
  img: pot18
},

{ id: 43, category: 'villa', name: 'روكن منتا',
  colors: [C.white,C.black,C.red,C.yellow,C.lightGrey,C.beige,C.brown,C.darkBlue,C.grey],
  sizes: [{ size: '50DX47H', price: '630 SAR' }],
  img: pot19
},

{ id: 45, category: 'villa', name: 'روكن كاميتا',
  colors: [C.white,C.black,C.red,C.yellow,C.lightGrey,C.beige,C.brown,C.darkBlue,C.grey],
  sizes: [{ size: '60DX56H', price: '650 SAR' }],
  img: pot15
},

{ id: 47, category: 'villa', name: 'روكن انجولو',
  colors: [C.white,C.black,C.red,C.brown,C.beige,C.darkBlue,C.grey],
  sizes: [{ size: '40LX40WX75H', price: '650 SAR' }],
  img: pot4
},

{ id: 51, category: 'villa', name: 'روكن كالستو',
  colors: [C.white,C.black,C.red,C.orange,C.yellow,C.lightGrey,C.pink,C.beige,C.brown,C.darkBlue,C.grey],
  sizes: [{ size: '31LX31WX56H', price: '380 SAR' }],
  img: pot13
},

{ id: 50, category: 'villa', name: 'روكن بيكو',
  colors: [C.white,C.black,C.brown,C.beige,C.darkBlue],
  sizes: [{ size: '40LX40WX75H', price: '500 SAR' }],
  img: pot7
},

{ id: 53, category: 'villa', name: 'روكن توندو',
  colors: [C.white,C.black,C.red,C.brown,C.beige,C.darkBlue,C.grey],
  sizes: [{ size: '40DX75H', price: '620 SAR' }],
  img: pot8
},

{ id: 30, category: 'villa', name: 'روكن كاريا',
  colors: [C.white,C.black,C.red,C.brown,C.beige,C.darkBlue,C.grey],
  sizes: [{ size: '50LX50WX47H', price: '620 SAR' }],
  img: pot12
},

{ id: 46, category: 'villa', name: 'روكن كامنثا',
  colors: [C.white,C.black,C.red,C.brown,C.beige,C.darkBlue,C.grey],
  sizes: [{ size: '60LX60WX57H', price: '750 SAR' }],
  img: pot14
},

{ id: 48, category: 'villa', name: 'روكن جاردينيا',
  colors: [C.white,C.black,C.red,C.brown,C.grey],
  sizes: [{ size: '80LX31WX45H', price: '560 SAR' }],
  img: pot9
},
];
const FILTERS = [
  { key: 'all', label: 'الكل', desc: null },
  { key: 'plants', label: 'النباتات', desc: 'مجموعة من أرقى النباتات الطبيعية الداخلية والخارجية المنتقاة بعناية لتزيين مساحتك.' },
  { key: 'leaf', label: ' تشكيلة ليف - أواني مميزة', desc: 'ست تصميمات فريدة من الأواني المستوحاة من الطبيعة — من الأشكال الكلاسيكية إلى المربعات و المستطيلات العصرية، بلاستيك عالي الجودة و جميع الالوان متاحة.' },
  { key: 'nature', label: 'تشكيلة نيتشور - أشكال طبيعية', desc: 'واحد وعشرون تصميماً مستوحى من الطبيعة — موجات وصخور وأصداف وأشكال بحرية و جبلية تضفي جمالاً فريداً.' },
  { key: 'villa', label: 'تشكيلة فيلا - أواني فاخرة', desc: 'أحد عشر تصميماً من الأواني الفاخرة — أحجام كبيرة وتصاميم راقية مثالية للحدائق و المداخل و المساحات الفاخرة، مصنوع من البولي بروبلين عالي الجودة و معالج ضد الاشعة فوق البنفسجية.' }
];

function Plants() {
  const [active, setActive] = useState('all');
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const filtered = active === 'all'
    ? products
    : products.filter(p => p.category === active);

  const activeCategory = FILTERS.find(f => f.key === active);

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
    <div className="page page--plants" style={{ direction: 'rtl' }}>
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

        {activeCategory && activeCategory.desc && (
          <div className="category-description-box" style={{ 
            backgroundColor: '#f9f9f9', 
            borderRight: '4px solid #2e7d32', 
            padding: '15px 20px', 
            borderRadius: '8px', 
            marginBottom: '30px',
            textAlign: 'right',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <p style={{ margin: 0, fontSize: '1.05rem', color: '#444', lineHeight: '1.6', fontWeight: '500' }}>
              {activeCategory.desc}
            </p>
          </div>
        )}

        <div className="products-grid">
          {filtered.map((product, index) => (
            <article className="product-card" key={product.id}>
              
              {/* قسم يحتوي على الدوائر الملونة الجانبية إذا وجدت للمنتج */}
              <div style={{ display: 'flex', position: 'relative' }}>
                
                {product.colors && product.colors.length > 0 && (
                  <div className="product-colors-sidebar" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    padding: '10px 5px',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderLeft: '1px solid #eee',
                    marginLeft: '8px'
                  }}>
                    {product.colors.map((colorCode, cIdx) => (
                      <span 
                        key={cIdx} 
                        style={{
                          width: '14px',
                          height: '14px',
                          backgroundColor: colorCode,
                          borderRadius: '50%',
                          border: colorCode === '#FFFFFF' ? '1px solid #ccc' : '1px solid rgba(0,0,0,0.15)',
                          display: 'inline-block'
                        }}
                        title="اللون المتاح"
                      />
                    ))}
                  </div>
                )}

                <img
                  src={product.img}
                  alt={product.name}
                  className="product-imgclickable"
                  onClick={() => setCurrentImgIndex(index)}
                  title="اضغط لتكبير الصورة"
                  style={{ flex: 1, objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/logo192.png';
                  }}
                />
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>

                {product.desc && (
                  <p className="product-desc" style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', marginBottom: '12px', lineHeight: '1.4' }}>
                    {product.desc}
                  </p>
                )}

                {product.sizes ? (
                  <div className="product-sizes-table" style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    margin: '10px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    {product.sizes.map((item, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.85rem',
                        borderBottom: idx < product.sizes.length - 1 ? '1px dashed #ddd' : 'none',
                        paddingBottom: idx < product.sizes.length - 1 ? '4px' : '0'
                      }}>
                        <span style={{ 
                          direction: 'ltr', 
                          fontWeight: '600', 
                          color: '#555',
                          fontFamily: 'monospace' 
                        }}>
                          {item.size}
                        </span>
                        
                        <span style={{ 
                          fontWeight: 'bold', 
                          color: '#2e7d32' 
                        }}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="price-inquiry" style={{ margin: '12px 0', fontWeight: 'bold', color: '#777' }}>السعر عند التواصل</p>
                )}

<a href={`https://wa.me/966592001640?text=${encodeURIComponent('السلام عليكم، أريد الاستفسار عن: ' + product.name)}`} target="_blank" rel="noreferrer" className="btn-order">                  اطلب الآن
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