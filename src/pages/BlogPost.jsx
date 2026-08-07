import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { getBlogPost } from '../content/blog';
import './Blog.css';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-LK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-page blog-page--post">
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
        breadcrumb={post.category}
      />

      <section className="section">
        <div className="container blog-page__article">
          <motion.div
            className="blog-page__article-meta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </motion.div>

          <motion.div
            className="blog-page__article-body"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <Link to="/blog" className="blog-page__back">
            Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
