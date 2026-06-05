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
          {magicProducts.map((product) => (
            <article className="magic-card" key={product.id}>
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
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Magic;

