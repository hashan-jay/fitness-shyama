import { motion } from 'framer-motion';
import './PageHero.css';

function PageHero({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="page-hero">
      <div
        className="page-hero__bg"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="page-hero__overlay" aria-hidden="true" />

      <div className="container page-hero__content">
        {breadcrumb && (
          <motion.span
            className="page-hero__breadcrumb"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {breadcrumb}
          </motion.span>
        )}
        <motion.h1
          className="page-hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="page-hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <motion.div
        className="page-hero__glow"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
    </section>
  );
}

export default PageHero;
