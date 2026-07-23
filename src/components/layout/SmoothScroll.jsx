import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { setLenisInstance } from '../../utils/scroll';

function SmoothScroll({ children }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLenisInstance(null);
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    setLenisInstance(lenis);

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onScroll = ({ progress: p }) => {
      setProgress(Math.max(0, Math.min(1, p || 0)));
    };

    lenis.on('scroll', onScroll);

    const onNativeScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off('scroll', onScroll);
      window.removeEventListener('scroll', onNativeScroll);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}

export default SmoothScroll;
