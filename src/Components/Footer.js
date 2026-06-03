import './Footer.css';
import logo from '../images/logo.webp';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="RWCON" />
          <p>شركة روكن للمقاولات</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>خدماتنا</h3>
          <a href="/pools">المسابح</a>
          <a href="/fountains">النوافير</a>
          <a href="/landscape">اللاندسكيب</a>
          <a href="/plants">المزروعات والأواني</a>
          <a href="/magic">ماجيك (أبجورات وإضاءة)  </a>
          
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>تواصل معنا</h3>
          <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer">
            📱 059 200 1640
          </a>
          <a href="mailto:Info@rwcon-sa.com">📧 Info@rwcon-sa.com</a>
          <p>📍 تبوك، المملكة العربية السعودية</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>تابعنا</h3>

          <div className="social-icons">

            <a className="social-icon whatsapp" href="https://wa.me/966592001640" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

            <a className="social-icon instagram" href="https://www.instagram.com/rwco.n" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a className="social-icon facebook" href="https://web.facebook.com/people/Rwcon/61550473194410" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            <a className="social-icon tiktok" href="https://www.tiktok.com/@rwcon4" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RWCON. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;