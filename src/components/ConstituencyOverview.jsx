import React from 'react';
import { motion } from 'motion/react';
import { Landmark, MapPin, Bell, Building2, Info, CheckCircle2 } from 'lucide-react';
import { constituencyData } from '../data/constituency';
import './ConstituencyOverview.css';

export default function ConstituencyOverview() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'map-pin':
        return <MapPin size={24} aria-hidden="true" />;
      case 'bell':
        return <Bell size={24} aria-hidden="true" />;
      case 'building-2':
        return <Building2 size={24} aria-hidden="true" />;
      default:
        return <Landmark size={24} aria-hidden="true" />;
    }
  };

  return (
    <section className="section-wrapper bg-white" id="about" aria-label="About Warangal West Constituency (వరంగల్ పశ్చిమ నియోజకవర్గం)">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">
            <Landmark size={14} aria-hidden="true" />
            Civic Profile & Purpose
          </span>
          <h2 className="section-title">{constituencyData.title}</h2>
          <p className="section-subtitle-telugu">{constituencyData.teluguTitle}</p>
          <p className="section-description intro-paragraph">
            {constituencyData.intro}
          </p>
          <div className="section-divider" />
        </div>

        {/* 3 Compact Information Blocks */}
        <div className="constituency-blocks-grid">
          {constituencyData.blocks.map((block) => (
            <motion.div
              key={block.id}
              className="info-block-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              {/* Block Top Header */}
              <div className="info-block-header">
                <div className="info-block-icon">
                  {getIcon(block.icon)}
                </div>
                <div>
                  <h3 className="info-block-title">{block.title}</h3>
                  <span className="info-block-telugu">{block.teluguTitle}</span>
                  <span className="info-block-subtitle">{block.subtitle}</span>
                </div>
              </div>

              {/* Description */}
              <p className="info-block-desc">{block.description}</p>

              {/* Highlights List */}
              <div className="info-block-highlights">
                <span className="highlights-label">Key Information & Schedules:</span>
                <ul>
                  {block.highlights.map((item, idx) => (
                    <li key={idx}>
                      <span className="item-label">{item.label}:</span>
                      <span className="item-value">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verification & Placeholder Notice */}
              <div className="info-block-notice">
                <Info size={13} className="notice-icon" aria-hidden="true" />
                <span>{block.placeholderNotice}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
