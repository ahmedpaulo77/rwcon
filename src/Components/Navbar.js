import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.webp';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="RWCON" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>الرئيسية</Link>
        
        <div className="dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
          <span className="nav-link">خدماتنا ▾</span>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/pools">المسابح</Link>
              <Link to="/fountains">النوافير</Link>
              <Link to="/landscape">اللاندسكيب</Link>
              <Link to="/plants">المزروعات والأواني</Link>
              <Link to="/magic">ماجيك</Link>
            </div>
          )}
        </div>

        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>من نحن</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>تواصل معنا</Link>
      </div>
    </nav>
  );
}

export default Navbar;