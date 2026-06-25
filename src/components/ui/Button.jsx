import { Link } from 'react-router-dom';
import './Button.css';

function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'lg' ? 'btn--lg' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');

    if (!isExternal) {
      return (
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
