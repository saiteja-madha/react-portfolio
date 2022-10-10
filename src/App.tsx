import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import SocialIcons from "./components/SocialIcons";

export default function App() {
    return (
        <div id="app" className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            <Navbar />
            <SocialIcons />
            <section id="hero" className="snap-start">
                <Hero />
            </section>
            <section id="about" className="snap-center">
                <About />
            </section>
        </div>
    );
}
