import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import pool1 from '../images/pool1.jpg';
import pool2 from '../images/pool2.webp';
import './ServicePage.css';

const poolProjects = [
  { id: 1, title: 'هوليداي إن تبوك', desc: 'أعمال كهروميكانيكية لحمام السباحة', img: pool1 },
  { id: 2, title: 'نيوم', desc: 'أعمال كهروميكانيكية لحمام السباحة', img: pool2 }
];

function Pools() {
  const [currentImgIndex, setCurrentImgIndex] = useState(null);

  const showNextImg = (e) => {
    e.stopPropagation();
    if (currentImgIndex < poolProjects.length - 1) {
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
      setCurrentImgIndex(poolProjects.length - 1);
    }
  };

  return (
    <div className="page page--pools">
      <Navbar />
      <PageHero
        title="المسابح"
        description="نصمم وننفذ حمامات السباحة باحترافية عالية في مختلف أنحاء المملكة"
      />
      <main className="page-content service-section">
        <div className="projects-grid">
          {poolProjects.map((project, index) => (
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
              src={poolProjects[currentImgIndex].img} 
              alt={poolProjects[currentImgIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">{poolProjects[currentImgIndex].title}</div>
          </div>
          
          <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Pools;