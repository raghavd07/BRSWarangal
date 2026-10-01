import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, Heart, ShieldCheck, QrCode, CreditCard, Landmark, 
  CheckCircle2, Download, Printer, ArrowRight, IndianRupee, Info 
} from 'lucide-react';
import brsLogoImg from '../assets/images/BRS Logo.png';
import './DonationModal.css';

export default function DonationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Amount & Details, 2: Receipt
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'netbanking', 'card'
  const [donorData, setDonorData] = useState({
    fullName: '',
    mobileNumber: '',
    panNumber: '',
    email: '',
    ward: 'Warangal East (General Fund)'
  });
  const [receiptNumber, setReceiptNumber] = useState('');

  if (!isOpen) return null;

  const presetAmounts = [250, 500, 1000, 2500, 5000];

  const handleAmountSelect = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) setSelectedAmount(Number(val));
  };

  const handleDonorChange = (e) => {
    setDonorData({ ...donorData, [e.target.name]: e.target.value });
  };

  const effectiveAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleProceedDonation = (e) => {
    e.preventDefault();
    if (!donorData.fullName || !donorData.mobileNumber || !effectiveAmount) return;

    const randomRec = `BRS-WE-REC-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(randomRec);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setDonorData({
      fullName: '',
      mobileNumber: '',
      panNumber: '',
      email: '',
      ward: 'Warangal East (General Fund)'
    });
    setCustomAmount('');
    setSelectedAmount(1000);
    onClose();
  };

  return (
    <div className="donation-modal-backdrop" onClick={handleReset} role="dialog" aria-modal="true">
      <motion.div 
        className="donation-modal-card"
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="donation-modal-header">
          <div className="donation-header-brand">
            <div className="donation-icon-badge">
              <Heart size={22} className="heart-icon" />
            </div>
            <div>
              <span className="donation-telugu-tag">ప్రజా నిధి & విరాళాలు</span>
              <h2 className="donation-title">Contribute to BRS Warangal East</h2>
            </div>
          </div>
          <button 
            type="button" 
            className="donation-close-btn"
            onClick={handleReset}
            aria-label="Close Donation Modal"
          >
            <X size={20} />
          </button>
        </div>

        {step === 1 ? (
          /* Step 1: Donation Selection & Details */
          <form className="donation-form" onSubmit={handleProceedDonation}>
            
            {/* Amount Selection */}
            <div className="donation-amount-section">
              <label className="section-label">Select Contribution Amount (విరాళం మొత్తం):</label>
              
              <div className="amount-pills-row">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`amount-pill ${selectedAmount === amt && !customAmount ? 'selected' : ''}`}
                    onClick={() => handleAmountSelect(amt)}
                  >
                    <span>₹{amt.toLocaleString('en-IN')}</span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="custom-amount-wrapper">
                <span className="currency-prefix">₹</span>
                <input
                  type="text"
                  placeholder="Enter other custom amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="custom-amount-input"
                />
              </div>
            </div>

            {/* Payment Method Switcher */}
            <div className="payment-methods-block">
              <label className="section-label">Select Payment Channel:</label>
              <div className="payment-tabs-grid">
                <button
                  type="button"
                  className={`pay-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <QrCode size={18} />
                  <span>UPI / QR Code</span>
                </button>
                <button
                  type="button"
                  className={`pay-tab ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('netbanking')}
                >
                  <Landmark size={18} />
                  <span>Net Banking</span>
                </button>
                <button
                  type="button"
                  className={`pay-tab ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={18} />
                  <span>Debit / Card</span>
                </button>
              </div>

              {/* UPI QR Display Preview */}
              {paymentMethod === 'upi' && (
                <div className="upi-preview-box">
                  <div className="qr-dummy-code">
                    <QrCode size={64} className="qr-icon" />
                    <span className="qr-vpa">brswarangaleast@upi</span>
                  </div>
                  <div className="upi-app-badges">
                    <span className="app-badge">Google Pay</span>
                    <span className="app-badge">PhonePe</span>
                    <span className="app-badge">Paytm</span>
                    <span className="app-badge">BHIM UPI</span>
                  </div>
                </div>
              )}
            </div>

            {/* Contributor Information */}
            <div className="donor-fields-grid">
              
              <div className="form-group">
                <label htmlFor="donor-fullName">
                  Contributor Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="donor-fullName"
                  name="fullName"
                  placeholder="Your full legal name"
                  value={donorData.fullName}
                  onChange={handleDonorChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="donor-mobileNumber">
                  Mobile Number <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  id="donor-mobileNumber"
                  name="mobileNumber"
                  placeholder="10-digit mobile number"
                  pattern="[0-9]{10}"
                  value={donorData.mobileNumber}
                  onChange={handleDonorChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="donor-panNumber">
                  PAN Card Number (For official receipt)
                </label>
                <input
                  type="text"
                  id="donor-panNumber"
                  name="panNumber"
                  placeholder="e.g. ABCDE1234F"
                  maxLength={10}
                  value={donorData.panNumber}
                  onChange={handleDonorChange}
                  style={{ textTransform: 'uppercase' }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="donor-email">
                  Email Address (For receipt copy)
                </label>
                <input
                  type="email"
                  id="donor-email"
                  name="email"
                  placeholder="name@example.com"
                  value={donorData.email}
                  onChange={handleDonorChange}
                />
              </div>

            </div>

            {/* Tax Exemption & Statutory Transparency Notice */}
            <div className="tax-exemption-badge">
              <ShieldCheck size={18} className="shield-icon" />
              <div>
                <strong>100% Tax Exemption:</strong> Donations to registered political parties are eligible for 100% tax deduction under Section 80GGB / 80GGC of the Income Tax Act, 1961.
              </div>
            </div>

            <div className="donation-actions-row">
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary donation-submit-btn">
                <span>Contribute ₹{effectiveAmount.toLocaleString('en-IN')} Securely</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </form>
        ) : (
          /* Step 2: Donation Official Receipt Confirmation */
          <div className="donation-success-view">
            <div className="receipt-banner">
              <CheckCircle2 size={24} />
              <div>
                <h4>Donation Received with Gratitude!</h4>
                <p>Your contribution directly powers public service in Warangal East.</p>
              </div>
            </div>

            {/* Official Party Contribution Receipt */}
            <div className="official-receipt">
              <div className="receipt-header">
                <div className="receipt-party-brand">
                  <img src={brsLogoImg} alt="BRS Logo" className="receipt-logo" />
                  <div>
                    <h5>BHARAT RASHTRA SAMITHI</h5>
                    <span>WARANGAL EAST CONSTITUENCY FUND</span>
                  </div>
                </div>
                <div className="receipt-tag-col">
                  <span className="receipt-official-pill">OFFICIAL RECEIPT</span>
                  <span className="receipt-no">{receiptNumber}</span>
                </div>
              </div>

              <div className="receipt-table">
                <div className="receipt-row">
                  <span className="r-label">Contributor Name:</span>
                  <span className="r-value bold">{donorData.fullName}</span>
                </div>
                <div className="receipt-row">
                  <span className="r-label">Amount Contributed:</span>
                  <span className="r-value amount-badge">₹{effectiveAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="receipt-row">
                  <span className="r-label">Payment Mode:</span>
                  <span className="r-value">{paymentMethod.toUpperCase()} (Online Verification)</span>
                </div>
                {donorData.panNumber && (
                  <div className="receipt-row">
                    <span className="r-label">Contributor PAN:</span>
                    <span className="r-value">{donorData.panNumber.toUpperCase()}</span>
                  </div>
                )}
                <div className="receipt-row">
                  <span className="r-label">Date & Time:</span>
                  <span className="r-value">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} IST</span>
                </div>
                <div className="receipt-row">
                  <span className="r-label">Statutory Benefit:</span>
                  <span className="r-value">100% Exemption under Section 80GGC</span>
                </div>
              </div>

              <div className="receipt-footer">
                <span>Party PAN: AAATB4321A | Form 24A Verified</span>
                <span>Authorized Signatory: Constituency Treasurer</span>
              </div>
            </div>

            {/* Receipt Actions */}
            <div className="receipt-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => alert(`Receipt #${receiptNumber} for ₹${effectiveAmount} downloaded.`)}
              >
                <Download size={14} />
                <span>Download Receipt (PDF)</span>
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => window.print()}
              >
                <Printer size={14} />
                <span>Print Receipt</span>
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
