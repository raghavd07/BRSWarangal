import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play, Calendar, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/slides';
import './HeroCarousel.css';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef(null);

  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay rotation every 5.5 seconds, paused on hover or user request
  useEffect(() => {
    if (isPaused || shouldReduceMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused, shouldReduceMotion]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;
    if (isSwipe) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 1.02
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'tween', duration: 0.5, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 }
      }
    },
    exit: (dir) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        x: { type: 'tween', duration: 0.5, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.3 }
      }
    })
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section 
      className="hero-carousel-section"
      aria-label="Recent Party Activities and Heritage Slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="carousel-stage">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="carousel-slide"
          >
            {/* Visual Backdrop */}
            <div className={`slide-backdrop-container ${currentSlide.type || ''}`}>
              {currentSlide.image ? (
                <div className="slide-image-wrapper">
                  <div className="slide-image-bg-blur" style={{ backgroundImage: `url(${currentSlide.image})` }} />
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.imageAlt}
                    className={`slide-primary-image ${currentSlide.isCultural ? 'contain-cultural' : ''}`}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ) : (
                <div className="slide-placeholder-pattern">
                  <div className="pattern-glow" />
                  <div className="pattern-symbol-ring">
                    <svg viewBox="0 0 100 100" className="pattern-svg">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(236,37,136,0.15)" strokeWidth="3" />
                      <circle cx="50" cy="50" r="15" fill="rgba(236,37,136,0.1)" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Dark Gradient Overlay for optimal readability */}
              <div className="slide-gradient-overlay" />
            </div>

            {/* Slide Text Content & Call-to-action */}
            <div className="container slide-content-container">
              <div className="slide-text-box">
                
                {/* Category & Date Badges */}
                <div className="slide-meta-row">
                  <span className="slide-category-tag">
                    {currentSlide.category}
                  </span>
                  {currentSlide.date && (
                    <span className="slide-date-tag">
                      <Calendar size={13} aria-hidden="true" />
                      {currentSlide.date}
                    </span>
                  )}
                </div>

                {/* Main Titles */}
                <h1 className="slide-title">
                  {currentSlide.title}
                </h1>
                
                {currentSlide.teluguTitle && (
                  <p className="slide-telugu-title">
                    {currentSlide.teluguTitle}
                  </p>
                )}

                {/* Subtitle / Caption */}
                <p className="slide-subtitle">
                  {currentSlide.subtitle}
                </p>

                {/* Action Link Button */}
                <div className="slide-action-row">
                  <a href={currentSlide.ctaLink} className="btn btn-primary slide-btn">
                    <span>{currentSlide.ctaText}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                  <a href="#about" className="btn btn-outline-white slide-btn-outline">
                    Warangal East Info
                  </a>
                </div>

              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Controls: Left/Right Arrows */}
        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={26} />
        </button>

        {/* Carousel Bottom Control Bar: Indicators & Pause/Play */}
        <div className="carousel-control-bar">
          <div className="carousel-indicators" role="tablist" aria-label="Slide Selection">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span className="indicator-fill" />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="carousel-pause-toggle"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume slideshow auto-rotation' : 'Pause slideshow auto-rotation'}
            title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>

      </div>
    </section>
  );
}
