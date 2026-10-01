import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function NewsCard({ article, onReadMore }) {
  return (
    <motion.article 
      className="news-card"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Visual Thumbnail / Neutral Themed Placeholder */}
      <div className="news-card-thumbnail">
        <div className="news-thumbnail-pattern">
          <div className="thumbnail-icon-circle">
            <FileText size={28} />
          </div>
          <span className="thumbnail-category-pill">{article.category}</span>
        </div>
        
        {/* Sample Demonstration Content Indicator */}
        <div className="news-sample-tag" title="Demonstration content for UI review">
          <span>SAMPLE</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="news-card-body">
        
        {/* Date & Read Time */}
        <div className="news-card-meta">
          <span className="news-meta-item">
            <Calendar size={13} aria-hidden="true" />
            <time dateTime={article.date}>{article.formattedDate}</time>
          </span>
          <span className="meta-separator">•</span>
          <span className="news-meta-item">
            <Clock size={13} aria-hidden="true" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Telugu Subhead */}
        {article.teluguTitle && (
          <span className="news-card-telugu-title">{article.teluguTitle}</span>
        )}

        {/* Article Title */}
        <h3 className="news-card-title">
          <button 
            type="button" 
            className="news-title-btn"
            onClick={() => onReadMore(article)}
          >
            {article.title}
          </button>
        </h3>

        {/* Excerpt */}
        <p className="news-card-excerpt">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="news-card-tags">
          {article.tags.map((tag) => (
            <span key={tag} className="news-pill-tag">
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Link / Button */}
        <div className="news-card-footer">
          <button
            type="button"
            className="news-readmore-btn"
            onClick={() => onReadMore(article)}
            aria-label={`Read more about ${article.title}`}
          >
            <span>Read Full Announcement</span>
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>

      </div>
    </motion.article>
  );
}
