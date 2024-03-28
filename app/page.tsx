import About from '@/components/shared/About';
import Ansatte from '@/components/shared/Ansatte';
import Blogg from '@/components/shared/Blogg';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/shared/Hero';
import Produkter from '@/components/shared/Produkter';
import Promo from '@/components/shared/Promo';
import Prosjekter from '@/components/shared/Prosjekter';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Prosjekter />
      <Produkter />
      <Promo />
      <Ansatte />
      <Blogg />
      <Footer />
    </>
  );
}
