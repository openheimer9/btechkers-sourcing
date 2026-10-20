import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.js';
import { getWhatsAppLink } from '../utils/helpers.js';

export default function WhatsAppFloat() {
  const { pathname } = useLocation();
  const { whatsapp, whatsappBuyerMessage, whatsappSupplierMessage } =
    SITE_CONFIG.contact;

  // Context-aware prefilled message
  const isCollaboratePage = pathname.startsWith('/collaborate');
  const activeMessage = isCollaboratePage
    ? whatsappSupplierMessage
    : whatsappBuyerMessage;

  const href = getWhatsAppLink(whatsapp, activeMessage);

  return (
    <aside aria-label="Quick WhatsApp Contact" className="whatsapp-float-wrapper">
      <a
        href={href}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          isCollaboratePage
            ? 'Chat with Btechkers Partner Desk on WhatsApp'
            : 'Chat with Btechkers Sourcing Desk on WhatsApp'
        }
        title={
          isCollaboratePage
            ? 'Chat with Partner Desk on WhatsApp'
            : 'Chat with Sourcing Desk on WhatsApp'
        }
      >
        <MessageCircle
          className="whatsapp-float__icon"
          size={22}
          aria-hidden="true"
        />
        <span className="whatsapp-float__label">
          {isCollaboratePage ? 'Partner WhatsApp' : 'Chat with us'}
        </span>
      </a>
    </aside>
  );
}
