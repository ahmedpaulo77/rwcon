import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WhatsAppFab from '../Components/WhatsAppFab';

import poolsImg      from '../images/m.jpg';
import fountainsImg  from '../images/85.jpg';
import landscapeImg  from '../images/111.jpg';
import plantsImg     from '../images/150.jpg';
import magicImg      from '../images/img13.jpeg';
import contractingImg from '../images/c4.jpeg';

// صور الـ back side للـ flip cards
import poolsBack      from '../images/76.jpg';
import fountainsBack  from '../images/84.jpg';
import landscapeBack  from '../images/72.jpg';
import contractingBack from '../images/a1.jpeg';
import plantsBack     from '../images/101.jpg';
import magicBack      from '../images/img14.jpeg';

import bgHero1 from '../images/W.jpg';
import bgHero2 from '../images/84.jpg';
import bgHero3 from '../images/80.jpg';
import bgHero4 from '../images/zzz.jpeg';
import bgHero5 from '../images/hero.jpg';

import './Home.css';

const CAROUSEL_BACKGROUNDS = [bgHero1, bgHero2, bgHero3, bgHero4, bgHero5];

/* جملة مختلفة لكل صورة في الكروسيل */
const HERO_SLIDES = [
  {
    bg: bgHero1,
    tag: 'مسابح على أعلى مستوى',
    line: 'من الفكرة للتنفيذ — نبني مسابحك بأرقى المواد وأحدث الأنظمة الكهروميكانيكية',
  },
  {
    bg: bgHero2,
    tag: 'نوافير تسحر الأنظار',
    line: 'المياه فن في أيدينا — نوافير وأعمال مائية تُحوّل أي مكان إلى لوحة حية',
  },
  {
    bg: bgHero3,
    tag: '   لاندسكيب (منظر طبيعي) رائع ومميز',
    line: 'نُعيد تشكيل الطبيعة — حدائق ومساحات خضراء تعكس ذوقك وتُبهج كل من يراها',
  },
  {
    bg: bgHero4,
    tag: 'مقاولات بكل ثقة',
    line: 'حلول إنشائية متكاملة — من الهيكل حتى التشطيب النهائي بجودة لا تقبل المساومة',
  },
  {
    bg: bgHero5,
    tag: 'مزروعات وأواني فاخرة',
    line: 'الخضرة في كل زاوية — نباتات طبيعية منتقاة وأواني عصرية تُضفي الحياة على مساحتك',
  },
];

const SERVICES = [
  { to: '/pools',       img: poolsImg,       backImg: poolsBack,       backTitle: 'مسبح هوليداي إن تبوك',         title: 'المسابح',           desc: 'تصميم وتنفيذ حمامات السباحة باحترافية عالية',                 theme: 'pools',       count: 7,  countMax: 10, countLabel: 'مشروع' },
  { to: '/fountains',   img: fountainsImg,   backImg: fountainsBack,   backTitle: 'نافورة فندق هوليداي إن',        title: 'النوافير',           desc: 'نوافير وأعمال مائية فريدة ومبتكرة',                          theme: 'fountains',   count: 2,  countMax: 10, countLabel: 'مشروع' },
  { to: '/landscape',   img: landscapeImg,   backImg: landscapeBack,   backTitle: 'لاندسكيب مشروع NHC',            title: 'اللاندسكيب',         desc: 'تنسيق المساحات الخضراء والحدائق',                            theme: 'landscape',   count: 7,  countMax: 10, countLabel: 'مشروع' },
  { to: '/contracting', img: contractingImg, backImg: contractingBack, backTitle: 'تشطيب ساحة فندق هوليداي إن',   title: 'المقاولات العامة',   desc: 'أعمال التشييد، الهياكل الإنشائية، وتطوير البنية التحتية',    theme: 'contracting', count: 6,  countMax: 10, countLabel: 'مشروع' },
  { to: '/plants',      img: plantsImg,      backImg: plantsBack,      backTitle: 'توريد نباتات فندق هوليداي إن', title: 'المزروعات والأواني', desc: 'نباتات طبيعية وأواني عصرية بأسعار مناسبة',                   theme: 'plants',      count: 53, countMax: 60, countLabel: 'منتج'  },
  { to: '/magic',       img: magicImg,       backImg: magicBack,       backTitle: 'أصيص دوار مغناطيسي',           title: 'ماجيك',              desc: 'نباتات عائمة مغناطيسية ديكور فريد',                          theme: 'magic',       count: 3,  countMax: 10, countLabel: 'منتج'  },
];

/* ─── Hook: عداد متحرك ─── */
function useCountUp(target, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return val;
}

