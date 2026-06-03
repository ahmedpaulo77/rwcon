import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="page page--contact">
      <Navbar />
      <PageHero
        label="تواصل معنا"
        title="نحن هنا لمساعدتك"
        description="تواصل معنا لأي استفسار أو لطلب عرض سعر — نرد في أقرب وقت"
      />
      <main className="page-content contact-main">
        <div className="contact-grid">
          <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="contact-card contact-card--highlight">
            <span className="contact-card__icon">📱</span>
            <h3>واتساب</h3>
            <p>059 200 1640</p>
          </a>
          <a href="mailto:Info@rwcon-sa.com" className="contact-card">
            <span className="contact-card__icon">📧</span>
            <h3>البريد الإلكتروني</h3>
            <p>Info@rwcon-sa.com</p>
          </a>
          <div className="contact-card">
            <span className="contact-card__icon">📍</span>
            <h3>الموقع</h3>
            <p>تبوك، المملكة العربية السعودية</p>
          </div>
        </div>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-whatsapp-large">
          <FaWhatsapp /> ابدأ محادثة على واتساب
        </a>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Contact;
