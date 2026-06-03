import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFab.css';

const WHATSAPP_URL = 'https://wa.me/966592001640';

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل عبر واتساب"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFab;
