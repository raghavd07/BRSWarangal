import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Heart, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';
import './JoinDonateSection.css';

export default function JoinDonateSection({ onOpenRegister, onOpenDonate }) {
  return (
    <section className="join-donate-section" aria-label="Join BRS and Contribute">
      <div className="container">
        
        <div className="join-donate-grid">
          
          {/* Card 1: Membership Registration */}
          <motion.div 
            className="action-card register-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -4 }}
          >
            <div className="action-card-glow" />
            <div className="action-card-header">
              <div className="action-card-icon-box register-icon-box">
                <UserPlus size={26} />
              </div>
              <div className="action-card-badge">
                <Sparkles size={12} />
                <span>CITIZEN ENROLLMENT</span>
              </div>
            </div>

            <div className="action-card-body">
              <span className="action-card-telugu">పార్టీ సభ్యత్వ నమోదు</span>
              <h3 className="action-card-title">Join BRS Warangal West</h3>
              <p className="action-card-desc">
                Become a registered party member or active constituency volunteer. Engage directly in ward development reviews, community welfare drives, and citizen advocacy.
              </p>
              
              <ul className="action-perks-list">
                <li>
                  <Award size={14} className="perk-icon" />
                  <span>Instant Digital Membership ID Card</span>
                </li>
                <li>
                  <Award size={14} className="perk-icon" />
                  <span>Direct participation in ward grievance meetings</span>
                </li>
              </ul>
            </div>

            <div className="action-card-footer">
              <button 
                type="button" 
                className="btn btn-primary action-btn"
                onClick={onOpenRegister}
              >
                <span>Register Membership Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Donation / Contribution */}
          <motion.div 
            className="action-card donate-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="action-card-glow donate-glow" />
            <div className="action-card-header">
              <div className="action-card-icon-box donate-icon-box">
                <Heart size={26} className="heart-fill" />
              </div>
              <div className="action-card-badge tax-badge">
                <ShieldCheck size={12} />
                <span>100% SEC 80GGC TAX EXEMPT</span>
              </div>
            </div>

            <div className="action-card-body">
              <span className="action-card-telugu">ప్రజా నిధికి విరాళం</span>
              <h3 className="action-card-title">Support Our Constituency Mission</h3>
              <p className="action-card-desc">
                Empower grassroots civic assistance desks, health camps, student workshops, and clean water monitoring across Warangal West with clean, transparent citizen funding.
              </p>

              <ul className="action-perks-list">
                <li>
                  <ShieldCheck size={14} className="perk-icon" />
                  <span>Instant Official Party Receipt with PAN</span>
                </li>
                <li>
                  <ShieldCheck size={14} className="perk-icon" />
                  <span>UPI, QR Code, Net Banking & Card support</span>
                </li>
              </ul>
            </div>

            <div className="action-card-footer">
              <button 
                type="button" 
                className="btn btn-donate action-btn"
                onClick={onOpenDonate}
              >
                <span>Contribute / Donate Online</span>
                <Heart size={16} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
