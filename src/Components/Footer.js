import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../images/logo.webp';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const SERVICE_LINKS = [
  { to: '/pools', label: 'المسابح' },
  { to: '/fountains', label: 'النوافير' },
  { to: '/landscape', label: 'اللاندسكيب' },
  { to: '/plants', label: 'المزروعات والأواني' },
  { to: '/magic', label: 'ماجيك' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="RWCON" />
            <h3>شركة روكن للمقاولات</h3>
            <p>حلول متكاملة للمساحات الخضراء، المسابح، النوافير واللاندسكيب في المملكة العربية السعودية.</p>
          </div>

          <div className="footer-col">
            <h4>خدماتنا</h4>
            <nav className="footer-nav">
              {SERVICE_LINKS.map(({ to, label }) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <nav className="footer-nav">
              <Link to="/">الرئيسية</Link>
              <Link to="/about">من نحن</Link>
              <Link to="/contact">تواصل معنا</Link>
            </nav>
          </div>

          <div className="footer-col footer-contact-col">
            <h4>تواصل معنا</h4>
            <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="footer-contact-item">
              <FaPhoneAlt /> 059 200 1640
            </a>
            <a href="mailto:Info@rwcon-sa.com" className="footer-contact-item">
              <FaEnvelope /> Info@rwcon-sa.com
            </a>
            <p className="footer-contact-item">
              <FaMapMarkerAlt /> تبوك، المملكة العربية السعودية
            </p>

            <div className="footer-social">
              <a className="social-btn whatsapp" href="https://wa.me/966592001640" target="_blank" rel="noreferrer" aria-label="واتساب">
                <FaWhatsapp />
              </a>
              <a className="social-btn instagram" href="https://www.instagram.com/rwco.n" target="_blank" rel="noreferrer" aria-label="انستغرام">
                <FaInstagram />
              </a>
              <a className="social-btn facebook" href="https://web.facebook.com/people/Rwcon/61550473194410" target="_blank" rel="noreferrer" aria-label="فيسبوك">
                <FaFacebook />
              </a>
              <a className="social-btn tiktok" href="https://www.tiktok.com/@rwcon4" target="_blank" rel="noreferrer" aria-label="تيك توك">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RWCON — شركة روكن للمقاولات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

export default Footer;
