"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
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
          {/* Left Arrow Button */}
          <button
            className="testimonial-nav-arrow testimonial-nav-prev"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="testimonials-grid-3cols">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeSlide;
              return (
                <motion.article
                  key={item.id}
                  className={`testimonial-redesign-card ${isActive ? "is-active-slide" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="testimonial-card-top">
                    <div className="quote-icon-box">
                      <Quote size={20} className="quote-icon-svg" />
                    </div>
                    <div className="star-rating-row">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FF6B1A" color="#FF6B1A" />
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
                </motion.article>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            className="testimonial-nav-arrow testimonial-nav-next"
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
