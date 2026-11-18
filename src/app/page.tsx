import type { Metadata } from "next";
export const metadata: Metadata = {
 title: "Garventier | Under Maintenance",
 description: "The Garventier website is currently under maintenance. We will be back soon.",
 robots: { index: false, follow: false }
};
export default function Maintenance() {
 return <main className="maintenance">
 <div className="maintenance-content">
 <div className="wordmark">GARVENTIER</div>
 <div className="gold-rule" aria-hidden="true" />
 <p className="eyebrow">Website update</p>
 <h1>Under maintenance.</h1>
 <p className="message">We’re taking some time to build a better website.<br className="desktop-break"/> Thank you for your patience. We’ll be back soon.</p>
 <a href="mailto:partners@garventier.com">partners@garventier.com</a>
 </div>
 <footer>© 2026 Garventier Capital</footer>
 </main>;
}
