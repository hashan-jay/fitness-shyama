import { Link, useLocation } from 'react-router-dom';
import { SITE, NAV_LINKS, CREDITS } from '../../config/site';
import './Footer.css';

function scrollToTop() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}

function Footer({ onJoinClick }) {
  const year = new Date().getFullYear();
  const location = useLocation();

  const handleSamePageClick = (path) => (event) => {
    if (location.pathname === path) {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" onClick={handleSamePageClick('/')}>
            <span aria-hidden="true">✦</span> {SITE.name}
          </Link>
          <p className="footer__tagline">
            Empowering women through the joy of Zumba — one beat at a time in Wattala.
          </p>
          <button className="footer__join-link" onClick={onJoinClick}>
            Join the movement →
          </button>
        </div>

        <div className="footer__links">
          <h3 className="footer__heading">Explore</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={handleSamePageClick(link.path)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__heading">Visit Us</h3>
          <address>
            <p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                {SITE.address}
              </a>
            </p>
            <p>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
            </p>
            <p>{SITE.hours}</p>
          </address>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {SITE.name}. All rights reserved.</p>
        <p className="footer__credit">{CREDITS.developer}</p>
      </div>
    </footer>
  );
}

export default Footer;
