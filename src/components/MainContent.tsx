import Home from "@/components/Home"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"


const MainContent = () => {
  return (
    <div className="md:container ">
      <main className="px-5 sm:px-[8rem] overflow-x-hidden 2xl:border-r 2xl:border-l">
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default MainContent