import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHero from '../Components/PageHero';
import WhatsAppFab from '../Components/WhatsAppFab';

import gwda from '../images/gwda.jpg';
import eltzam from '../images/eltzam.jpg';
import abtkar from '../images/abtkar.jpg';
import seqa from '../images/seqa.jpg';

import './About.css';

function About() {
  return (
    <div className="page page--about">
      <Navbar />

      <PageHero
        label="من نحن"
        title="شركة روكن للمقاولات"
        description="RWCON شركة متخصصة في تنسيق المساحات الخضراء وتوريد النباتات الطبيعية ،المسابح ،النوافير واللاندسكيب، تأسست بهدف تقديم حلول متكاملة تحول مساحة إلى بيئة حيوية جميلة. على الرغم من أنها شركة حديثة، إلا أن فريق العمل يمتلك خبرة واسعة في مجالات تصميم وتنفيذ المشاريع . نسعى لتطبيق أعلى معايير الاحترافية في كل مرحلة من خلال التعاون الوثيق مع عملائنا لتقديم خدمات تفوق توقعاتهم."
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
            <div className="value-icon">
              <img src={gwda} alt="الجودة" />
            </div>
            <h3>الجودة</h3>
            <p>نلتزم بأعلى معايير الجودة في كل مشروع</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <img src={eltzam} alt="الالتزام" />
            </div>
            <h3>الالتزام</h3>
            <p>نسلم مشاريعنا في الوقت المحدد دائماً</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <img src={abtkar} alt="الابتكار" />
            </div>
            <h3>الابتكار</h3>
            <p>نستخدم أحدث تقنيات التصميم والتنفيذ</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <img src={seqa} alt="الثقة" />
            </div>
            <h3>الثقة</h3>
            <p>نبني علاقات طويلة الأمد مع عملائنا</p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default About;