import { motion } from 'framer-motion';
import './SectionHeading.css';

function SectionHeading({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      <div className="section-heading__line" aria-hidden="true" />
    </motion.div>
  );
}

export default SectionHeading;
