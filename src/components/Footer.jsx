import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, MapPin, Mail, Phone, Clock, ChevronRight, 
  ArrowUp, X, Shield, FileText 
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from './SocialIcons';
import brsLogoImg from '../assets/images/BRS Logo.png';
import { socialLinks } from '../data/navigation';
import './Footer.css';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', 'disclaimer'

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'facebook':
        return <FacebookIcon size={18} />;
      case 'x':
        return <XIcon size={17} />;
      case 'instagram':
        return <InstagramIcon size={18} />;
      case 'youtube':
        return <YoutubeIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="site-footer" id="contact" aria-label="Site Footer">
      
      {/* Top Accent Divider */}
      <div className="footer-top-accent" aria-hidden="true">
        <div className="accent-line-green" />
        <div className="accent-line-magenta" />
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          
          {/* Column 1: Party Brand & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-brand-badge">
              <img 
                src={brsLogoImg} 
                alt="BRS Official Logo" 
                className="footer-logo-img"
              />
            </div>
            
            <p className="footer-brand-telugu">
              భారత్ రాష్ట్ర సమితి - వరంగల్ పశ్చిమ నియోజకవర్గం
            </p>

            <p className="footer-brand-text">
              Official portal of Bharat Rashtra Samithi (BRS) – Warangal West Constituency (వరంగల్ పశ్చిమ నియోజకవర్గం). Dedicated to transparent civic representation, grassroots public welfare, and comprehensive municipal modernization.
            </p>

            {/* Social Media Link Bar */}
            <div className="footer-social-box">
              <span className="footer-social-label">Follow Official Channels:</span>
              <div className="footer-social-icons">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={item.label}
                    title={item.label}
                  >
                    {renderSocialIcon(item.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Constituency Links</h4>
            <div className="footer-title-line" />
            <ul className="footer-links-list">
              <li>
                <a href="#top" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Homepage</span>
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>About Warangal West</span>
                </a>
              </li>
              <li>
                <a href="#leadership" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Leadership Profiles</span>
                </a>
              </li>
              <li>
                <a href="#news" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>News & Press Releases</span>
                </a>
              </li>
              <li>
                <a href="#photos" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a href="#videos" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Video Archive</span>
                </a>
              </li>
              <li>
                <a href="#events" className="footer-link">
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Upcoming Events</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Portals */}
          <div className="footer-col">
            <h4 className="footer-col-title">Civic Portals</h4>
            <div className="footer-title-line" />
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveModal('grievance');
                  }}
                >
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Citizen Grievance Cell</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveModal('manifesto');
                  }}
                >
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Constituency Manifesto</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveModal('voter');
                  }}
                >
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Voter Assistance Helpline</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveModal('downloads');
                  }}
                >
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Official Application Forms</span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveModal('membership');
                  }}
                >
                  <ChevronRight size={14} aria-hidden="true" />
                  <span>Party Cadre Registration</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information Placeholders */}
          <div className="footer-col">
            <h4 className="footer-col-title">Constituency Office</h4>
            <div className="footer-title-line" />
            
            <div className="footer-contact-details">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" aria-hidden="true" />
                <div>
                  <strong>Central Office:</strong>
                  <p>BRS Warangal West Constituency Central Office, Hanamkonda, Warangal, Telangana – 506001</p>
                </div>
              </div>

              <div className="contact-item">
                <Clock size={16} className="contact-icon" aria-hidden="true" />
                <div>
                  <strong>Public Grievance Hours:</strong>
                  <p>Tuesday & Friday: 10:00 AM – 1:30 PM</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={16} className="contact-icon" aria-hidden="true" />
                <div>
                  <strong>Email (Placeholder):</strong>
                  <p>office@brswarangalwest.org</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={16} className="contact-icon" aria-hidden="true" />
                <div>
                  <strong>Helpline Desk (Placeholder):</strong>
                  <p>+91 (0870) 2XX-XXXX</p>
                </div>
              </div>
            </div>

            <div className="footer-placeholder-note">
              <p>* Phone numbers and exact door addresses are placeholders until official verification.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          
          <div className="footer-copyright-text">
            <span>© 2026 Bharat Rashtra Samithi (BRS) – Warangal West Constituency (వరంగల్ పశ్చిమ నియోజకవర్గం). All rights reserved.</span>
          </div>

          <div className="footer-legal-links">
            <button 
              type="button" 
              className="legal-link-btn"
              onClick={() => setActiveModal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="legal-dot">•</span>
            <button 
              type="button" 
              className="legal-link-btn"
              onClick={() => setActiveModal('terms')}
            >
              Terms of Use
            </button>
            <span className="legal-dot">•</span>
            <button 
              type="button" 
              className="legal-link-btn"
              onClick={() => setActiveModal('disclaimer')}
            >
              Disclaimer
            </button>
          </div>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            title="Back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>

        </div>
      </div>

      {/* Legal & Informational Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="footer-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="footer-modal-card"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms of Use'}
                  {activeModal === 'disclaimer' && 'Constituency Portal Disclaimer'}
                  {activeModal === 'grievance' && 'Citizen Grievance Redressal'}
                  {activeModal === 'manifesto' && 'Warangal West Development Vision'}
                  {activeModal === 'voter' && 'Voter Registration Information'}
                  {activeModal === 'downloads' && 'Official Forms & Downloads'}
                  {activeModal === 'membership' && 'Cadre Registration Desk'}
                </h3>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveModal(null)}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                {activeModal === 'privacy' && (
                  <div>
                    <p>This privacy notice applies to the BRS Warangal West Constituency homepage prototype. We respect citizen privacy. No personal identification data or cookie tracking is gathered or shared without explicit user submission during the demonstration phase.</p>
                  </div>
                )}

                {activeModal === 'terms' && (
                  <div>
                    <p>The materials, leadership photographs, and developmental information presented on this website are compiled solely for official informational purposes representing BRS Warangal West Constituency.</p>
                  </div>
                )}

                {activeModal === 'disclaimer' && (
                  <div>
                    <p>This prototype demonstrates the visual identity, structure, and responsive layout for the Warangal West Constituency website. Unofficial or sample notices are clearly indicated with demonstration badges.</p>
                  </div>
                )}

                {(activeModal === 'grievance' || activeModal === 'manifesto' || activeModal === 'voter' || activeModal === 'downloads' || activeModal === 'membership') && (
                  <div>
                    <p><strong>Demonstration Notice:</strong> This feature is part of the future full-site release. Online petition submissions, document downloads, and automated status tracking will be activated once the constituency backend server is deployed.</p>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveModal(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}
