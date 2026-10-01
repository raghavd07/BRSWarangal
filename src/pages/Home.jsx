import React, { useState } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import MediaCategoryStrip from '../components/MediaCategoryStrip';
import NewsSection from '../components/NewsSection';
import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';
import LeadershipSection from '../components/LeadershipSection';
import ConstituencyOverview from '../components/ConstituencyOverview';
import JoinDonateSection from '../components/JoinDonateSection';
import EventsSection from '../components/EventsSection';
import Footer from '../components/Footer';
import RegistrationModal from '../components/RegistrationModal';
import DonationModal from '../components/DonationModal';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <div className="homepage-wrapper">
      {/* Two-Tier Header: Identity + Navigation with Action Handlers */}
      <Header 
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Section 1: Hero Carousel Slideshow */}
        <HeroCarousel />

        {/* Section 2: Media Category Strip (NEWS | PHOTOS | VIDEOS) */}
        <MediaCategoryStrip />

        {/* Section 3: Latest News & Announcements */}
        <NewsSection />

        {/* Section 4: Photo Gallery Preview */}
        <PhotoGallery />

        {/* Section 5: Video Gallery Preview */}
        <VideoGallery />

        {/* Section 6: Constituency Leadership (D. Vinay Bhaskar, KTR, KCR) */}
        <LeadershipSection />

        {/* Section 7: About Warangal West Constituency */}
        <ConstituencyOverview />

        {/* Section 8: Citizen Action & Support (Register Membership & Online Contribution) */}
        <JoinDonateSection 
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenDonate={() => setIsDonateOpen(true)}
        />

        {/* Section 9: Upcoming Elections & Events Preview */}
        <EventsSection />
      </main>

      {/* Full-Width Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

      {/* Interactive Donation / Contribution Modal */}
      <DonationModal 
        isOpen={isDonateOpen} 
        onClose={() => setIsDonateOpen(false)} 
      />
    </div>
  );
}
