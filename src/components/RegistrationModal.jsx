import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, UserCheck, ShieldCheck, CheckCircle2, Award, 
  Phone, MapPin, User, FileText, Download, Printer, ArrowRight 
} from 'lucide-react';
import brsLogoImg from '../assets/images/BRS Logo.png';
import './RegistrationModal.css';

export default function RegistrationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Form, 2: Generated Card
  const [membershipType, setMembershipType] = useState('active'); // 'active' or 'volunteer'
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    wardNumber: 'Ward 50 - Public Garden & Subedari',
    voterId: '',
    colony: '',
    wingPreference: 'General Cadre'
  });
  const [generatedId, setGeneratedId] = useState('');

  if (!isOpen) return null;

  const wardOptions = [
    'Ward 50 - Public Garden & Subedari',
    'Ward 52 - Kakatiya University Campus',
    'Ward 54 - Nakkalagutta & Hanamkonda Chowrasta',
    'Ward 56 - Balasamudram',
    'Ward 58 - Lashkar Bazar',
    'Ward 60 - Waddepally',
    'Ward 62 - Bheemaram',
    'Ward 64 - Kazipet Town',
    'Ward 66 - NIT Campus Road',
    'Ward 48 - Kishanpura',
    'Ward 44 - Kumarpalli',
    'Ward 46 - Excise Colony'
  ];

  const wingOptions = [
    'General Cadre Member',
    'Youth Wing (BRS Vidyarthi / Yuva)',
    'Mahila Wing (Women Empowerment)',
    'Digital Media & Social Cell',
    'Karmika / Labor Welfare Wing',
    'Traders & Small Business Cell'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber) return;
    
    // Generate realistic membership identifier
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `BRS-WE-${randomNum}`;
    setGeneratedId(newId);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      fullName: '',
      mobileNumber: '',
      wardNumber: 'Ward 18 - Girmajipet',
      voterId: '',
      colony: '',
      wingPreference: 'General Cadre'
    });
    onClose();
  };

  return (
    <div className="reg-modal-backdrop" onClick={handleReset} role="dialog" aria-modal="true">
      <motion.div 
        className="reg-modal-card"
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="reg-modal-header">
          <div className="reg-header-brand">
            <img src={brsLogoImg} alt="BRS Logo" className="reg-brand-logo" />
            <div>
              <span className="reg-telugu-tag">భారత్ రాష్ట్ర సమితి - వరంగల్ పశ్చిమ నియోజకవర్గం</span>
              <h2 className="reg-title">BRS Party Membership Registration</h2>
            </div>
          </div>
          <button 
            type="button" 
            className="reg-close-btn"
            onClick={handleReset}
            aria-label="Close Registration Modal"
          >
            <X size={20} />
          </button>
        </div>

        {step === 1 ? (
          /* Step 1: Registration Form */
          <form className="reg-form" onSubmit={handleSubmit}>
            {/* Membership Type Switcher */}
            <div className="reg-type-switcher">
              <button
                type="button"
                className={`type-btn ${membershipType === 'active' ? 'active' : ''}`}
                onClick={() => setMembershipType('active')}
              >
                <Award size={16} />
                <span>Primary / Active Member</span>
              </button>
              <button
                type="button"
                className={`type-btn ${membershipType === 'volunteer' ? 'active' : ''}`}
                onClick={() => setMembershipType('volunteer')}
              >
                <UserCheck size={16} />
                <span>Constituency Volunteer</span>
              </button>
            </div>

            <p className="reg-subtitle">
              Join hands to strengthen grassroots civic development, citizen welfare initiatives, and public representation in Warangal West (వరంగల్ పశ్చిమ నియోజకవర్గం).
            </p>

            <div className="form-fields-grid">
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="reg-fullName">
                  Full Name (పూర్తి పేరు) <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    id="reg-fullName"
                    name="fullName"
                    className="icon-input"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="form-group">
                <label htmlFor="reg-mobileNumber">
                  Mobile / WhatsApp Number (మొబైల్ సంఖ్య) <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon" />
                  <input
                    type="tel"
                    id="reg-mobileNumber"
                    name="mobileNumber"
                    className="icon-input"
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Ward / Division in Warangal West */}
              <div className="form-group">
                <label htmlFor="reg-wardNumber">
                  Ward / Division (వరంగల్ పశ్చిమ వార్డు) <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon" />
                  <select
                    id="reg-wardNumber"
                    name="wardNumber"
                    className="icon-input"
                    value={formData.wardNumber}
                    onChange={handleChange}
                  >
                    {wardOptions.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Wing Preference */}
              <div className="form-group">
                <label htmlFor="reg-wingPreference">
                  Wing of Interest (విభాగం)
                </label>
                <select
                  id="reg-wingPreference"
                  name="wingPreference"
                  value={formData.wingPreference}
                  onChange={handleChange}
                  className="regular-input"
                >
                  {wingOptions.map((wg) => (
                    <option key={wg} value={wg}>{wg}</option>
                  ))}
                </select>
              </div>

              {/* Area / Colony */}
              <div className="form-group">
                <label htmlFor="reg-colony">
                  Area / Locality (ప్రాంతం / కాలనీ)
                </label>
                <input
                  type="text"
                  id="reg-colony"
                  name="colony"
                  className="regular-input"
                  placeholder="e.g. Near Public Garden, Subedari / Balasamudram"
                  value={formData.colony}
                  onChange={handleChange}
                />
              </div>

              {/* Voter ID (Optional) */}
              <div className="form-group">
                <label htmlFor="reg-voterId">
                  Voter ID / EPIC No. (ఐచ్ఛికం / Optional)
                </label>
                <div className="input-with-icon">
                  <FileText size={18} className="input-icon" />
                  <input
                    type="text"
                    id="reg-voterId"
                    name="voterId"
                    className="icon-input"
                    placeholder="e.g. ABC1234567"
                    value={formData.voterId}
                    onChange={handleChange}
                  />
                </div>
              </div>

            </div>

            <div className="form-notice">
              <ShieldCheck size={16} className="shield-icon" />
              <span>
                Your privacy is protected. Registered citizens will receive official Warangal West constituency announcements and community updates.
              </span>
            </div>

            <div className="reg-actions-row">
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <span>Submit Membership Registration</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        ) : (
          /* Step 2: Generated Digital Membership Card Preview */
          <div className="reg-success-view">
            <div className="success-badge-banner">
              <CheckCircle2 size={24} />
              <div>
                <h4>Membership Registered Successfully!</h4>
                <p>Welcome to BRS Warangal West (వరంగల్ పశ్చిమ) Family.</p>
              </div>
            </div>

            {/* Visual Digital Membership Card */}
            <div className="digital-card">
              <div className="digital-card-top">
                <div className="card-brand">
                  <img src={brsLogoImg} alt="BRS Logo" className="card-logo" />
                  <div>
                    <h5>BHARAT RASHTRA SAMITHI</h5>
                    <span>WARANGAL WEST CONSTITUENCY</span>
                  </div>
                </div>
                <div className="card-symbol-badge">
                  <span>CAR SYMBOL</span>
                </div>
              </div>

              <div className="digital-card-body">
                <div className="card-user-info">
                  <div className="card-field">
                    <span className="field-label">Member Name:</span>
                    <span className="field-val highlight">{formData.fullName}</span>
                  </div>
                  <div className="card-field">
                    <span className="field-label">Membership ID:</span>
                    <span className="field-val badge-id">{generatedId}</span>
                  </div>
                  <div className="card-field">
                    <span className="field-label">Ward / Division:</span>
                    <span className="field-val">{formData.wardNumber}</span>
                  </div>
                  <div className="card-field">
                    <span className="field-label">Wing:</span>
                    <span className="field-val">{formData.wingPreference}</span>
                  </div>
                </div>

                <div className="card-status-stamp">
                  <div className="stamp-circle">
                    <span>VERIFIED</span>
                    <small>WARANGAL WEST</small>
                  </div>
                </div>
              </div>

              <div className="digital-card-footer">
                <span>Constituency Leader: D. Vinay Bhaskar</span>
                <span>Date: October 2026</span>
              </div>
            </div>

            {/* Actions for the Card */}
            <div className="card-download-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => alert(`Digital Membership Card for ${formData.fullName} (ID: ${generatedId}) ready for download.`)}
              >
                <Download size={14} />
                <span>Download Digital Card</span>
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => window.print()}
              >
                <Printer size={14} />
                <span>Print Card</span>
              </button>
              <button 
                type="button" 
                className="btn btn-dark btn-sm"
                onClick={handleReset}
              >
                Done
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
