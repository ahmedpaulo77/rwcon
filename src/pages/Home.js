import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppFab from '../Components/WhatsAppFab';
import heroImg from '../images/hero.jpg';
import './Home.css';

const SERVICES = [
  {
    to: '/pools',
    icon: '🏊',
    title: 'المسابح',
    desc: 'تصميم وتنفيذ حمامات السباحة باحترافية عالية',
    theme: 'pools',
  },
  {
    to: '/fountains',
    icon: '⛲',
    title: 'النوافير',
    desc: 'نوافير وأعمال مائية فريدة ومبتكرة',
    theme: 'fountains',
  },
  {
    to: '/landscape',
    icon: '🌿',
    title: 'اللاندسكيب',
    desc: 'تنسيق المساحات الخضراء والحدائق',
    theme: 'landscape',
  },
  {
    to: '/plants',
    icon: '🪴',
    title: 'المزروعات والأواني',
    desc: 'نباتات طبيعية وأواني عصرية بأسعار مناسبة',
    theme: 'plants',
  },
  {
    to: '/magic',
    icon: '✨',
    title: 'ماجيك',
    desc: 'نباتات عائمة مغناطيسية ديكور فريد',
    theme: 'magic',
  },
];

function Home() {
  return (
    <div className="page page--home">
      <Navbar />

      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero__overlay" aria-hidden />
        <div className="hero__content">
          <span className="hero-tag">شركة روكن للمقاولات — تبوك</span>
          <h1>
            نحول مساحتك إلى
            <span className="highlight"> تحفة طبيعية</span>
          </h1>
          <p>
            متخصصون في تنسيق المساحات الخضراء، المسابح، النوافير واللاندسكيب
            في المملكة العربية السعودية
          </p>
         <div className="hero__actions">
            
              <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-primary btn-hero">
              تواصل على واتساب
            </a>
            <Link to="/about" className="btn-secondary">
              تعرّف علينا
            </Link>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="services-preview__head">
          <p className="section-label">ما نقدّمه</p>
          <h2>خدماتنا</h2>
          <p>حلول متكاملة لكل مساحة — من التصميم حتى التسليم</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(({ to, icon, title, desc, theme }) => (
            <Link key={to} to={to} className={`service-card service-card--${theme}`}>
              <span className="service-card__icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="service-card__link">اكتشف المزيد ←</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-trust">
        <div className="home-trust__item">
          <strong>+50</strong>
          <span>مشروع منفّذ</span>
        </div>
        <div className="home-trust__item">
          <strong>5</strong>
          <span>مجالات خدمة</span>
        </div>
        <div className="home-trust__item">
          <strong>تبوك</strong>
          <span>وكل أنحاء المملكة</span>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Home;