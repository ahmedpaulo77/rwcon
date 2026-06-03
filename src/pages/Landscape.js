import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import landscape1 from '../images/landscape1.webp';
import landscape2 from '../images/landscape2.webp';
import './ServicePage.css';

function Landscape() {
  return (
    <div style={{background: '#f5f0e8'}}>
      <Navbar />
      <section className="service-section">
        <p className="section-label">خدماتنا</p>
        <h1>اللاندسكيب</h1>
        <p className="service-desc">تنسيق المساحات الخضراء والحدائق بأعلى معايير الاحترافية</p>
        <div className="projects-grid">
          <div className="project-card">
            <img src={landscape1} alt="لاندسكيب" className="project-img" />
            <div className="project-info">
              <h3>فيلا بالرياض</h3>
              <p>تنسيق أحواض وحديقة</p>
            </div>
          </div>
          <div className="project-card">
            <img src={landscape2} alt="لاندسكيب" className="project-img" />
            <div className="project-info">
              <h3>وزارة الإسكان جدة</h3>
              <p>توريد زراعة طبيعية مع أصيص</p>
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

export default Landscape;