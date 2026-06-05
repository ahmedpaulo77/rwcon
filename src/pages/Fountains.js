import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import fountain1 from '../images/fountain1.jpg';
import './ServicePage.css';

const fountainProjects = [
  { id: 1, title: 'مركز المبيعات تبوك', desc: 'أعمال كهروميكانيكية للنافورة', img: fountain1 }
];

function Fountains() {
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const showNextImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex < fountainProjects.length - 1) {
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
      setCurrentImgIndex(fountainProjects.length - 1);
    }
  };

  return (
    <div className="page page--fountains">
      <Navbar />
      <PageHero
        title="النوافير"
        description="نوافير وأعمال مائية فريدة ومبتكرة تضفي جمالاً استثنائياً على مساحتك"
      />
      <main className="page-content service-section">
        <div className="projects-grid">
          {fountainProjects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <img 
                src={project.img} 
                alt={project.title} 
                className="project-img project-imgclickable" 
                onClick={() => setCurrentImgIndex(index)}
                title="اضغط لتكبير الصورة"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-primary section-cta">
          اطلب عرض سعر
        </a>
      </main>

      {/* نافذة التكبير بالأسهم (حتى لو مشروع واحد، الكود مرن وجاهز لو ضفت مشاريع تانية بعدين) */}
      {currentImgIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setCurrentImgIndex(null)}>
          <button className="lightbox-close" onClick={() => setCurrentImgIndex(null)}>&times;</button>
          
          <button className="lightbox-arrow lightbox-arrow--left" onClick={showPrevImg}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={fountainProjects[currentImgIndex].img} 
              alt={fountainProjects[currentImgIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">{fountainProjects[currentImgIndex].title}</div>
          </div>
          
          <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Fountains;