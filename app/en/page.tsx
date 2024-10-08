import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import Welcome from "./Welcome";
import Marquee from "./Marquee";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] relative">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Welcome />
      <Marquee />
      <Services />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
