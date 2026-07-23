let lenisInstance = null;

export function setLenisInstance(instance) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToTop({ immediate = false } = {}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lenis = getLenis();

  if (lenis && !prefersReducedMotion && !immediate) {
    lenis.scrollTo(0, { immediate: false });
    return;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: prefersReducedMotion || immediate ? 'auto' : 'smooth',
  });
}
