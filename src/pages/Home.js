import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppFab from '../Components/WhatsAppFab';

// استيراد صور الخدمات
import poolsImg from '../images/m.jpg';      // صورة للمسابح
import fountainsImg from '../images/200.jpg';  // صورة للنوافير
import landscapeImg from '../images/111.jpg';  // صورة للاندسكيب
import plantsImg from '../images/150.jpg';     // صورة للمزروعات والأواني
import magicImg from '../images/img13.jpeg';     // صورة لقسم ماجيك
import contractingImg from '../images/82.jpg';   // صورة لقسم المقاولات

// استيراد صور الكرسول (الخلفيات المتبدلة للهيرو)
import bgHero1 from '../images/hero.jpg';
import bgHero2 from '../images/111.jpg';
import bgHero3 from '../images/m.jpg';
import bgHero4 from '../images/82.jpg';

import './Home.css';

// مصفوفة صور الكرسول
const CAROUSEL_BACKGROUNDS = [bgHero1, bgHero2, bgHero3, bgHero4];

const SERVICES = [
  {
    to: '/pools',
    img: poolsImg,
    title: 'المسابح',
    desc: 'تصميم وتنفيذ حمامات السباحة باحترافية عالية',
    theme: 'pools',
  },
  {
    to: '/fountains',
    img: fountainsImg,
    title: 'النوافير',
    desc: 'نوافير وأعمال مائية فريدة ومبتكرة',
    theme: 'fountains',
  },
  {
    to: '/landscape',
    img: landscapeImg,
    title: 'اللاندسكيب',
    desc: 'تنسيق المساحات الخضراء والحدائق',
    theme: 'landscape',
  },
  {
    to: '/contracting',
    img: contractingImg,
    title: 'المقاولات العامة',
    desc: 'أعمال التشييد، الهياكل الإنشائية، وتطوير البنية التحتية',
    theme: 'contracting',
  },
  {
    to: '/plants',
    img: plantsImg,
    title: 'المزروعات والأواني',
    desc: 'نباتات طبيعية وأواني عصرية بأسعار مناسبة',
    theme: 'plants',
  },
  {
    to: '/magic',
    img: magicImg,
    title: 'ماجيك',
    desc: 'نباتات عائمة مغناطيسية ديكور فريد',
    theme: 'magic',
  },
];

function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // تبديل الصور تلقائياً كل 4 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_BACKGROUNDS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page page--home">
      <Navbar />

      {/* قسم الـ Hero مع خلفيات الكرسول المتغيرة */}
      <section className="hero">
        <div className="hero__carousel-container">
          {CAROUSEL_BACKGROUNDS.map((bgImage, index) => (
            <div
              key={index}
              className={`hero__bg-slide ${index === currentBgIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${bgImage})` }}
            />
          ))}
        </div>

        <div className="hero__overlay" aria-hidden />

        <div className="hero__content">
          <h1>
            نحول مساحتك إلى
            <span className="highlight"> تحفة طبيعية</span>
          </h1>
          <p>
            متخصصون في تنسيق المساحات الخضراء، المسابح، النوافير، اللاندسكيب و المقاولات في المملكة العربية السعودية
          </p>
          <div className="hero__actions">
            <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-primary btn-hero">
              تواصل على واتساب
              <br />
              CONTACT US
            </a>
            <Link to="/about" className="btn-secondary">
              تعرّف علينا
              <br />
              ABOUT US
            </Link>
          </div>
        </div>

        {/* مؤشرات النقاط لـ التبديل اليدوي أو معرفة الصورة الحالية */}
        <div className="hero__carousel-dots">
          {CAROUSEL_BACKGROUNDS.map((_, index) => (
            <button
              key={index}
              className={`hero__carousel-dot ${index === currentBgIndex ? 'active' : ''}`}
              onClick={() => setCurrentBgIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="services-preview">
        <div className="services-preview__head">
          <p className="section-label">ما نقدّمه</p>
          <h2>خدماتنا</h2>
          <p>حلول متكاملة لكل مساحة — من التصميم حتى التسليم</p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ to, img, title, desc, theme }) => (
            <Link
              key={to}
              to={to}
              className={`service-card service-card--full-bg service-card--${theme}`}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="service-card__overlay" />

              <div className="service-card__content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="service-card__link">اكتشف المزيد ←</span>
              </div>
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
          <strong>6</strong>
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