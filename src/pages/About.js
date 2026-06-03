import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';
import './About.css';

function About() {
  return (
    <div className="page page--about">
      <Navbar />
      <PageHero
        label="من نحن"
        title="شركة روكن للمقاولات"
        description="متخصصون في تنسيق المساحات الخضراء وتقديم حلول نباتية متكاملة تحول كل مساحة إلى بيئة حيوية جميلة"
      />
      <main className="page-content about-main">
        <div className="stats-grid">
          <div className="stat-card">
            <h2>+50</h2>
            <p>مشروع ناجح</p>
          </div>
          <div className="stat-card">
            <h2>+50</h2>
            <p>عميل راضٍ</p>
          </div>
          <div className="stat-card">
            <h2>5</h2>
            <p>مجالات خدمة</p>
          </div>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">🏆</span>
            <h3>الجودة</h3>
            <p>نلتزم بأعلى معايير الجودة في كل مشروع</p>
          </div>
          <div className="value-card">
            <span className="value-icon">⏰</span>
            <h3>الالتزام</h3>
            <p>نسلم مشاريعنا في الوقت المحدد دائماً</p>
          </div>
          <div className="value-card">
            <span className="value-icon">💡</span>
            <h3>الابتكار</h3>
            <p>نستخدم أحدث تقنيات التصميم والتنفيذ</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>الثقة</h3>
            <p>علاقات طويلة الأمد مع عملائنا</p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default About;
