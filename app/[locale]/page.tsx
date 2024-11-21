// pages/home.tsx or components/Home.tsx
import { useTranslations } from 'next-intl';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Slider from "@/components/slider/Slider";
import Gallery from "@/components/Gallery/Gallery";
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

const Home = () => {

  

 

  return (
    <div>
      <Hero />
      <About  />
      <Services />
      <Slider  />
      <Gallery  />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
