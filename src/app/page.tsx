import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Holdings from "@/components/Holdings";
import Performance from "@/components/Performance";
import Thesis from "@/components/Thesis";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="wrap">
      <Navbar />
      <Hero />
      <About />
      <CoreValues />
      <Holdings />
      <Performance />
      <Thesis />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
