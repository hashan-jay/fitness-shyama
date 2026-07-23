import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../../utils/scroll';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay lets Lenis mount before route jumps
    const id = requestAnimationFrame(() => {
      scrollToTop({ immediate: false });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
