import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}

export default App;
