import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import plant1 from '../images/plant1.jpg';
import plant2 from '../images/plant2.jpg';
import './ServicePage.css';

const products = [
  { id: 1, name: 'دراسينا مانسجيانا', price: 140, img: plant1 },
  { id: 2, name: 'جلد النمر', price: 50, img: plant2 },
  { id: 3, name: 'فيكس ايلاستيكا', price: 90, img: plant1 },
  { id: 4, name: 'يوكا ثلاثية', price: 210, img: plant2 },
  { id: 5, name: 'فيكس بونساي', price: 180, img: plant1 },
  { id: 6, name: 'باكيرا', price: 250, img: plant2 },
];

function Plants() {
  return (
    <div className="page page--plants">
      <Navbar />
      <PageHero
        title="المزروعات والأواني"
        description="مجموعة متميزة من النباتات الطبيعية والأواني العصرية"
      />
      <main className="page-content service-section">
        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price} ريال</p>
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
