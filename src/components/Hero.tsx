
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            Independent Investment Firm
          </span>

          <h1>
            Independent.<br />
            Aligned.<br />
            Enduring.
          </h1>

          <p>
            Garventier invests with long-term discipline,
            global perspective, and aligned partnership.
          </p>

          <div className="hero-actions">
            <a href="#" className="gold-btn">
              Learn More
            </a>

            <a href="#" className="outline-btn">
              Partner Access
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/hero-column.jpg" alt="Garventier" />
        </div>
      </div>
    </section>
  )
}
