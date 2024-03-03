import React from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </>
  )
}

export default App
