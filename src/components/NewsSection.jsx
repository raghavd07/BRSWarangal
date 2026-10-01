import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, ArrowRight, X, Calendar, Clock, Share2, Check } from 'lucide-react';
import { newsArticles } from '../data/news';
import NewsCard from './NewsCard';
import './NewsSection.css';

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showAllAlert, setShowAllAlert] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-wrapper bg-white" id="news" aria-label="Latest News & Announcements">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <Newspaper size={14} aria-hidden="true" />
            Media & Circulars
          </span>
          <h2 className="section-title">Latest News & Announcements</h2>
          <p className="section-subtitle-telugu">తాజా వార్తలు మరియు నియోజకవర్గ సమాచారం</p>
          <p className="section-description">
            Official press communications, municipal infrastructure reviews, and citizen welfare advisories from BRS Warangal West (వరంగల్ పశ్చిమ నియోజకవర్గం).
          </p>
          <div className="section-divider" />
        </div>

        {/* 3-Column Responsive Grid */}
        <motion.div 
          className="news-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {newsArticles.map((article) => (
            <NewsCard 
              key={article.id} 
              article={article} 
              onReadMore={(item) => setSelectedArticle(item)}
            />
          ))}
        </motion.div>

        {/* View All News Button & Prototype Notice */}
        <div className="news-footer-action">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowAllAlert(true)}
          >
            <span>View All News & Press Releases</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Prototype Modal for "View All News" click */}
        <AnimatePresence>
          {showAllAlert && (
            <motion.div 
              className="prototype-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllAlert(false)}
            >
              <motion.div 
                className="prototype-modal-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>Archived News & Media Releases</h3>
                  <button 
                    type="button" 
                    className="modal-close-btn"
                    onClick={() => setShowAllAlert(false)}
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    <strong>Homepage Prototype Notice:</strong> The current scope is restricted to the homepage. In Phase 2, this button will direct users to the dedicated News & Media Archive page with advanced date and ward filters.
                  </p>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowAllAlert(false)}
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              className="article-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                className="article-modal-card"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="article-modal-title"
              >
                <div className="article-modal-top">
                  <div className="article-modal-badges">
                    <span className="badge-primary">{selectedArticle.category}</span>
                    {selectedArticle.badge && (
                      <span className="badge-secondary">{selectedArticle.badge}</span>
                    )}
                    {selectedArticle.isSample && (
                      <span className="sample-badge">Sample Demo Content</span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="article-modal-close"
                    onClick={() => setSelectedArticle(null)}
                    aria-label="Close article preview"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="article-modal-scroll-body">
                  {selectedArticle.image && (
                    <div className="article-modal-img-wrap">
                      <img
                        src={selectedArticle.image}
                        alt={selectedArticle.imageAlt || selectedArticle.title}
                        className="article-modal-img"
                      />
                      {selectedArticle.imageAlt && (
                        <p className="article-modal-img-caption">
                          📷 {selectedArticle.imageAlt}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="article-modal-meta">
                    <span className="meta-item">
                      <Calendar size={14} aria-hidden="true" />
                      {selectedArticle.date}
                    </span>
                    <span className="meta-separator">•</span>
                    <span className="meta-item">
                      <Clock size={14} aria-hidden="true" />
                      {selectedArticle.readTime}
                    </span>
                    <span className="meta-separator">•</span>
                    <span className="meta-item author">{selectedArticle.author}</span>
                  </div>

                  <h2 id="article-modal-title" className="article-modal-heading">
                    {selectedArticle.title}
                  </h2>

                  {selectedArticle.teluguTitle && (
                    <p className="article-modal-telugu">
                      {selectedArticle.teluguTitle}
                    </p>
                  )}

                  <div className="article-modal-content">
                    {selectedArticle.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="article-modal-tags">
                    {selectedArticle.tags.map((tag) => (
                      <span key={tag} className="tag-pill">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="article-modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleShare}
                  >
                    {copied ? <Check size={14} /> : <Share2 size={14} />}
                    <span>{copied ? 'Link Copied' : 'Share'}</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
