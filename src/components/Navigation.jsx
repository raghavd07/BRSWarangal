import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ExternalLink, UserPlus, Heart } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from './SocialIcons';
import { navLinks, socialLinks } from '../data/navigation';
import './Navigation.css';

export default function Navigation({ onOpenRegister, onOpenDonate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (index) => {
    setMobileExpandedDropdown(mobileExpandedDropdown === index ? null : index);
  };

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case 'facebook':
        return <FacebookIcon size={16} />;
      case 'x':
        return <XIcon size={15} />;
      case 'instagram':
        return <InstagramIcon size={16} />;
      case 'youtube':
        return <YoutubeIcon size={16} />;
      default:
        return null;
    }
  };

  return (
    <nav className="main-navbar" ref={navRef} aria-label="Main Navigation">
      <div className="container nav-container">
        
        {/* Mobile Hamburger Button */}
        <div className="mobile-nav-toggle-wrapper">
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="mobile-menu-label">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links-desktop" role="menubar">
          {navLinks.map((item, index) => {
            const isOpen = activeDropdown === index;
            return (
              <li 
                key={item.name} 
                className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                role="none"
              >
                <a
                  href={item.href}
                  className={`nav-link ${isOpen ? 'active-dropdown' : ''}`}
                  role="menuitem"
                  aria-haspopup={item.hasDropdown ? 'true' : undefined}
                  aria-expanded={item.hasDropdown ? isOpen : undefined}
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      setActiveDropdown(isOpen ? null : index);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown(isOpen ? null : index);
                      }
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`dropdown-chevron ${isOpen ? 'rotate-180' : ''}`} 
                      aria-hidden="true" 
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        <ul className="dropdown-list">
                          {item.sublinks.map((sublink) => (
                            <li key={sublink.name} role="none">
                              <a 
                                href={sublink.href} 
                                className="dropdown-item" 
                                role="menuitem"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="dropdown-item-title">{sublink.name}</span>
                                {sublink.desc && (
                                  <span className="dropdown-item-desc">{sublink.desc}</span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Quick Action Buttons (Join BRS & Donate) */}
        <div className="nav-action-buttons-desktop">
          <motion.button
            type="button"
            className="nav-cta-btn nav-cta-register"
            onClick={onOpenRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Join BRS Party - Membership Registration"
          >
            <UserPlus size={14} />
            <span>Join BRS</span>
          </motion.button>

          <motion.button
            type="button"
            className="nav-cta-btn nav-cta-donate"
            onClick={onOpenDonate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contribute or Donate to BRS Warangal East"
          >
            <Heart size={14} className="nav-heart-icon" />
            <span>Donate</span>
          </motion.button>
        </div>

        {/* Social Media Links on the Right */}
        <div className="nav-social-desktop">
          <span className="social-label">Follow BRS:</span>
          <div className="social-icons-group">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label={social.label}
                title={social.label}
                whileHover={{ scale: 1.15, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                {renderSocialIcon(social.icon)}
              </motion.a>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="mobile-drawer-inner">
              
              {/* Mobile Quick Action Buttons */}
              <div className="mobile-action-buttons-row">
                <button
                  type="button"
                  className="mobile-cta-btn mobile-cta-register"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                >
                  <UserPlus size={16} />
                  <span>Join BRS (సభ్యత్వం)</span>
                </button>
                <button
                  type="button"
                  className="mobile-cta-btn mobile-cta-donate"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                >
                  <Heart size={16} />
                  <span>Donate (విరాళం)</span>
                </button>
              </div>

              <ul className="mobile-nav-list">
                {navLinks.map((item, idx) => (
                  <li key={item.name} className="mobile-nav-item">
                    {item.hasDropdown ? (
                      <div className="mobile-dropdown-wrapper">
                        <button
                          type="button"
                          className="mobile-dropdown-trigger"
                          onClick={() => toggleMobileDropdown(idx)}
                          aria-expanded={mobileExpandedDropdown === idx}
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`mobile-chevron ${mobileExpandedDropdown === idx ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {mobileExpandedDropdown === idx && (
                            <motion.ul
                              className="mobile-submenu-list"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.sublinks.map((sublink) => (
                                <li key={sublink.name}>
                                  <a
                                    href={sublink.href}
                                    className="mobile-sublink"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <span className="sublink-title">{sublink.name}</span>
                                    {sublink.desc && (
                                      <span className="sublink-desc">{sublink.desc}</span>
                                    )}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="mobile-direct-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Social Strip */}
              <div className="mobile-social-section">
                <span className="mobile-social-title">Connect with BRS Warangal East</span>
                <div className="mobile-social-icons">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-btn"
                      aria-label={social.label}
                    >
                      {renderSocialIcon(social.icon)}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
