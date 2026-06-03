import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import pool1 from '../images/pool1.jpg';
import pool2 from '../images/pool2.webp';
import './ServicePage.css';

function Pools() {
  return (
    <div style={{background: '#e8f4fd'}}>
      <Navbar />
      <section className="service-section">
        <p className="section-label">خدماتنا</p>
        <h1>المسابح</h1>
        <p className="service-desc">نصمم وننفذ حمامات السباحة باحترافية عالية في مختلف أنحاء المملكة</p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={pool1} alt="مسبح" className="project-img" />
            <div className="project-info">
              <h3>هوليداي إن تبوك</h3>
              <p>أعمال كهروميكانيكية لحمام السباحة</p>
            </div>
          </div>
          <div className="project-card">
            <img src={pool2} alt="مسبح" className="project-img" />
            <div className="project-info">
              <h3>نيوم</h3>
              <p>أعمال كهروميكانيكية لحمام السباحة</p>
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

export default Pools;