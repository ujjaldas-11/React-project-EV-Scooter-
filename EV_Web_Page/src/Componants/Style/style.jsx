import React from 'react'

function style() {
  return (
    <div>
        <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          line-height: 1.6;
        }

        /* Header */
        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid #e0e0e0;
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f3460;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #0f3460;
        }

        /* Hero Section */
        .hero {
          height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 2rem;
          margin-top: 70px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: white;
          color: #0f3460;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Features Section */
        .features {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        font-weight: 800;
        color: black;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeUp 1.2s ease-out forwards;
        }

        /* Keyframes for fade + slide-up effect */
        @keyframes fadeUp {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
        }


        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: #f9fafb;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid #e5e7eb;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .feature-card p {
          color: #6b7280;
          line-height: 1.8;
        }

        /* Specs Section */
        .specs {
          background: #1f2937;
          color: white;
          padding: 5rem 2rem;
        }

        .specs-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .spec-item {
          text-align: center;
        }

        .spec-value {
          font-size: 3rem;
          font-weight: 700;
          color: #53a8e2;
          margin-bottom: 0.5rem;
        }

        .spec-label {
          font-size: 1.1rem;
          opacity: 0.8;
        }

        /* Gallery Section */
        .gallery {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .gallery-item {
          height: 300px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s;
        }

        .gallery-item:hover {
          transform: scale(1.05);
        }

        /* Footer */
        footer {
          background: #1f2937;
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #53a8e2;
        }

        .footer-description {
          color: #9ca3af;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-list a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-list a:hover {
          color: white;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #374151;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: #9ca3af;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }

        .social-links a:hover {
          color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .spec-value {
            font-size: 2rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

export default style