import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { SITE } from '../config/site';
import { images } from '../config/images';
import { stats } from '../content/stats';
import './About.css';

function About() {
  const { openJoin } = useOutletContext();

  return (
    <div className="about-page">
      <PageHero
        title="About Shyama"
        subtitle="The heart, soul, and rhythm behind Fitness with Shyama."
        image={images.abouthero}
        breadcrumb="Our Story"
      />

      <section className="section">
        <div className="container about-page__story">
          <motion.div
            className="about-page__story-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={images.zumbaClass} alt="Shyama leading a Zumba class" loading="lazy" />
            <div className="about-page__story-accent" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="about-page__story-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="Our Mission"
              title="Empowering Women Through Dance"
              subtitle="Fitness with Shyama was born from a simple belief: fitness should feel like freedom, not punishment."
              align="left"
            />
            <p>
              Located in the heart of <strong>Nayakakanda, Wattala</strong>, our studio has become a
              sanctuary for women who want to move, sweat, and celebrate their bodies. Shyama,
              our founder and lead instructor, brings years of certified Zumba experience and an
              infectious energy that transforms every class into a party.
            </p>
            <p>
              What started as a small group of friends dancing in a community hall has grown into
              a vibrant fitness family of over 100 members — all united by the love of music,
              movement, and mutual support.
            </p>
            <p>
              Here, you're not just a member — you're part of a sisterhood that lifts each other
              up, one beat at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section--dark about-page__values">
        <div className="container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="The principles that guide every class, every interaction, every beat."
            light
          />

          <div className="about-page__values-grid">
            {[
              {
                icon: '💜',
                title: 'Empowerment',
                text: 'We believe every woman deserves to feel strong, confident, and beautiful in her own skin.',
              },
              {
                icon: '🎵',
                title: 'Joy in Movement',
                text: 'Fitness through dance — because the best workout is the one you actually enjoy.',
              },
              {
                icon: '🤝',
                title: 'Community',
                text: 'A supportive sisterhood where everyone belongs, regardless of age, size, or experience.',
              },
              {
                icon: '✨',
                title: 'Authenticity',
                text: 'No judgment, no comparison — just you, the music, and your unique rhythm.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="about-page__value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="about-page__value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-page__stats">
          <div className="about-page__stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about-page__stat"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <span className="about-page__stat-value">{stat.value}</span>
                <span className="about-page__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft about-page__cta">
        <div className="container about-page__cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Dance With Us?</h2>
            <p>Take the first step toward a fitter, happier, more confident you.</p>
            <Button variant="primary" size="lg" onClick={openJoin}>
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
