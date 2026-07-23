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

        <div className="container hero__content">
          <motion.p
            className="hero__brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {SITE.name}
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Move with Passion,<br />
            Shine with Power
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            A women-focused Zumba studio in Wattala where every class feels like a
            celebration — dance your way to confidence, strength, and joy.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <Button variant="primary" size="lg" onClick={openJoin}>
              Join Now
            </Button>
            <Button variant="outline" size="lg" href="/packages">
              View Packages
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          animate={{ y: [0, 8, 0], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity }}
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
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
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
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
              Meet Shyama
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
              >
                <div className="amenity-card__image">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.55 }}
                  />
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
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
          <motion.div {...fadeUp}>
            <h2>Your First Step Starts Today</h2>
            <p>Join hundreds of women who dance, sweat, and shine at {SITE.location}.</p>
            <Button variant="primary" size="lg" onClick={openJoin}>
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
