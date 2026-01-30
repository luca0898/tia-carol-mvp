import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import HowItWorks from "../components/HowItWorks";
import Tracks from "../components/Tracks";
import TrainingsCarousel from "../components/TrainingsCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Tracks />
        <TrainingsCarousel />
        <TestimonialsCarousel />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
