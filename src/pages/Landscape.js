import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import './ServicePage.css';

const landscapeProjects = [
  { 
    id: 1, 
    title: 'مشروع لاندسكيب NHC', 
    desc: 'تنسيق الحدائق والمساحات الخضراء المحيطة بالمبنى بأحدث النظم العالمية', 
    images: [
      require('../images/70.jpg'),
      require('../images/71.jpg'),
      require('../images/72.jpg')
    ]
  },
  { 
    id: 2, 
    title: 'مشروع لاندسكيب مسجد ', 
    desc: 'تنسيق المسطحات والممرات الخضراء حول المسجد لتوائم الطابع المعماري الخارجي', 
    images: [
      require('../images/78.jpg'),
      require('../images/79.jpg'),
      require('../images/80.jpg'),
      require('../images/81.jpg')
    ]
  }
];

function Landscape() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const showNextImg = (e) => {
    e.stopPropagation();
    if (activeProject && currentImgIndex < activeProject.images.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1);
    } else {
      setCurrentImgIndex(0);
    }
  };

  const showPrevImg = (e) => {
    e.stopPropagation();
    if (activeProject && currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    } else if (activeProject) {
      setCurrentImgIndex(activeProject.images.length - 1);
    }
  };

  const closeLightbox = () => {
    setActiveProject(null);
    setCurrentImgIndex(0);
  };

  return (
    <div className="page page--landscape">
      <Navbar />
      <PageHero
        title="اللاندسكيب وتنسيق الحدائق"
        description="تنسيق المساحات الخضراء والحدائق بأعلى معايير الاحترافية بحسب كتالوج ومشاريع الشركة"
      />
      <main className="page-content service-section">
        {/* تم حذف شريط الفلاتر وعرض الشبكة مباشرة */}
        <div className="products-grid">
          {landscapeProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="img-wrapper" style={{ position: 'relative' }}>
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="project-img project-imgclickable" 
                  onClick={() => {
                    setActiveProject(project);
                    setCurrentImgIndex(0);
                  }}
                  title="اضغط لتصفح ألبوم صور المشروع بالكامل"
                />
                {project.images.length > 1 && (
                  <span className="images-count-badge" style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                    +{project.images.length - 1} صور إضافية
                  </span>
                )}
              </div>
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

      {activeProject !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          {activeProject.images.length > 1 && (
            <>
              <button className="lightbox-arrow lightbox-arrow--left" onClick={showPrevImg}>&#10094;</button>
              <button className="lightbox-arrow lightbox-arrow--right" onClick={showNextImg}>&#10095;</button>
            </>
          )}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeProject.images[currentImgIndex]} alt={activeProject.title} className="lightbox-img" />
            <div className="lightbox-caption">{activeProject.title} ({currentImgIndex + 1} من {activeProject.images.length})</div>
          </div>
        </div>
      )}
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Landscape;