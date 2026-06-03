import './PageHero.css';

function PageHero({ label = 'خدماتنا', title, description }) {
  return (
    <header className="page-hero">
      <div className="page-hero__inner">
        <p className="page-hero__label">{label}</p>
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </header>
  );
}

export default PageHero;
