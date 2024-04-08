import "./App.css";
import NavBar from "./component/NavBar";
import Hero from "./pages/Hero";
import Icons from "./pages/Icons";
import CaseStudy from "./pages/CaseStudy";
import CTA from "./pages/CTA";
import Client from "./pages/Client";
import Testimonials from "./pages/Testimonials";
import Explore from "./pages/Explore";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <CTA />
      <Icons />
      <CaseStudy />
      <Client />
      <Testimonials />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
