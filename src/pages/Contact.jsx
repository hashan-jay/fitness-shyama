import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { SITE, WHATSAPP_URL } from '../config/site';
import { images } from '../config/images';
import './Contact.css';

function WhatsAppIcon() {
  return (
    <svg className="btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Contact() {
  const { openJoin } = useOutletContext();

  return (
    <div className="contact-page">
      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out and start your Zumba journey today."
        image={images.celebration}
        breadcrumb="Contact Us"
      />

      <section className="section">
        <div className="container contact-page__grid">
          <motion.div
            className="contact-page__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Visit Us"
              title="Find Your Rhythm Here"
              subtitle="Drop by our studio on Hendala Road or message us — we're always happy to welcome new faces."
              align="left"
            />

            <div className="contact-page__cards">
              <div className="contact-page__card">
                <span className="contact-page__card-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>
                    <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {SITE.address}
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-page__card">
                <span className="contact-page__card-icon">📞</span>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p>
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
                  </p>
                </div>
              </div>
              <div className="contact-page__card">
                <span className="contact-page__card-icon">🕐</span>
                <div>
                  <h4>Hours</h4>
                  <p>{SITE.hours}</p>
                </div>
              </div>
              <div className="contact-page__card">
                <span className="contact-page__card-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-page__actions">
              <Button variant="whatsapp" size="lg" href={WHATSAPP_URL}>
                <WhatsAppIcon />
                Chat on WhatsApp
              </Button>
              <Button variant="primary" size="lg" onClick={openJoin}>
                Join Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="contact-page__map-side"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-page__map">
              <iframe
                title="Fitness with Shyama location map"
                src={SITE.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-page__map-image">
              <img src={images.groupFitness} alt="Women enjoying group fitness class" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section--dark contact-page__message">
        <div className="container contact-page__message-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Your First Class Awaits</h2>
            <p>
              Message Shyama on WhatsApp to book a trial class, ask about packages, or simply
              say hello. We can't wait to dance with you!
            </p>
            <Button variant="whatsapp" size="lg" href={WHATSAPP_URL}>
              <WhatsAppIcon />
              Message Shyama
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
