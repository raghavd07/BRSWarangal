import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Play, Calendar, Clock, X, Info, ArrowRight } from 'lucide-react';
import { recentVideos } from '../data/videos';
import './VideoGallery.css';

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [prototypeModalOpen, setPrototypeModalOpen] = useState(false);

  return (
    <section className="section-wrapper bg-white" id="videos" aria-label="Recent Videos Preview">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <Video size={14} aria-hidden="true" />
            Media & Broadcasts
          </span>
          <h2 className="section-title">Recent Videos</h2>
          <p className="section-subtitle-telugu">ప్రత్యక్ష ప్రసారాలు & వీడియో ముఖ్యాంశాలు</p>
          <p className="section-description">
            Speeches, media conferences, constituency development briefings, and public outreach recordings.
          </p>
          <div className="section-divider" />
        </div>

        {/* 3-Card Responsive Grid */}
        <motion.div 
          className="videos-grid"
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
          {recentVideos.map((video) => (
            <motion.div
              key={video.id}
              className="video-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedVideo(video)}
              role="button"
              tabIndex={0}
              aria-label={`Preview video: ${video.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedVideo(video);
                }
              }}
            >
              {/* Video Thumbnail Placeholder with Play Overlay */}
              <div className="video-card-thumbnail">
                <div className={`video-thumbnail-backdrop theme-${video.placeholderTheme}`}>
                  <div className="video-glow-ring" />
                </div>

                {/* Duration Badge */}
                <div className="video-duration-badge">
                  <Clock size={11} aria-hidden="true" />
                  <span>{video.duration}</span>
                </div>

                {/* Sample Video Placeholder Pill */}
                <div className="video-placeholder-pill">
                  <span>SAMPLE RECORDING</span>
                </div>

                {/* Center Play Icon Overlay */}
                <div className="video-play-overlay">
                  <span className="video-play-btn">
                    <Play size={24} fill="#FFFFFF" />
                  </span>
                </div>
              </div>

              {/* Video Card Content */}
              <div className="video-card-body">
                <div className="video-meta">
                  <span className="video-category-tag">{video.category}</span>
                  <span className="video-date">
                    <Calendar size={12} aria-hidden="true" />
                    {video.date}
                  </span>
                </div>

                {video.teluguTitle && (
                  <span className="video-telugu-title">{video.teluguTitle}</span>
                )}

                <h3 className="video-card-title">{video.title}</h3>

                <p className="video-card-speaker">
                  <strong>Featured:</strong> {video.speaker}
                </p>

                <p className="video-card-summary">{video.summary}</p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* View All Videos Button */}
        <div className="videos-footer-action">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setPrototypeModalOpen(true)}
          >
            <span>View All Videos & Speeches</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Prototype Modal */}
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
                  <h3>Official Video Channel</h3>
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
                    <strong>Homepage Prototype Notice:</strong> The official YouTube channel integration and searchable constituency video archive will be linked here once verified broadcast URLs are configured.
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

        {/* Video Preview Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="video-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-modal-title"
            >
              <motion.div
                className="video-modal-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="video-modal-screen">
                  <div className="video-modal-screen-content">
                    <div className="screen-play-icon">
                      <Play size={40} fill="#FFFFFF" />
                    </div>
                    <h4>Video Media Stream Placeholder</h4>
                    <p className="screen-note">
                      <Info size={14} />
                      As required, external or unrelated videos are not embedded. Authentic video streams will be embedded upon official media release.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="video-modal-close"
                    onClick={() => setSelectedVideo(null)}
                    aria-label="Close video player"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="video-modal-details">
                  <div className="video-modal-tag-row">
                    <span className="badge-primary">{selectedVideo.category}</span>
                    <span className="video-modal-duration">Duration: {selectedVideo.duration}</span>
                  </div>

                  <h3 id="video-modal-title" className="video-modal-title">
                    {selectedVideo.title}
                  </h3>

                  {selectedVideo.teluguTitle && (
                    <p className="video-modal-telugu">{selectedVideo.teluguTitle}</p>
                  )}

                  <p className="video-modal-desc">{selectedVideo.summary}</p>

                  <div className="video-modal-info-box">
                    <strong>Note:</strong> {selectedVideo.embedNote}
                  </div>
                </div>

                <div className="video-modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedVideo(null)}
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
