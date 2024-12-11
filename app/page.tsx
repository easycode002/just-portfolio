import About from "./about/page";
import { Footer } from "./components/molecules/footer";
import Contact from "./contact/page";
import Home from "./home/page";
import Portfolio from "./portfolio/page";
import Resume from "./resume/page";
import { Skill } from "./skills/page";

export default function App() {
  return (
    <div className="flex w-full justify-center min-h-screen bg-background">
      <main className="font-ubuntulight w-full max-w-screen-2xl mx-auto">
        {/* Section - Home */}
        <section className="w-full">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-16">
            <Home />
          </div>
        </section>

        {/* Section - About */}
        <section className="w-full">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
            <About />
          </div>
        </section>

        {/* Section - Resume */}
        <section className="w-full">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
            <Resume />
          </div>
        </section>

        {/* Section - Skill */}
        <section className="w-full bg-gray-200">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
            <Skill />
          </div>
        </section>
        {/* Section - Portfolio */}
        <section className="w-full bg-gray-200">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
            <Portfolio />
          </div>
        </section>
        {/* Section - Contact */}
        <section className="w-full bg-gray-200">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16">
            <Contact />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
