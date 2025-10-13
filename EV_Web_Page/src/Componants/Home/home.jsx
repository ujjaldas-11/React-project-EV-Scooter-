import React from 'react'

function home() {
  return (
    <div>
        <section className="hero">
        <div className="hero-content">
          <h1>The Future of Electric Mobility</h1>
          <p>Experience unmatched performance, efficiency, and sustainability</p>
          <a href="#features" className="cta-button">Explore Now</a>
        </div>
      </section>

      <section className="features" id="features">
        <h2 className="section-title">Why Choose Electric?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Power</h3>
            <p>Experience immediate torque delivery with electric motors, providing smooth and powerful acceleration from a standstill.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Zero Emissions</h3>
            <p>Drive with a clear conscience knowing your vehicle produces zero tailpipe emissions, reducing your carbon footprint.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔋</div>
            <h3>Long Range</h3>
            <p>Advanced battery technology provides extended range on a single charge, perfect for daily commutes and weekend adventures.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Lower Costs</h3>
            <p>Save money on fuel and maintenance with fewer moving parts and cheaper electricity compared to gasoline.</p>
          </div>
        </div>
      </section>

      <section className="specs" id="specs">
  <div className="specs-container">
    <h2 className="section-title">Budget EV Scooter Specs</h2>
    <div className="specs-grid">
      <div className="spec-item">
        <div className="spec-value"> km/h</div>
        <div className="spec-label">Top Speed</div>
      </div>
      <div className="spec-item">
        <div className="spec-value"> km</div>
        <div className="spec-label">Range per Charge</div>
      </div>
      <div className="spec-item">
        <div className="spec-value"> hrs</div>
        <div className="spec-label">Charging Time</div>
      </div>
      <div className="spec-item">
        <div className="spec-value"> kWh</div>
        <div className="spec-label">Battery Capacity</div>
      </div>
    </div>
  </div>
</section>


      <section className="gallery" id="gallery">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
        </div>
      </section>
    </div>
  )
}

export default home