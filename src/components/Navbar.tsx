
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <img src="/logos/logo-gold.png" alt="Garventier" />
          <span>GARVENTIER</span>
        </div>

        <nav>
          <a href="#">Overview</a>
          <a href="#">About</a>
          <a href="#">Investments</a>
          <a href="#">Strategy</a>
          <a href="#">Insights</a>
          <a href="#">Contact</a>
        </nav>

        <a href="#" className="partner-btn">
          Partner Access
        </a>
      </div>
    </header>
  )
}
