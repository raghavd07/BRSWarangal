import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, UserCheck, ShieldCheck, ChevronRight, X, ExternalLink } from 'lucide-react';
import { leadershipData } from '../data/leadership';
import './LeadershipSection.css';

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <section className="section-wrapper bg-pale" id="leadership" aria-label="Constituency and Party Leadership">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <ShieldCheck size={14} aria-hidden="true" />
            Dedicated Public Leadership
          </span>
          <h2 className="section-title">Constituency & Party Leadership</h2>
          <p className="section-subtitle-telugu">నియోజకవర్గ మరియు పార్టీ నాయకత్వం</p>
          <p className="section-description">
            Guided by visionary leaders championing the statehood of Telangana and spearheading dedicated civic governance for the citizens of Warangal East.
          </p>
          <div className="section-divider" />
        </div>

        {/* Leadership Profile Cards Grid */}
        <div className="leadership-cards-grid">
          {leadershipData.map((leader) => (
            <motion.div
              key={leader.id}
              className={`leadership-card ${leader.isPrimary ? 'primary-emphasis-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              {/* Primary Constituency Highlight Ribbon */}
              {leader.isPrimary && (
                <div className="constituency-primary-ribbon">
                  <Award size={14} aria-hidden="true" />
                  <span>PRIMARY CONSTITUENCY FOCUS</span>
                </div>
              )}

              {/* Portrait Container */}
              <div className="leadership-portrait-container">
                <div className="leadership-portrait-halo" />
                <div className="leadership-portrait-circle">
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    className="leadership-img"
                    loading="lazy"
                  />
                </div>
                <div className="leader-role-badge">
                  <span>{leader.badge}</span>
                </div>
              </div>

              {/* Leader Info Content */}
              <div className="leadership-card-content">
                <h3 className="leader-full-name">{leader.name}</h3>
                <span className="leader-telugu-name">{leader.teluguName}</span>
                
                {/* Verified Designation */}
                <div className="leader-designation-box">
                  <UserCheck size={14} className="designation-check-icon" aria-hidden="true" />
                  <span className="leader-designation">{leader.designation}</span>
                </div>

                <p className="leader-bio-summary">{leader.bio}</p>

                {/* Key Initiatives / Highlights */}
                <div className="leader-initiatives-list">
                  <span className="initiatives-heading">Key Focus Areas:</span>
                  <ul>
                    {leader.initiatives.slice(0, 3).map((item, idx) => (
                      <li key={idx}>
                        <span className="bullet-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile Link Button */}
                <div className="leader-action-row">
                  <button
                    type="button"
                    className={`btn ${leader.isPrimary ? 'btn-primary' : 'btn-secondary'} btn-sm leader-btn`}
                    onClick={() => setSelectedLeader(leader)}
                  >
                    <span>View Profile Details</span>
                    <ChevronRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Leadership Details Modal */}
        <AnimatePresence>
          {selectedLeader && (
            <motion.div
              className="leader-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="leader-modal-title"
            >
              <motion.div
                className="leader-modal-card"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="leader-modal-header">
                  <div className="leader-modal-avatar">
                    <img src={selectedLeader.image} alt={selectedLeader.name} />
                  </div>
                  <div className="leader-modal-headline">
                    <span className="badge-primary">{selectedLeader.badge}</span>
                    <h2 id="leader-modal-title">{selectedLeader.name}</h2>
                    <span className="leader-modal-telugu">{selectedLeader.teluguName}</span>
                    <p className="leader-modal-designation">{selectedLeader.designation}</p>
                  </div>
                  <button
                    type="button"
                    className="leader-modal-close"
                    onClick={() => setSelectedLeader(null)}
                    aria-label="Close leader profile"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="leader-modal-body">
                  <div className="leader-modal-section">
                    <h4>Public Service Overview</h4>
                    <p>{selectedLeader.bio}</p>
                  </div>

                  <div className="leader-modal-section">
                    <h4>Notable Initiatives & Pillars</h4>
                    <ul className="leader-modal-features">
                      {selectedLeader.initiatives.map((item, idx) => (
                        <li key={idx}>
                          <Award size={16} className="modal-feature-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="leader-modal-note">
                    <strong>Profile Note:</strong> Full legislative biography, constituency question records, and press archive will be linked in the comprehensive leadership directory.
                  </div>
                </div>

                <div className="leader-modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedLeader(null)}
                  >
                    Close Profile
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
