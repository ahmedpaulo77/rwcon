import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import fountain1 from '../images/fountain1.jpg';
import './ServicePage.css';

function Fountains() {
  return (
    <div className="page page--fountains">
      <Navbar />
      <PageHero
        title="النوافير"
        description="نوافير وأعمال مائية فريدة ومبتكرة تضفي جمالاً استثنائياً على مساحتك"
      />
      <main className="page-content service-section">
        <div className="projects-grid">
          <article className="project-card">
            <img src={fountain1} alt="نافورة مركز المبيعات تبوك" className="project-img" />
            <div className="project-info">
              <h3>مركز المبيعات تبوك</h3>
              <p>أعمال كهروميكانيكية للنافورة</p>
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

export default Fountains;
