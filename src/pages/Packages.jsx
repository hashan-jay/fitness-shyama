import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import PackageCard from '../components/cards/PackageCard';
import { images } from '../config/images';
import { packages } from '../content/packages';
import { fadeUp } from '../utils/motion';
import './Packages.css';

const faqItems = [
  {
    q: 'Do I need dance experience?',
    a: 'Not at all! Our classes welcome all levels. Shyama breaks down moves so everyone can follow along and have fun.',
  },
  {
    q: 'What should I wear?',
    a: 'Comfortable workout clothes and supportive sneakers. Bring a water bottle and your best energy!',
  },
  {
    q: 'Can I try before committing?',
    a: 'Yes! Contact us on WhatsApp to book a trial class and experience the vibe firsthand.',
  },
  {
    q: 'How do I know the prices?',
    a: 'WhatsApp with Shyama to get more information about each package and their prices.',
  },
];

function Packages() {
  return (
    <div className="packages-page">
      <PageHero
        title="Membership Packages"
        subtitle="Find the perfect plan to match your rhythm, schedule, and goals."
        image={images.danceEnergy}
        breadcrumb="Packages"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Invest in You"
            title="Packages That Move With You"
            subtitle="No hidden fees. No pressure. Just pure dance fitness tailored for women who want results and joy."
          />

          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.name} pkg={pkg} index={i} variant="light" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark packages-page__faq">
        <div className="container">
          <SectionHeading
            eyebrow="Questions?"
            title="Good to Know"
            subtitle="Everything you need before your first class."
            light
          />

          <div className="packages-page__faq-grid">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.q}
                className="packages-page__faq-item"
                initial={{ opacity: 0, y: 24, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: 'rgba(232, 121, 249, 0.35)' }}
              >
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft packages-page__cta">
        <div className="container">
          <motion.div className="packages-page__cta-box" {...fadeUp}>
            <h2>Ready to Pick Your Package?</h2>
            <p>WhatsApp with Shyama to get more information about the package and their prices.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
