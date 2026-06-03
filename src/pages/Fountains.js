import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import fountain1 from '../images/fountain1.jpg';
import './ServicePage.css';

function Fountains() {
  return (
    <div style={{background: '#e8f4fd'}}>
      <Navbar />
      <section className="service-section">
        <p className="section-label">خدماتنا</p>
        <h1>النوافير</h1>
        <p className="service-desc">نوافير وأعمال مائية فريدة ومبتكرة تضفي جمالاً استثنائياً على مساحتك</p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={fountain1} alt="نافورة" className="project-img" />
            <div className="project-info">
              <h3>مركز المبيعات تبوك</h3>
              <p>أعمال كهروميكانيكية للنافورة</p>
            </div>
          </div>
        </div>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-primary">
          اطلب عرض سعر 💬
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Fountains;