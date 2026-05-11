import { Header } from '../app/components/Header';
import { Hero } from '../app/components/Hero';
import { About } from '../app/components/About';
import { Skills } from '../app/components/Skills';
import { Projects } from '../app/components/Projects';
import { Contact } from '../app/components/Contact';
import { Footer } from 'react-day-picker';

export default function Home() {
  return (
    <>
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
  );
}
