import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL, SITE } from '../config/site';
import { joinInfo } from '../content/join-info';
import { images } from '../config/images';
import Button from './ui/Button';
import './JoinNowModal.css';

function WhatsAppIcon() {
  return (
    <svg className="btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function JoinNowModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="join-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-modal-title"
        >
          <motion.div
            className="join-modal__backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="join-modal__panel"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="join-modal__close" onClick={onClose} aria-label="Close">
              ✕
            </button>

            <div className="join-modal__image">
              <img src={images.danceEnergy} alt="Women enjoying a Zumba fitness class" />
              <div className="join-modal__image-overlay" />
            </div>

            <div className="join-modal__body">
              <span className="join-modal__eyebrow">{joinInfo.subtitle}</span>
              <h2 id="join-modal-title" className="join-modal__title">
                {joinInfo.title}
              </h2>

              <p className="join-modal__intro">
                Welcome to <strong>{SITE.name}</strong> — your home for Zumba fitness in{' '}
                <strong>{SITE.location}</strong>. We create a space where women feel empowered,
                celebrated, and free to move to the rhythm.
              </p>

              <ul className="join-modal__list">
                {joinInfo.points.map((point) => (
                  <li key={point}>
                    <span className="join-modal__check" aria-hidden="true">✦</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="join-modal__actions">
                <Button variant="whatsapp" size="lg" href={WHATSAPP_URL}>
                  <WhatsAppIcon />
                  Join Now on WhatsApp
                </Button>
                <p className="join-modal__note">
                  Chat directly with Shyama · {SITE.phone}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default JoinNowModal;
