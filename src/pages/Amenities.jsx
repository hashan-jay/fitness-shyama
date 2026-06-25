import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { images } from '../config/images';
import { amenities } from '../content/amenities';
import './Amenities.css';

function Amenities() {
  return (
    <div className="amenities-page">
      <PageHero
        title="Studio Amenities"
        subtitle="A thoughtfully designed space where every detail supports your Zumba journey."
        image={images.studio}
        breadcrumb="What We Offer"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Your Comfort Matters"
            title="Everything You Need, Nothing You Don't"
            subtitle="From the moment you walk in to the moment you leave glowing — we've got you covered."
          />

          <div className="amenities-page__grid">
            {amenities.map((item, i) => (
              <motion.article
                key={item.title}
                className="amenities-page__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="amenities-page__card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="amenities-page__card-overlay">
                    <span className="amenities-page__card-icon">{item.icon}</span>
                  </div>
                </div>
                <div className="amenities-page__card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft amenities-page__highlight">
        <div className="container amenities-page__highlight-inner">
          <motion.div
            className="amenities-page__highlight-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="The Experience"
              title="More Than a Gym"
              subtitle="Fitness with Shyama is a sanctuary for women — a place to disconnect from stress and reconnect with your body through dance."
              align="left"
            />
            <ul className="amenities-page__highlight-list">
              <li>Women-only friendly environment</li>
              <li>Curated playlists every session</li>
              <li>Post-class stretch & cool-down zone</li>
              <li>Community events & dance parties</li>
            </ul>
          </motion.div>

          <motion.div
            className="amenities-page__highlight-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={images.wellness} alt="Woman stretching after a fitness class" loading="lazy" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Amenities;
