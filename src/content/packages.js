import { images } from '../config/images';

export const packages = [
  {
    name: 'Glow Starter',
    tagline: 'Perfect for beginners',
    image: images.packageGlow,
    features: [
      '8 Zumba sessions per month',
      'Beginner-friendly routines',
      'Access to changing rooms',
      'Welcome orientation session',
    ],
    featured: false,
  },
  {
    name: 'Power Queen',
    tagline: 'Most loved by our members',
    image: images.packagePower,
    features: [
      'Unlimited Zumba classes',
      'Priority class booking',
      'Monthly body-progress check-in',
      'Exclusive member events',
      'Free fitness assessment',
    ],
    featured: true,
  },
  {
    name: 'Elite Rhythm',
    tagline: 'For the dedicated dancer',
    image: images.packageElite,
    features: [
      'Unlimited Zumba + specialty classes',
      'Personalized workout plan',
      '1-on-1 session with Shyama monthly',
      'Nutrition guidance basics',
      'VIP lounge access',
    ],
    featured: false,
  },
];
