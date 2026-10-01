import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, Image as ImageIcon, Video, ArrowUpRight } from 'lucide-react';
import './MediaCategoryStrip.css';

export default function MediaCategoryStrip() {
  const categories = [
    {
      id: 'news',
      label: 'NEWS',
      teluguLabel: 'వార్తలు & ప్రకటనలు',
      icon: Newspaper,
      iconColor: '#EC2588', // Magenta icon for News
      iconBg: '#FCE7F3',
      target: '#news',
      badge: 'Latest Updates',
      desc: 'Official releases, circulars & announcements'
    },
    {
      id: 'photos',
      label: 'PHOTOS',
      teluguLabel: 'చిత్రమాలిక',
      icon: ImageIcon,
      iconColor: '#24212A', // Charcoal icon for Photos
      iconBg: '#EDEAF1',
      target: '#photos',
      badge: 'Photo Gallery',
      desc: 'High-resolution photo coverage & heritage'
    },
    {
      id: 'videos',
      label: 'VIDEOS',
      teluguLabel: 'వీడియోలు',
      icon: Video,
      iconColor: '#24212A', // Charcoal icon for Videos
      iconBg: '#EDEAF1',
      target: '#videos',
      badge: 'Video Archive',
      desc: 'Speeches, interviews & event highlights'
    }
  ];

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="media-category-strip-section" id="media-strip" aria-label="Media Category Quick Links">
      <div className="container">
        <div className="media-strip-grid">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.a
                key={cat.id}
                href={cat.target}
                onClick={(e) => handleScrollTo(e, cat.target)}
                className={`media-category-card ${cat.id === 'news' ? 'news-highlight' : ''}`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
              >
                <div className="media-card-content">
                  <div 
                    className="media-card-icon-box"
                    style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}
                  >
                    <IconComponent size={28} strokeWidth={2.2} aria-hidden="true" />
                  </div>

                  <div className="media-card-text">
                    <div className="media-card-label-row">
                      <span className="media-card-label">{cat.label}</span>
                      <ArrowUpRight size={16} className="media-card-arrow" aria-hidden="true" />
                    </div>
                    <span className="media-card-telugu">{cat.teluguLabel}</span>
                    <span className="media-card-desc">{cat.desc}</span>
                  </div>
                </div>

                <div 
                  className="media-card-bottom-line"
                  style={{ backgroundColor: cat.id === 'news' ? '#EC2588' : '#D1CAD8' }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
