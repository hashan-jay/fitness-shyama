import { Link } from 'react-router-dom';
import { SITE, NAV_LINKS, CREDITS } from '../../config/site';
import './Footer.css';

function Footer({ onJoinClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span aria-hidden="true">✦</span> {SITE.name}
          </Link>
          <p className="footer__tagline">
            Empowering women through the joy of Zumba — one beat at a time in {SITE.location}.
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
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3 className="footer__heading">Visit Us</h3>
          <address>
            <p>{SITE.address}</p>
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
