"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#values", label: "Core Values" },
  { href: "#holdings", label: "Holdings" },
  { href: "#performance", label: "Performance" },
  { href: "#thesis", label: "Investment Thesis" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <span className="logo">GARVENTIER</span>
        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div className={`menu-panel ${open ? "open" : ""}`}>
        <button
          className="menu-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}Update Navbar with mobile menu
