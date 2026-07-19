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
        {/* شبكة كروت التواصل */}
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
          
          {/* تحويل كارد الموقع لرابط يفتح اللوكيشن مباشرة */}
          <a 
            href="https://maps.app.goo.gl/VezW8a4E3dkQhJiw7?g_st=iw" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-card contact-card--location"
          >
            <span className="contact-card__icon">📍</span>
            <h3>الموقع</h3>
            <p>تبوك، المملكة العربية السعودية</p>
            <span className="contact-card__hint">اضغط لفتح الخريطة ←</span>
          </a>
        </div>

        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-whatsapp-large">
          <FaWhatsapp /> ابدأ محادثة على واتساب
        </a>

        {/* قسم الخريطة التفاعلية المدمجة */}
        <div className="contact-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57053.47648360661!2d36.5298889!3d28.3835017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7af6116c4abdb%3A0xadbe418a0997ee!2z2KrYqNmI2YMg2KfZhNmF2YXZhNmD2Kkg2KfZhNi52LHYqNmK2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2ssa!4v1716000000000!5m2!1sar!2ssa"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع الشركة على خرائط جوجل"
          ></iframe>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default Contact;