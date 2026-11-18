import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garventier | Under Maintenance",
  robots: { index: false, follow: false },
};

export default function Maintenance() {
  return (
    <main>
      <p className="wordmark">GARVENTIER</p>
      <h1>Under maintenance</h1>
      <a href="mailto:partners@garventier.com">partners@garventier.com</a>
    </main>
  );
}
