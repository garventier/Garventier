"use client";
import { useEffect, useRef, useState } from "react";

const links = [["About", "about"], ["Holdings", "holdings"], ["Our approach", "thesis"], ["Insights", "insights"], ["Contact", "contact"]];
const values = [
["Permanence", "An indefinite horizon. The freedom to let exceptional businesses compound."],
["Partnership", "Shared ambition with founders, operators, and fellow shareholders."],
["Stewardship", "Thoughtful allocation and a responsibility to preserve long-term value."],
["Excellence", "Deep research, sound judgment, and continuous improvement."],
["Integrity", "Honest relationships. Clear commitments. Conviction in how we act."]
];
function Mark({ className = "" }: { className?: string }) {
return <svg className={className} viewBox="0 0 400 400" fill="currentColor" aria-hidden="true">
<path d="M157 299C139 284 151 260 172 232C201 189 257 151 307 75C279 110 213 150 163 211C147 231 134 251 127 267C136 245 126 225 139 198C137 215 142 220 143 227C141 197 151 173 171 152C164 170 165 185 167 194C165 164 179 137 205 119C193 137 191 153 191 165C202 133 222 110 250 102C233 116 226 131 225 145C245 105 273 99 293 88C313 78 322 64 325 45C333 79 337 106 326 128C315 153 286 171 262 180C290 173 313 166 326 151C322 181 307 199 279 206C251 212 229 213 217 221C241 214 275 223 308 207C296 234 279 247 249 249C222 248 199 252 181 264C204 256 222 258 241 257C259 257 272 255 285 250C268 272 245 282 219 282C190 284 172 289 157 299Z"/>
<path d="M16 311C66 268 101 280 145 304C166 316 180 316 206 305C273 273 312 272 369 311C313 287 280 298 222 324C183 341 162 333 124 314C82 291 50 296 16 311Z"/>
<path d="M27 335C80 300 112 319 155 337C191 352 210 343 250 327C295 307 327 311 356 334C307 320 279 337 237 353C202 369 172 370 135 352C94 332 64 324 27 335Z"/>
<path d="M59 361C95 345 121 358 155 371C193 385 217 381 255 366C282 354 306 350 327 362C288 360 262 383 222 393C171 406 147 388 116 376C91 365 75 361 59 361Z"/>
</svg>;
}
function Brand() { return <span className="brand"><Mark/><span>GARVENTIER</span></span>; }
export default function Home() {
const [open, setOpen] = useState(false);
const menuButton = useRef<HTMLButtonElement>(null);
const menuPanel = useRef<HTMLDivElement>(null);
useEffect(() => {
 const desktop = window.matchMedia("(min-width: 851px)");
 const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
 desktop.addEventListener("change", closeOnDesktop);
 return () => desktop.removeEventListener("change", closeOnDesktop);
}, []);
useEffect(() => {
 if (!open) return;
 const previous = document.body.style.overflow;
 document.body.style.overflow = "hidden";
 menuPanel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
 function key(e: KeyboardEvent) {
  if (e.key === "Escape") {setOpen(false); menuButton.current?.focus();}
  if (e.key === "Tab") {
   const items = [menuButton.current, ...Array.from(menuPanel.current?.querySelectorAll<HTMLAnchorElement>("a") || [])].filter(Boolean) as HTMLElement[];
   const current = items.indexOf(document.activeElement as HTMLElement);
   if (e.shiftKey && current === 0) {e.preventDefault(); items[items.length-1].focus();}
   if (!e.shiftKey && current === items.length-1) {e.preventDefault(); items[0].focus();}
  }
 }
 document.addEventListener("keydown", key);
 return () => {document.body.style.overflow = previous;document.removeEventListener("keydown", key);};
}, [open]);
return <>
<a className="skip-link" href="#main">Skip to content</a>
<header className="site-header"><div className="header-inner">
<a className="brand-link" href="#" aria-label="Garventier home"><Brand/></a>
<nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,id])=><a key={id} href={"#"+id}>{label}</a>)}</nav>
<button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open ? "Close" : "Menu"}<span className={open?"menu-icon is-open":"menu-icon"}><i/><i/></span></button>
</div></header>
{open && <div id="mobile-navigation" className="mobile-navigation" ref={menuPanel}><nav aria-label="Mobile navigation">{links.map(([label,id])=><a key={id} href={"#"+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav><p>Permanent capital.<br/>Lasting partnerships.</p><a className="menu-email" href="mailto:partners@garventier.com">partners@garventier.com</a></div>}
<main id="main">
<section className="hero">
<div className="hero-copy"><p className="eyebrow">Independent thinking. Permanent capital.</p><h1>We do not sell<br/><em>convictions.</em></h1><p className="hero-description">We invest in exceptional businesses and the people building them. With conviction, discipline, and the time to think in generations.</p><a className="button gold" href="#about">Discover Garventier</a></div>
<div className="hero-art"><div className="art-ring"/><Mark className="hero-mark"/><span className="art-caption">Built to endure.</span></div>
<div className="hero-bottom"><span>Garventier Capital · New York</span><a href="#about">Explore our perspective</a><span>Ownership without an expiry date</span></div>
</section>
<section id="about" className="section about-section"><div className="section-kicker"><span className="eyebrow">The firm</span><span className="small-note">A long-term owner</span></div>
<div className="about-grid"><h2>Good businesses.<br/>Great people.<br/><em>Time on our side.</em></h2><div className="prose"><p className="lead">Garventier Capital is a permanent capital investment firm built around a simple belief: exceptional businesses deserve patient ownership.</p><p>We acquire and hold concentrated ownership interests in public and private businesses. Our approach brings deep research, disciplined capital allocation, and enduring partnership together under an indefinite investment horizon.</p><p>We back the physical, digital, and commercial foundations of the global economy. What we own reflects what we believe, and our willingness to stay invested reflects the strength of that conviction.</p><a className="text-link" href="#thesis">How we think about ownership</a></div></div>
<div className="principles"><div><span>Our capital</span><strong>Permanent</strong></div><div><span>Our approach</span><strong>Concentrated</strong></div><div><span>Our perspective</span><strong>Generational</strong></div></div>
</section>
<section id="holdings" className="section holdings-section"><div className="section-kicker"><span className="eyebrow">Our holdings</span><span className="small-note">Conviction expressed through ownership</span></div><div className="section-heading"><h2>What we choose<br/><em>to own.</em></h2><p>Public market ownership today. A foundation for select private acquisitions over time.</p></div>
<div className="holdings-grid"><article className="holding-card"><div className="card-top"><span className="eyebrow">Public equities</span><span className="status">Active</span></div><h3>GEQ</h3><p>Concentrated public equities across the AI economy, durable consumer franchises, financial networks, and real assets.</p><div className="card-bottom">Deep research. Long-duration ownership.</div></article>
<article className="holding-card secondary"><div className="card-top"><span className="eyebrow">Private businesses</span><span className="status">In formation</span></div><h3>Infrastructure<br/>Acquisitions</h3><p>Our developing acquisition focus: data, power, compute, and connectivity, with the intention to hold exceptional businesses permanently.</p><div className="card-bottom">An enduring home for exceptional businesses.</div></article></div></section>
<section id="thesis" className="section thesis-section"><div className="section-kicker"><span className="eyebrow">Our investment thesis</span><span className="small-note">Look beneath the transformation</span></div><div className="thesis-grid"><div className="thesis-intro"><h2>Own the<br/><em>foundation.</em></h2><p>Every transformative era rests on businesses the world comes to depend on. We look for those foundations, and the economic strength to endure.</p><a className="text-link" href="mailto:partners@garventier.com">Discuss an opportunity</a></div><div className="thesis-list">{[
["AI infrastructure","Semiconductors, compute, and the physical architecture of the AI economy."],
["Power & energy","Generation and transmission capacity supporting growing compute demand."],
["Data & connectivity","Fiber, colocation, and the networks connecting the global economy."],
["Mid-market take-privates","Underattended public businesses with the potential for permanent private ownership."]
].map(([title,desc])=><article key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
<section id="values" className="section values-section"><div className="section-kicker"><span className="eyebrow">Our core values</span></div><h2>How we invest.<br/><em>How we act.</em></h2><div className="values-grid">{values.map(([title,desc])=><article key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
<section id="performance" className="section performance-section"><span className="eyebrow">Our measure of progress</span><div className="performance-grid"><h2>Compounding takes<br/><em>the long view.</em></h2><div><p className="lead">We measure progress over years, through the quality of our businesses and the growth of the capital entrusted to us.</p><p>For an overview of our public equities strategy and historical performance, contact the firm.</p><a className="text-link" href="mailto:partners@garventier.com?subject=Garventier%20strategy%20overview">Request a strategy overview</a><p className="disclaimer">Past performance is not indicative of future results.</p></div></div></section>
<section id="insights" className="section insights-section"><div className="section-kicker"><span className="eyebrow">Perspectives</span><span className="small-note">Ideas behind our convictions</span></div><div className="insight-grid"><div><h2>Thinking<br/><em>beyond the cycle.</em></h2><p>The structural shifts, enduring principles, and ownership mindset that shape our decisions.</p></div><details className="insight"><summary><span className="eyebrow">Investment perspective</span><h3>On inevitabilities:<br/>the framework behind<br/>our investments</h3><span className="read-label">Explore the framework <span aria-hidden="true">+</span></span></summary><div className="insight-body"><p>Our starting point is the foundation beneath a structural change: the businesses whose products, infrastructure, or networks make that change possible.</p><p>We combine that perspective with an assessment of economic durability, management quality, and price. A compelling theme alone is insufficient. We seek businesses we can understand deeply and own with discipline for the long term.</p></div></details></div></section>
<section id="contact" className="contact-section"><div><span className="eyebrow">Begin a conversation</span><h2>Some partnerships<br/><em>are built to last.</em></h2><p>For founders, operators, and partners who share a long-term perspective.</p><a className="contact-email" href="mailto:partners@garventier.com">partners@garventier.com</a></div><Mark className="contact-mark"/></section>
</main>
<footer className="site-footer"><a className="brand-link" href="#" aria-label="Garventier home"><Brand/></a><div><span>© {new Date().getFullYear()} Garventier Capital</span><span>New York</span><a href="#main">Back to top</a></div></footer>
</>;
}
