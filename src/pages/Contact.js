import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Contact.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="contact-section">
        <p className="section-label">تواصل معنا</p>
        <h1>نحن هنا لمساعدتك</h1>
        <p className="contact-desc">تواصل معنا لأي استفسار أو طلب عرض سعر</p>
        <div className="contact-grid">
          <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="contact-card">
            <span>📱</span>
            <h3>واتساب</h3>
            <p>059 200 1640</p>
          </a>
          <a href="mailto:Info@rwcon-sa.com" className="contact-card">
            <span>📧</span>
            <h3>البريد الإلكتروني</h3>
            <p>Info@rwcon-sa.com</p>
          </a>
          <div className="contact-card">
            <span>📍</span>
            <h3>الموقع</h3>
            <p>تبوك، المملكة العربية السعودية</p>
          </div>
        </div>
        <a href="https://wa.me/966592001640" target="_blank" rel="noreferrer" className="btn-whatsapp">
          ابدأ محادثة على واتساب 💬
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;