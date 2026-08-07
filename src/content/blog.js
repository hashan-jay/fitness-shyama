import { images } from '../config/images';

export const blogPosts = [
  {
    slug: 'why-zumba-feels-like-a-celebration',
    title: 'Why Zumba Feels Like a Celebration',
    excerpt:
      'Discover how rhythm, community, and joyful movement turn every class into something bigger than a workout.',
    date: '2026-07-18',
    category: 'Mindset',
    image: images.zumbaClass,
    readTime: '4 min read',
    content: [
      'At Fitness with Shyama, Zumba is never just a checklist of reps. It is music, connection, and the kind of energy that makes you forget you came to work out.',
      'When women move together, something shifts. Confidence grows, stress softens, and the room becomes a celebration of strength that feels light and free.',
      'That is the heart of our studio in Wattala — dance that builds real fitness, wrapped in joy you can feel from the first song.',
    ],
  },
  {
    slug: 'beginner-guide-to-your-first-class',
    title: 'A Beginner’s Guide to Your First Class',
    excerpt:
      'What to wear, what to expect, and how to walk into the studio feeling confident from day one.',
    date: '2026-06-30',
    category: 'Getting Started',
    image: images.stretch,
    readTime: '5 min read',
    content: [
      'Your first class should feel welcoming, not intimidating. Wear comfortable activewear, supportive shoes, and bring a bottle of water.',
      'Arrive a few minutes early so you can settle in, meet Shyama, and find your spot. You do not need dance experience — just a willingness to move.',
      'Follow at your own pace. Modify when you need to, smile when you can, and leave knowing every beginner starts somewhere.',
    ],
  },
  {
    slug: 'building-consistency-with-dance',
    title: 'Building Consistency with Dance',
    excerpt:
      'Simple habits that help you show up week after week — even when motivation dips.',
    date: '2026-06-12',
    category: 'Wellness',
    image: images.groupFitness,
    readTime: '3 min read',
    content: [
      'Consistency is less about perfect motivation and more about making movement easy to return to. Choose a weekly class time and protect it like an appointment with yourself.',
      'Pair your routine with something enjoyable — a playlist you love, a friend in class, or the afterglow of finishing strong.',
      'Miss a day? Come back to the next one. Progress at Fitness with Shyama is built on showing up, not being perfect.',
    ],
  },
  {
    slug: 'studio-life-in-wattala',
    title: 'Studio Life in Wattala',
    excerpt:
      'A look inside Fitness with Shyama — the energy, the sisterhood, and the space that holds it all.',
    date: '2026-05-22',
    category: 'Studio',
    image: images.studio,
    readTime: '4 min read',
    content: [
      'On Hendala Road in Wattala, our studio is a bright space made for women who want to feel strong and celebrated.',
      'From cool air and clean floors to the music that fills every session, every detail is shaped around comfort and energy.',
      'More than a place to train, it is a sisterhood — a room where members cheer each other on and leave glowing.',
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
