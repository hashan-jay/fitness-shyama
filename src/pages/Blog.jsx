import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import { images } from '../config/images';
import { blogPosts } from '../content/blog';
import './Blog.css';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-LK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function Blog() {
  return (
    <div className="blog-page">
      <PageHero
        title="Blog"
        subtitle="Stories, tips, and studio energy from Fitness with Shyama."
        image={images.celebration}
        breadcrumb="Insights & Stories"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="From the Studio"
            title="Move Better, Feel Better"
            subtitle="Practical inspiration for women who want fitness to feel joyful, sustainable, and full of life."
          />

          <div className="blog-page__list">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                className="blog-page__post"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/blog/${post.slug}`} className="blog-page__post-media">
                  <img src={post.image} alt="" loading="lazy" />
                </Link>

                <div className="blog-page__post-body">
                  <div className="blog-page__post-meta">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="blog-page__post-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="blog-page__post-excerpt">{post.excerpt}</p>

                  <Link to={`/blog/${post.slug}`} className="blog-page__post-link">
                    Read article
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
