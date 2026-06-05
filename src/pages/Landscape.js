import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import landscape1 from '../images/landscape1.webp';
import landscape2 from '../images/landscape2.webp';
import './ServicePage.css';

// عملنا مصفوفة للمشاريع عشان نسهل عملية اللوب والتقليب بالأسهم
const landscapeProjects = [
  { id: 1, title: 'فيلا بالرياض', desc: 'تنسيق أحواض وحديقة', img: landscape1 },
  { id: 2, title: 'وزارة الإسكان جدة', desc: 'توريد زراعة طبيعية مع أصيص', img: landscape2 }
];

function Landscape() {
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const showNextImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex < landscapeProjects.length - 1) {
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
      setCurrentImgIndex(landscapeProjects.length - 1);
    }
  };

  return (
    <div className="page page--landscape">
      <Navbar />
      <PageHero
        title="اللاندسكيب"
        description="تنسيق المساحات الخضراء والحدائق بأعلى معايير الاحترافية"
      />
      <main className="page-content service-section">
        <div className="projects-grid">
          {landscapeProjects.map((project, index) => (
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

      {/* نافذة التكبير بالأسهم */}
      {currentImgIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setCurrentImgIndex(null)}>
          <button className="lightbox-close" onClick={() => setCurrentImgIndex(null)}>&times;</button>
          
          <button className="lightbox-arrow lightbox-arrow--left" onClick={showPrevImg}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={landscapeProjects[currentImgIndex].img} 
              alt={landscapeProjects[currentImgIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">{landscapeProjects[currentImgIndex].title}</div>
          </div>
          
          <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Landscape;