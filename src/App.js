import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Layout from "./components/layout";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)) {
        setIsDarkMode(true)
      }else {
        setIsDarkMode(false)
      }
    }, [])

    useEffect(() => {
      if(isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    }, [isDarkMode])

  return (
    <Layout>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <ScrollToTop isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </Layout>
  );
}

export default App;
