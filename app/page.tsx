import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ScrollBlur from "./components/ScrollBlur";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollBlur>
        <Services />
      </ScrollBlur>
      <ScrollBlur>
        <Process />
      </ScrollBlur>
      <ScrollBlur>
        <Testimonials />
      </ScrollBlur>
      <ScrollBlur>
        <CallToAction />
      </ScrollBlur>
      <ScrollBlur>
        <Footer />
      </ScrollBlur>
    </main>
  );
}
