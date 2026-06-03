import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import plant1 from '../images/plant1.jpg';
import plant2 from '../images/plant2.jpg';
import './ServicePage.css';

const products = [
  { id: 1, name: "دراسينا مانسجيانا", price: 140, img: plant1 },
  { id: 2, name: "جلد النمر", price: 50, img: plant2 },
  { id: 3, name: "فيكس ايلاستيكا", price: 90, img: plant1 },
  { id: 4, name: "يوكا ثلاثية", price: 210, img: plant2 },
  { id: 5, name: "فيكس بونساي", price: 180, img: plant1 },
  { id: 6, name: "باكيرا", price: 250, img: plant2 },
];

function Plants() {
  return (
    <div style={{background: '#eef5e8'}}>
      <Navbar />
      <section className="service-section">
        <p className="section-label">خدماتنا</p>
        <h1>المزروعات والأواني</h1>
        <p className="service-desc">مجموعة متميزة من النباتات الطبيعية والأواني العصرية</p>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price} ريال</p>
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

export default Plants;