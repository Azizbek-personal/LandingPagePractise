import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Solution from "./components/Solution";
import Analys from "./components/Analys.jsx";
import Security from "./components/Security.jsx";
import Software from "./components/Software.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Partner />
      </section>
      <section>
        <Solution />
      </section>
      <section>
        <Analys />
      </section>
      <section>
        <Security />
      </section>
      <section>
        <Software />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
