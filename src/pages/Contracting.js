import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import './Contracting.css'; // استدعاء ملف الستايل الخاص بالمقاولات

// ==========================================================================
// 1. استيراد صور المشاريع الجديدة لضمان عملها بشكل سليم في الـ Build
// ==========================================================================

// المشروع الأول: أعمال تشطيب ساحة الربط بفندق هوليداي ان تبوك
import a1 from '../images/a1.jpeg';
import a2 from '../images/a2.jpeg';
import a3 from '../images/a3.jpeg';
import a4 from '../images/a4.jpeg';
import a5 from '../images/a5.jpeg';

// المشروع الثاني: أعمال إنشاء و تشطيب هنجر بمدينة نيوم
import b1 from '../images/b1.jpeg';
import b2 from '../images/b2.jpeg';
import b3 from '../images/b3.jpeg';
import b4 from '../images/b4.jpeg';

// المشروع الثالث: أعمال تشطيب التراس بفندق هوليداي ان
import c1 from '../images/c1.jpeg';
import c2 from '../images/c2.jpeg';
import c3 from '../images/c3.jpeg';
import c4 from '../images/c4.jpeg';

// المشروع الرابع: أعمال تشطيب كافيه ستاربكس بفندق هوليداي ان
import d1 from '../images/d1.jpeg';
import d2 from '../images/d2.jpeg';
import d3 from '../images/d3.jpeg';
import d4 from '../images/d4.jpeg';

// المشروع الخامس: أعمال إنشاء فيلا سكنية بمدينة تبوك
import e1 from '../images/e1.jpeg';
import e2 from '../images/e2.jpeg';
import e3 from '../images/e3.jpeg';
import e4 from '../images/e4.jpeg';
import e5 from '../images/e5.jpeg';

// المشروع السادس: أعمال تشطيب قاعة بافيليون بفندق هوليداي ان
import f1 from '../images/f1.jpeg';
import f2 from '../images/f2.jpeg';
import f3 from '../images/f3.jpeg';
import f4 from '../images/f4.jpeg';
import f5 from '../images/f5.jpeg';

// ==========================================================================
// 2. مصفوفة بيانات المشاريع الستة الجديدة
// ==========================================================================
const contractingProjects = [
  { 
    id: 1, 
    title: 'أعمال تشطيب ساحة الربط بفندق هوليداي ان تبوك', 
    desc: 'تنفيذ أعمال التشطيبات الخارجية والربط الإنشائي بأعلى معايير الجودة الفندقية.', 
    images: [a1, a2, a3, a4, a5] 
  },
  { 
    id: 2, 
    title: 'أعمال إنشاء و تشطيب هنجر بمدينة نيوم', 
    desc: 'بناء وتشييد المستودعات والهناجر المعدنية المتكاملة وفقاً لمواصفات المشاريع الكبرى بنشاط واحترافية.', 
    images: [b1, b2, b3, b4]
  },
  { 
    id: 3, 
    title: 'أعمال تشطيب التراس بفندق هوليداي ان', 
    desc: 'تجهيز وتطوير الجلسات الخارجية والتراس بتصميمات معمارية راقية وتشطيبات متقنة.', 
    images: [c1, c2, c3, c4]
  },
  { 
    id: 4, 
    title: 'أعمال تشطيب كافيه ستاربكس بفندق هوليداي ان', 
    desc: 'تنفيذ تشطيبات الديكور الداخلي والهوية البصرية للمشروع التجاري بدقة وسرعة عالية.', 
    images: [d1, d2, d3, d4]
  },
  { 
    id: 5, 
    title: 'أعمال إنشاء فيلا سكنية بمدينة تبوك', 
    desc: 'أعمال الحفر، البناء الإنشائي، صب الهياكل الخرسانية، والتشطيب النهائي المتكامل للفيلات.', 
    images: [e1, e2, e3, e4, e5]
  },
  { 
    id: 6, 
    title: 'أعمال تشطيب قاعة بافيليون بفندق هوليداي ان', 
    desc: 'تنفيذ الديكورات الراقية، الأسقف المستعارة، الإضاءة، والتشطيبات الفاخرة المخصصة لقاعات المناسبات.', 
    images: [f1, f2, f3, f4, f5]
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