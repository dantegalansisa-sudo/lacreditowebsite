import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import LogosSection from './sections/LogosSection';
import ProcessSection from './sections/ProcessSection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import CalculatorSection from './sections/CalculatorSection';
import CEOSection from './sections/CEOSection';
import LoansSection from './sections/LoansSection';
import WhyUsSection from './sections/WhyUsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogosSection />
      <ProcessSection />
      <ServicesSection />
      <StatsSection />
      <CalculatorSection />
      <CEOSection />
      <LoansSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
