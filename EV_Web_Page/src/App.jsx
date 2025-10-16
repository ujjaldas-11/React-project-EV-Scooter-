import React, { useEffect, useRef } from 'react';
// import Navbar from './Componants/Navbar/Navbar';
import Home from './Componants/Home/home';
import Slider from './Componants/Slider/Slider';
// import Footer from './Componants/Footer/Footer';

export default function FutureEVsLanding() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s, transform 0.6s';
      observerRef.current.observe(card);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
    <div className="font-sans text-gray-900 overflow-x-hidden">
      {/* <Navbar /> */}
      <Slider/>
      <Home />
      {/* <Footer /> */}
    </div>
    </>
  );
}