import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../images/logo.webp';
import './Navbar.css';

const SERVICE_LINKS = [
  { to: '/pools', label: 'المسابح' },
  { to: '/fountains', label: 'النوافير' },
  { to: '/landscape', label: 'اللاندسكيب' },
  { to: '/plants', label: 'المزروعات والأواني' },
  { to: '/magic', label: 'ماجيك' },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="RWCON" className="nav-logo" />
        </Link>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              الرئيسية
            </Link>

            <div className="nav-dropdown">
              <button
                type="button"
                className={`nav-dropdown-btn ${servicesOpen ? 'open' : ''}`}
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
              >
                خدماتنا
                <span className="nav-chevron" aria-hidden>▾</span>
              </button>
              <div className={`nav-dropdown-menu ${servicesOpen ? 'open' : ''}`}>
                {SERVICE_LINKS.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={isActive(to) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link
              to="/contact"
              className={`nav-cta ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        {menuOpen && (
          <button
            type="button"
            className="nav-overlay"
            aria-label="إغلاق القائمة"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

export default Navbar;
