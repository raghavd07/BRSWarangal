import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { photoGallery } from '../data/gallery';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextLightboxPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % photoGallery.length);
  };

  const prevLightboxPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + photoGallery.length) % photoGallery.length);
  };

  const activePhoto = activePhotoIndex !== null ? photoGallery[activePhotoIndex] : null;

  return (
    <section className="section-wrapper bg-pale" id="photos" aria-label="Recent Photos Gallery Preview">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <ImageIcon size={14} aria-hidden="true" />
            Visual Documentation
          </span>
          <h2 className="section-title">Recent Photos</h2>
          <p className="section-subtitle-telugu">నియోజకవర్గ చిత్రమాలిక & జ్ఞాపకాలు</p>
          <p className="section-description">
            Glimpses of historic monuments, cultural heritage, public welfare drives, and constituency engagements in Warangal East.
          </p>
          <div className="section-divider" />
        </div>

        {/* 6-Tile Responsive Grid */}
        <motion.div 
          className="gallery-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {photoGallery.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-tile"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } }
              }}
              whileHover={{ y: -4 }}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="gallery-tile-inner">
                {item.image ? (
                  <div className="gallery-img-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="gallery-tile-img"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="gallery-placeholder-container">
                    <div className="placeholder-pattern-box">
                      <ImageIcon size={32} className="placeholder-icon" />
                      <span className="placeholder-label">{item.placeholderLabel}</span>
                      <span className="placeholder-tag">Sample Demonstration Photo</span>
                    </div>
                  </div>
                )}

                {/* Hover Overlay with Zoom Icon & Caption */}
                <div className="gallery-tile-overlay">
                  <div className="overlay-badge">
                    <span className="badge-text">{item.category}</span>
                  </div>
                  <div className="overlay-center-action">
                    <span className="zoom-circle">
                      <ZoomIn size={20} />
                    </span>
                  </div>
                  <div className="overlay-bottom-caption">
                    <p className="overlay-title">{item.title}</p>
                    <span className="overlay-sub">{item.teluguTitle}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Photo Gallery Link */}
        <div className="gallery-footer-action">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setPrototypeModalOpen(true)}
          >
            <span>View Photo Gallery</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Prototype Gallery Modal Notice */}
        <AnimatePresence>
          {prototypeModalOpen && (
            <motion.div 
              className="prototype-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPrototypeModalOpen(false)}
            >
              <motion.div 
                className="prototype-modal-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>Full Photo Archive Preview</h3>
                  <button 
                    type="button" 
                    className="modal-close-btn"
                    onClick={() => setPrototypeModalOpen(false)}
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    <strong>Homepage Prototype Notice:</strong> The full multi-category high-resolution photo repository with album filtering and downloadable press kits will be integrated in Phase 2.
                  </p>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setPrototypeModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Photo Lightbox"
            >
              <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
                
                {/* Lightbox Controls */}
                <button
                  type="button"
                  className="lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close Lightbox"
                >
                  <X size={24} />
                </button>

                <button
                  type="button"
                  className="lightbox-arrow lightbox-prev"
                  onClick={prevLightboxPhoto}
                  aria-label="Previous Photo"
                >
                  <ChevronLeft size={28} />
                </button>

                <button
                  type="button"
                  className="lightbox-arrow lightbox-next"
                  onClick={nextLightboxPhoto}
                  aria-label="Next Photo"
                >
                  <ChevronRight size={28} />
                </button>

                {/* Lightbox Main Image & Caption */}
                <div className="lightbox-stage">
                  {activePhoto.image ? (
                    <img
                      src={activePhoto.image}
                      alt={activePhoto.title}
                      className="lightbox-image"
                    />
                  ) : (
                    <div className="lightbox-placeholder">
                      <ImageIcon size={48} />
                      <p>{activePhoto.placeholderLabel}</p>
                      <span className="sample-badge">Sample Demonstration Graphic</span>
                    </div>
                  )}
                </div>

                <div className="lightbox-caption-bar">
                  <div className="lightbox-caption-text">
                    <span className="lightbox-category">{activePhoto.category}</span>
                    <h3 className="lightbox-title">{activePhoto.title}</h3>
                    <p className="lightbox-desc">{activePhoto.caption}</p>
                  </div>
                  <div className="lightbox-counter">
                    {activePhotoIndex + 1} / {photoGallery.length}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
