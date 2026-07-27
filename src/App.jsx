import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <div className="bg-ink text-ivory min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
