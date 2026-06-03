import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './About.css';

function About() {
  return (
    <div>
      <Navbar />
      <section className="about-section">
        <p className="section-label">من نحن</p>
        <h1>شركة روكن للمقاولات</h1>
        <p className="about-desc">
          شركة متخصصة في تنسيق المساحات الخضراء وتوريد النباتات الطبيعية،
          تأسست بهدف تقديم حلول نباتية متكاملة تحول كل مساحة إلى بيئة حيوية جميلة.
        </p>
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
            <h2>45%</h2>
            <p>نمو في الإيرادات</p>
          </div>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <h3>🏆 الجودة</h3>
            <p>نلتزم بأعلى معايير الجودة في كل مشروع</p>
          </div>
          <div className="value-card">
            <h3>⏰ الالتزام</h3>
            <p>نسلم مشاريعنا في الوقت المحدد دائماً</p>
          </div>
          <div className="value-card">
            <h3>💡 الابتكار</h3>
            <p>نستخدم أحدث تقنيات التصميم</p>
          </div>
          <div className="value-card">
            <h3>🤝 الثقة</h3>
            <p>علاقات طويلة الأمد مع عملائنا</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;