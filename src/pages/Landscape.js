import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import landscape1 from '../images/landscape1.webp';
import landscape2 from '../images/landscape2.webp';
import './ServicePage.css';

function Landscape() {
  return (
    <div className="page page--landscape">
      <Navbar />
      <PageHero
        title="اللاندسكيب"
        description="تنسيق المساحات الخضراء والحدائق بأعلى معايير الاحترافية"
      />
      <main className="page-content service-section">
        <div className="projects-grid">
          <article className="project-card">
            <img src={landscape1} alt="لاندسكيب فيلا بالرياض" className="project-img" />
            <div className="project-info">
              <h3>فيلا بالرياض</h3>
              <p>تنسيق أحواض وحديقة</p>
            </div>
          </article>
          <article className="project-card">
            <img src={landscape2} alt="لاندسكيب وزارة الإسكان جدة" className="project-img" />
            <div className="project-info">
              <h3>وزارة الإسكان جدة</h3>
              <p>توريد زراعة طبيعية مع أصيص</p>
            </div>
          </article>
        </div>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-primary section-cta">
          اطلب عرض سعر
        </a>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Landscape;
