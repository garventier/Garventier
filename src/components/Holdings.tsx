export default function Holdings() {
  return (
    <div className="section" id="holdings">
      <p className="label">Holdings</p>
      <p className="section-title">What we own</p>
      <p className="body-text">
        Our public market positions reflect conviction in the long-term
        trends shaping the global economy, and confidence in the teams
        leading those businesses. As our capital base matures, we intend to
        acquire select businesses outright — held permanently as private
        subsidiaries.
      </p>
      <div className="holdings">
        <div className="holding">
          <div className="holding-top">
            <span className="holding-name">GEQ</span>
            <span className="holding-status">ACTIVE</span>
          </div>
          <p className="holding-desc">
            Concentrated public equities. AI infrastructure and
            monetization layer, balanced with durable consumer compounders
            and real assets.
          </p>
          <span className="holding-type">Public equities</span>
        </div>
        <div className="holding">
          <div className="holding-top">
            <span className="holding-name">Infrastructure Acquisitions</span>
            <span className="holding-status">IN FORMATION</span>
          </div>
          <p className="holding-desc">
            Mid-market take-privates. Data, power, compute, connectivity.
          </p>
          <span className="holding-type">Private subsidiaries</span>
        </div>
      </div>
    </div>
  );
