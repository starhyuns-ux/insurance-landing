
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { InsuranceAudit } from './components/sections/InsuranceAudit';
import { InsuranceDiet } from './components/sections/InsuranceDiet';
import { Comparison } from './components/sections/Comparison';
import { Insurers } from './components/sections/Insurers';
import { FAQ } from './components/sections/FAQ';
import { AiAssistant } from './components/sections/AiAssistant';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Insurers />
        <InsuranceAudit />
        <InsuranceDiet />
        <Comparison />
        <FAQ />
        <AiAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

