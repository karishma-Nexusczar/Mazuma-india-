"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-redesign-section" id="testimonials">
      <div className="testimonials-redesign-container">
        {/* Header */}
        <div className="testimonials-redesign-header">
          <div className="testimonials-eyebrow-badge">
            <span className="badge-dot"></span>
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="testimonials-redesign-title">
            What Our Clients Say About Mazuma India
          </h2>
          <p className="testimonials-redesign-desc">
            Trusted by businesses across India for reliable tax, compliance and business advisory services.
          </p>
        </div>

        {/* Cards Grid / Slider Wrapper */}
        <div
          className="testimonials-cards-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* DESKTOP VIEW: All 3 Testimonials in 1 Single Row */}
          <div className="testimonials-grid-desktop">
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className={`testimonial-redesign-card ${idx === activeIndex ? "is-active-card" : ""}`}
              >
                <div className="testimonial-card-top">
                  <div className="quote-icon-box">
                    <Quote size={20} className="quote-icon-svg" />
                  </div>
                  <div className="star-rating-row">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FF6B1A" color="#FF6B1A" />
                    ))}
                  </div>
                </div>

                <p className="testimonial-quote-text">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="testimonial-client-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="client-avatar-img"
                  />
                  <div className="client-info">
                    <h4 className="client-name">{item.name}</h4>
                    <p className="client-role">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE VIEW: Single Active Card Carousel with Left & Right Arrows */}
          <div className="testimonials-mobile-carousel">
            <button
              className="testimonial-mobile-arrow testimonial-mobile-prev"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                className="testimonial-redesign-card testimonial-mobile-active-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-card-top">
                  <div className="quote-icon-box">
                    <Quote size={20} className="quote-icon-svg" />
                  </div>
                  <div className="star-rating-row">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FF6B1A" color="#FF6B1A" />
                    ))}
                  </div>
                </div>

                <p className="testimonial-quote-text">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </p>

                <div className="testimonial-client-row">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="client-avatar-img"
                  />
                  <div className="client-info">
                    <h4 className="client-name">{testimonials[activeIndex].name}</h4>
                    <p className="client-role">{testimonials[activeIndex].designation}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="testimonial-mobile-arrow testimonial-mobile-next"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Desktop Left / Right Navigation Arrows */}
          <button
            className="testimonial-nav-arrow testimonial-nav-prev desktop-only-arrow"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="testimonial-nav-arrow testimonial-nav-next desktop-only-arrow"
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
