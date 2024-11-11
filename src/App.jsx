import React from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import MyTechStacks from "./components/MyTechStacks"
import Achievements from "./components/Achievements"

function App() {

  const [isDarkMode, setDarkMode] = React.useState(true);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
      />
      <Intro isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode}/>
      <Experience isDarkMode={isDarkMode}/>
      <Achievements isDarkMode={isDarkMode}/>
      <MyTechStacks isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  )
}

export default App