/* ─── Hook: Intersection Observer ─── */
function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Count Badge — رقم + bar ─── */
function ArcBadge({ count, countMax, countLabel, active }) {
  const displayCount = useCountUp(count, 1500, active);
  const pct = active ? Math.round((displayCount / countMax) * 100) : 0;

  return (
    <div className="sc__badge">
      <span className="sc__badge-num">{displayCount}</span>
      <span className="sc__badge-lbl">{countLabel}</span>
      <div className="sc__badge-bar">
        <div className="sc__badge-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ─── كارت الخدمة (Flip) ─── */
function ServiceCard({ to, img, backImg, backTitle, title, desc, theme, count, countMax, countLabel, delay = 0 }) {
  const [cardRef, inView] = useInView(0.2);
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`sc-wrap sc--${theme} ${inView ? 'sc--visible' : ''}`}
      style={{ '--delay': `${delay}ms` }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`sc-inner ${flipped ? 'sc-inner--flipped' : ''}`}>

        {/* ── FRONT — كاملة Link ── */}
        <Link to={to} className="sc-face sc-face--front">
          <div className="sc__zoom" style={{ backgroundImage: `url(${img})` }} />
          <div className="sc__overlay" />
          <ArcBadge count={count} countMax={countMax} countLabel={countLabel} active={inView} />
          <div className="sc__body">
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="sc__cta">اكتشف المزيد <span className="sc__arrow">←</span></span>
          </div>
        </Link>

        {/* ── BACK ── */}
        <div className="sc-face sc-face--back">
          <div className="sc__zoom" style={{ backgroundImage: `url(${backImg})` }} />
          <div className="sc__overlay sc__overlay--dark" />
          <div className="sc__back-body">
            <span className="sc__back-tag">من أعمالنا</span>
            <h3>{backTitle}</h3>
            <Link to={to} className="sc__back-btn">شاهد المشروع ←</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Trust Item مع counter ─── */
function TrustItem({ value, suffix = '', label, sub, isNumber = false }) {
  const [ref, inView] = useInView(0.35);
  const num = useCountUp(isNumber ? parseInt(value) : 0, 1800, isNumber && inView);
  return (
    <div ref={ref} className={`home-trust__item ${inView ? 'trust--visible' : ''}`}>
      <strong className="home-trust__num">
        {isNumber ? `${num}${suffix}` : value}
      </strong>
      <span className="home-trust__line" />
      <span className="home-trust__label">{label}</span>
      {sub && <span className="home-trust__sub">{sub}</span>}
    </div>
  );
}

/* ─── الصفحة الرئيسية ─── */
function Home() {
  const [bgIdx, setBgIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [animKey, setAnimKey] = useState(0); // يتغير عشان يعيد الأنيميشن

  useEffect(() => {
    const id = setInterval(() => {
      setBgIdx(i => {
        setPrevIdx(i);
        setAnimKey(k => k + 1);
        return (i + 1) % HERO_SLIDES.length;
      });
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = HERO_SLIDES[bgIdx];

  return (
    <div className="page page--home">
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="hero">
        <div className="hero__carousel-container">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`hero__bg-slide ${i === bgIdx ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
          ))}
        </div>
        <div className="hero__overlay" aria-hidden />

        <div className="hero__content">

          {/* pill متحرك — يتغير مع كل صورة */}
          <div className="hero__pill-wrap" key={`pill-${animKey}`}>
            <span className="hero-pill hero-pill--anim">{current.tag}</span>
          </div>

          {/* العنوان الرئيسي — ثابت، يدخل مرة واحدة */}
          <h1 className="hero__title">
            نحول مساحتك إلى
            <span className="highlight"> تحفة طبيعية</span>
          </h1>

          {/* الجملة الوصفية — تتبدل مع كل صورة */}
          <div className="hero__tagline-wrap" key={`tag-${animKey}`}>
            <p className="hero__tagline hero__tagline--anim">
              {current.line}
            </p>
          </div>

          {/* الأزرار — ثابتة */}
          <div className="hero__actions hero__actions--anim">
            <a
              href="https://wa.me/966592001640"
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-hero"
            >
              تواصل على واتساب
            </a>
            <Link to="/about" className="btn-secondary">تعرّف علينا</Link>
          </div>

          {/* dots navigation */}
          <div className="hero__dots" aria-hidden>
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === bgIdx ? 'hero__dot--active' : ''}`}
                onClick={() => { setPrevIdx(bgIdx); setBgIdx(i); setAnimKey(k => k + 1); }}
              />
            ))}
          </div>
        </div>

        {/* scroll indicator */}
        <div className="hero__scroll-hint" aria-hidden>
          <span />
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="services-preview">
        <div className="services-preview__head">
          <p className="section-label">ما نقدّمه</p>
          <h2>خدماتنا</h2>
          <p>حلول متكاملة لكل مساحة — من التصميم حتى التسليم</p>
        </div>

        {/* layout: كبير + 2 صغار، يتناوب */}
        <div className="services-bento">
          <ServiceCard {...SERVICES[0]} delay={0}   />
          <ServiceCard {...SERVICES[1]} delay={100} />
          <ServiceCard {...SERVICES[2]} delay={200} />
          {/* صف 2: 2 يسار + كبير يمين */}
          <ServiceCard {...SERVICES[3]} delay={0}   />
          <ServiceCard {...SERVICES[4]} delay={100} />
          <ServiceCard {...SERVICES[5]} delay={200} />
        </div>
      </section>

      {/* ══════════ TRUST BAR ══════════ */}
      <section className="home-trust">
        <div className="home-trust__section-label">
          <span>أرقامنا تتحدث عنّا</span>
        </div>
        <div className="home-trust__inner">
          <TrustItem value="50" suffix="+"  label="مشروع منفّذ"        sub="في مختلف أنحاء المملكة"    isNumber />
          <TrustItem value="6"  suffix=""   label="مجالات خدمة"         sub="تشمل كل احتياجاتك"          isNumber />
          <TrustItem value="تبوك" suffix="" label="مقرّنا الرئيسي"      sub="ونخدم كامل المملكة"          isNumber={false} />
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Home;
