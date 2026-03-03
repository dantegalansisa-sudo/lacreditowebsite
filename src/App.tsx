import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import LogosSection from './sections/LogosSection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import CEOSection from './sections/CEOSection';
import LoansSection from './sections/LoansSection';
import WhyUsSection from './sections/WhyUsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogosSection />
      <ServicesSection />
      <StatsSection />
      <CEOSection />
      <LoansSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
