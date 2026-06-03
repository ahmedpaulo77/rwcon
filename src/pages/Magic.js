import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import magicImage from '../images/mag.jpg';
import './Magic.css';
import './ServicePage.css';

const magicProducts = [
  { id: 1, name: 'أبجورة مودرن مضيئة', price: 120, image: magicImage },
  { id: 2, name: 'وحدة إضاءة ديكورية فاخرة', price: 180, image: magicImage },
  { id: 3, name: 'إكسسوارات ماجيك مضيئة', price: 95, image: magicImage },
  { id: 4, name: 'أبجورة طاولة كلاسيك', price: 150, image: magicImage },
  { id: 5, name: 'حامل إضاءة أرضي مودرن', price: 290, image: magicImage },
  { id: 6, name: 'طقم إضاءة ديكور متكامل', price: 340, image: magicImage },
];

function Magic() {
  return (
    <div className="page page--magic">
      <Navbar />
      <PageHero
        label="نحول مساحتك إلى"
        title="ماجيك"
        description="أرقى الأبجورات ووحدات الإضاءة العصرية لإضافة لمسة سحرية على مساحتك"
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
