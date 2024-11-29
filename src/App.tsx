import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Services from "./components/Services.tsx";
import Process from "./components/Process.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Reviews from "./components/Reviews.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Portfolio from "./components/Portfolio.tsx";
import ContactUs from "./components/ContactUs.tsx";


const App: React.FC = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <Process />
        <AboutUs />
        <Portfolio />
        <Reviews />
        <ContactUs />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
