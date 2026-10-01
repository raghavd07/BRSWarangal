import React from 'react';
import Navigation from './Navigation';
import brsBannerImg from '../assets/images/brs banner warangal.png';
import brsLogoImg from '../assets/images/BRS Logo.png';
import vinayBhaskarImg from '../assets/images/Vinay Bhaskar.png';
import ktrImg from '../assets/images/KTR.png';
import kcrImg from '../assets/images/KCR.png';
import telanganaThalliImg from '../assets/images/Telangana Thalli.png';
import amaraveerulaStupamImg from '../assets/images/amaraveerula Stupam.png';
import './Header.css';

export default function Header({ onOpenRegister, onOpenDonate }) {
  const leaders = [
    {
      name: 'D. Vinay Bhaskar',
      teluguName: 'డి. వినయ్ భాస్కర్',
      title: 'Constituency Leader',
      image: vinayBhaskarImg,
      alt: 'D. Vinay Bhaskar - BRS Warangal West'
    },
    {
      name: 'K. T. Rama Rao',
      teluguName: 'కె. టి. రామారావు',
      title: 'Working President',
      image: ktrImg,
      alt: 'K. T. Rama Rao - Working President BRS'
    },
    {
      name: 'K. Chandrashekar Rao',
      teluguName: 'కె. చంద్రశేఖర్ రావు',
      title: 'Founder & President',
      image: kcrImg,
      alt: 'K. Chandrashekar Rao - Founder & President BRS'
    }
  ];

  const heritageIcons = [
    {
      name: 'Telangana Thalli',
      teluguName: 'తెలంగాణ తల్లి',
      title: 'Cultural Pride',
      image: telanganaThalliImg,
      alt: 'Telangana Thalli - Sacred Symbol of Telangana',
      isTall: true
    },
    {
      name: 'Amaraveerula Stupam',
      teluguName: 'అమరవీరుల స్తూపం',
      title: 'Martyrs Memorial',
      image: amaraveerulaStupamImg,
      alt: 'Amaraveerula Stupam - Telangana Martyrs Memorial',
      isTall: false
    }
  ];

  return (
    <header className="site-header" id="top">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Dark-Green Accent Line */}
      <div className="header-top-accent-line" aria-hidden="true" />

      {/* Tier 1: Identity Section (White Background) */}
      <div className="header-identity-wrapper">
        <div className="container header-identity-container">
          
          {/* Left Side: BRS Party Warangal Banner & Logo */}
          <div className="header-brand-block">
            <a href="#top" className="brand-identity-link" aria-label="BRS Party Warangal West Homepage">
              <img 
                src={brsLogoImg} 
                alt="BRS Official Logo" 
                className="brand-circular-logo"
                loading="eager"
              />
              <img 
                src={brsBannerImg} 
                alt="Bharat Rashtra Samithi - Warangal West Banner" 
                className="brand-banner-img"
                loading="eager"
              />
            </a>
          </div>

          {/* Right Group: Leadership Portraits + Far Right Heritage Icons */}
          <div className="header-portraits-group">
            
            {/* Leadership Portraits (D. Vinay Bhaskar, KTR, KCR) */}
            <div className="header-leaders-block" aria-label="Key Leadership">
              {leaders.map((leader, index) => (
                <React.Fragment key={leader.name}>
                  <div className="leader-portrait-card">
                    <div className="leader-portrait-frame">
                      <img 
                        src={leader.image} 
                        alt={leader.alt}
                        className="leader-portrait-img"
                        loading="eager"
                      />
                    </div>
                    <div className="leader-info">
                      <span className="leader-name">{leader.name}</span>
                      <span className="leader-title">{leader.title}</span>
                    </div>
                  </div>

                  {/* Vertical separator between leadership portraits */}
                  {index < leaders.length - 1 && (
                    <div className="portrait-separator" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Section Separator between Leaders and Heritage */}
            <div className="section-separator" aria-hidden="true" />

            {/* Right Corner: Telangana Thalli and Amaraveerula Stupam */}
            <div className="header-heritage-block" aria-label="Telangana Heritage and Memorial">
              {heritageIcons.map((item, index) => (
                <React.Fragment key={item.name}>
                  <div className="heritage-portrait-card">
                    <div className={`heritage-portrait-frame ${item.isTall ? 'frame-thalli' : 'frame-stupam'}`}>
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        className="heritage-portrait-img"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {index < heritageIcons.length - 1 && (
                    <div className="portrait-separator" aria-hidden="true" />
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Tier 2: Magenta Navigation Bar */}
      <Navigation onOpenRegister={onOpenRegister} onOpenDonate={onOpenDonate} />
    </header>
  );
}
