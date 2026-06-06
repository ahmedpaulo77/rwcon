import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import './ServicePage.css';

const landscapeProjects = [
  { 
    id: 3, 
    title: 'أعمال توريد زراعة طبيعية مع أصص بفندق هوليداي ان بتبوك', 
    desc: 'تنسيق داخلي وخارجي فاخر باستخدام نباتات طبيعية منتقاة بعناية مدمجة مع تشكيلة الأصص الحديثة لتوائم الطابع الفندقي الراقي.', 
    images: [
      require('../images/101.jpg'), // غير اسم الصورة هنا بناءً على ملفك الجديد
      require('../images/102.jpg'), // غير اسم الصورة الثانية
      require('../images/103.jpg')  // غير اسم الصورة الثالثة
    ]
  },
  { 
    id: 4, 
    title: 'من اعمالنا توريد وزراعة الاصيص الديكوري الدوار بأحد مقرات الشركات', 
    desc: 'تنسيق داخلي وخارجي فاخر باستخدام نباتات طبيعية منتقاة بعناية مدمجة مع تشكيلة الأصص الحديثة لتوائم الطابع الفندقي الراقي.', 
    images: [
      require('../images/104.jpg'),
      require('../images/105.jpg'), // غير اسم الصورة هنا بناءً على ملفك الجديد
      require('../images/106.jpg'), // غير اسم الصورة الثانية
      require('../images/107.jpg')  // غير اسم الصورة الثالثة
    ]
    
  },
  { 
    id: 6, 
    title: 'تنسيق احواض وحديقه فله بالرياض', 
    desc: 'تنسيق داخلي وخارجي فاخر باستخدام نباتات طبيعية منتقاة بعناية مدمجة مع تشكيلة الأصص الحديثة لتوائم الطابع الفندقي الراقي.', 
    images: [
       require('../images/112.jpg'),
      require('../images/113.jpg'),
      require('../images/114.jpg'),
      require('../images/115.jpg'),
      require('../images/116.jpg'),
      require('../images/117.jpg'), // غير اسم الصورة هنا بناءً على ملفك الجديد
      require('../images/118.jpg'), // غير اسم الصورة الثانية
      require('../images/119.jpg')  // غير اسم الصورة الثالثة
    ]
    
  },
  { 
    id: 7, 
    title: 'اعمال توريد الزراعة الطبيعية مبنى وزارة الاسكان مع اصيص  بجدة', 
    desc: 'تنسيق داخلي وخارجي فاخر باستخدام نباتات طبيعية منتقاة بعناية مدمجة مع تشكيلة الأصص الحديثة لتوائم الطابع الفندقي الراقي.', 
    images: [
      require('../images/120.jpg'),
      require('../images/121.jpg'),
      require('../images/122.jpg'),
      require('../images/123.jpg'),
      
    ]
    
  },
  { 
    id: 5, 
    title: ' تنسيق احواض فيلا بالرياض ', 
    desc: 'تنسيق داخلي وخارجي فاخر باستخدام نباتات طبيعية منتقاة بعناية مدمجة مع تشكيلة الأصص الحديثة لتوائم الطابع الفندقي الراقي.', 
    images: [
      require('../images/109.jpg'),
      require('../images/108.jpg'), // غير اسم الصورة هنا بناءً على ملفك الجديد
      require('../images/110.jpg'), // غير اسم الصورة الثانية
     ]
    
  },
  
  
  { 
    id: 1, 
    title: 'مشروع لاندسكيب NHC', 
    desc: 'تنسيق الحدائق والمساحات الخضراء المحيطة بالمبنى بأحدث النظم العالمية', 
    images: [
      
      require('../images/71.jpg'),
      require('../images/70.jpg'),
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
        {/* عرض الشبكة مباشرة للمشاريع */}
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
                <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', lineHeight: '1.5' }}>{project.title}</h3>
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