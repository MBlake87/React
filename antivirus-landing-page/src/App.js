import Hero from "./components/Hero";
import Features from "./components/Features";
import Protect from "./components/Protect";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <div>
        <Hero />
        <Features />
        <Protect />
        <Pricing />
        <div className="h-4 bg-gray-100"></div>
      </div>
    </>
  );
}

export default App;
