import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import PackageCard from '../components/cards/PackageCard';
import { SITE } from '../config/site';
import { images } from '../config/images';
import { amenities } from '../content/amenities';
import { packages } from '../content/packages';
import { stats } from '../content/stats';
import { testimonials } from '../content/testimonials';
import { fadeUp, slideLeft, slideRight } from '../utils/motion';
import './Home.css';

function Home() {
  const { openJoin } = useOutletContext();

  return (
    <div className="home">
      <section className="hero">
        <div
          className="hero__bg"
          style={{ backgroundImage: `url(${images.hero})` }}
          aria-hidden="true"
        />
        <div className="hero__overlay" aria-hidden="true" />

        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ y: [0, -24, 0], x: [0, 14, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ y: [0, 18, 0], x: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__orb hero__orb--3"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container hero__content">
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Zumba Fitness · {SITE.location}
          </motion.span>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Move with <span className="gradient-text animate-gradient">Passion</span>,<br />
            Shine with <span className="gradient-text animate-gradient">Power</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            {SITE.name} is a women-focused Zumba studio where every class feels like a
            celebration. Dance your way to confidence, strength, and joy.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="primary" size="lg" onClick={openJoin}>
                Join Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="lg" href="/packages">
                View Packages
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </motion.div>
      </section>

      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats-bar__item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
            >
              <span className="stats-bar__value">{stat.value}</span>
              <span className="stats-bar__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <motion.div className="about-preview__image-wrap" {...slideLeft}>
            <motion.img
              src={images.zumbaClass}
              alt="Women dancing in a Zumba class"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="about-preview__badge"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span>Since</span>
              <strong>2023</strong>
            </motion.div>
          </motion.div>

          <motion.div className="about-preview__content" {...slideRight}>
            <SectionHeading
              eyebrow="Why Zumba?"
              title="Where Fitness Meets Feminine Freedom"
              subtitle="Zumba isn't just a workout — it's a movement. At Fitness with Shyama, we blend Latin rhythms, global beats, and empowering energy into every session."
              align="left"
            />
            <p className="about-preview__text">
              Whether you're stepping into a studio for the first time or you're a seasoned
              dancer, our classes are designed to make you feel strong, beautiful, and unstoppable.
            </p>
            <Link to="/about" className="about-preview__link">
              Meet Shyama →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="Our Space"
            title="Studio Amenities"
            subtitle="Everything you need for a seamless, empowering workout experience."
          />

          <div className="amenities-grid">
            {amenities.slice(0, 3).map((item, i) => (
              <motion.article
                key={item.title}
                className="amenity-card"
                initial={{ opacity: 0, y: 36, rotateY: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="amenity-card__image">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="amenity-card__image-overlay" />
                  <span className="amenity-card__icon">{item.icon}</span>
                </div>
                <div className="amenity-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/amenities">
              <Button variant="dark">Explore All Amenities</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Membership"
            title="Choose Your Rhythm"
            subtitle="Flexible packages designed for every stage of your fitness journey."
            light
          />

          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.name} pkg={pkg} index={i} variant="dark" featureLimit={3} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/packages">
              <Button variant="outline">See Full Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Love Notes"
            title="What Our Queens Say"
            subtitle="Real stories from real women who found their rhythm with us."
          />

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(192, 38, 211, 0.18)' }}
              >
                <span className="testimonial-card__quote" aria-hidden="true">"</span>
                <p>{t.quote}</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div
          className="cta-banner__bg"
          style={{ backgroundImage: `url(${images.groupFitness})` }}
          aria-hidden="true"
        />
        <div className="cta-banner__overlay" aria-hidden="true" />
        <div className="container cta-banner__content">
          <motion.div
            {...fadeUp}
            whileInView={{ scale: [0.98, 1] }}
            viewport={{ once: true }}
          >
            <h2>Your First Step Starts Today</h2>
            <p>Join hundreds of women who dance, sweat, and shine at {SITE.location}.</p>
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              <Button variant="primary" size="lg" onClick={openJoin}>
                Join Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
