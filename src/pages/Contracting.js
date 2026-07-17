import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import './Contracting.css'; // استدعاء ملف الستايل الخاص بالمقاولات

// استيراد الصور فوق في الأعلى لضمان عملها بشكل سليم في ملفات الـ .js
import img82 from '../images/82.jpg';
import img83 from '../images/83.jpg';
import img84 from '../images/84.jpg';
import img85 from '../images/85.jpg';
import img86 from '../images/86.jpg';

const contractingProjects = [
  { 
    id: 1, 
    title: 'أعمال التشييد وبناء الهياكل الإنشائية', 
    desc: 'تنفيذ كافة أعمال المقاولات الإنشائية والمباني، بدءاً من الحفر والأساسات وحتى تسليم المفتاح بأعلى معايير الجودة الكودية.', 
    images: [img82, img83] // الصور هنا بتنزل كمتغيرات جاهزة
  },
  { 
    id: 2, 
    title: 'تطوير وتجهيز البنية التحتية واللاندسكيب الثقيل', 
    desc: 'أعمال تسوية التربة، شبكات الصرف والري المتقدمة، وتجهيز المواقع الإنشائية والمشاريع الحيوية الكبرى.', 
    images: [img84, img85, img86]
  }
];

function Contracting() {
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
    <div className="page page--contracting">
      <Navbar />
      <PageHero
        title="أعمال المقاولات العامة والإنشاءات"
        description="حلول إنشائية وهندسية متكاملة تترجم الرؤى المعمارية إلى واقع ملموس بدقة واحترافية"
      />
      <main className="page-content service-section">
        <div className="contracting-grid">
          {contractingProjects.map((project) => (
            <article className="contracting-card" key={project.id}>
              <div className="contracting-img-wrapper">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="contracting-img contracting-img-clickable" 
                  onClick={() => {
                    setActiveProject(project);
                    setCurrentImgIndex(0);
                  }}
                  title="اضغط لتصفح ألبوم صور المشروع بالكامل"
                />
                {project.images.length > 1 && (
                  <span className="contracting-count-badge">
                    +{project.images.length - 1} صور إضافية
                  </span>
                )}
              </div>
              <div className="contracting-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-contracting-cta">
          اطلب عرض سعر لمشروعك
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

export default Contracting;