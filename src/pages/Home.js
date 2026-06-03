import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-tag">شركة روكن للمقاولات</div>
        <h1>نحول مساحتك إلى<br /><span className="highlight">تحفة طبيعية</span></h1>
        <p>متخصصون في تنسيق المساحات الخضراء، المسابح، النوافير واللاندسكيب في المملكة العربية السعودية</p>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-primary">
          تواصل معنا على واتساب
        </a>
      </section>

      <section className="services-preview">
        <h2>خدماتنا</h2>
        <div className="services-grid">
          <Link to="/pools" className="service-card">
            <div className="service-icon">🏊</div>
            <h3>المسابح</h3>
            <p>تصميم وتنفيذ حمامات السباحة باحترافية عالية</p>
          </Link>
          
          <Link to="/fountains" className="service-card">
            <div className="service-icon">⛲</div>
            <h3>النوافير</h3>
            <p>نوافير وأعمال مائية فريدة ومبتكرة</p>
          </Link>
          
          <Link to="/landscape" className="service-card">
            <div className="service-icon">🌿</div>
            <h3>اللاندسكيب</h3>
            <p>تنسيق المساحات الخضراء والحدائق</p>
          </Link>
          
          <Link to="/plants" className="service-card">
            <div className="service-icon">🪴</div>
            <h3>المزروعات والأواني</h3>
            <p>نباتات طبيعية وأواني عصرية بأسعار مناسبة</p>
          </Link>

          {/* كارت ماجيك الجديد اللي طلبته بنفس التصميم */}
          <Link to="/magic" className="service-card">
            <div className="service-icon">💡</div>
            <h3>ماجيك</h3>
            <p>أرقى الأبجورات ووحدات الإضاءة العصرية والديكورات السحرية</p>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;