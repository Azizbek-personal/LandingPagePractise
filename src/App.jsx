import Header from "./components/Header";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Solution from "./components/Solution";

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
    </div>
  );
}
