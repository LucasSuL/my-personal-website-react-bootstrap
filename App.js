import React from "react"
import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero"
import About from "./components/layout/About"
import Skills from "./components/layout/Skills"
import Experience from "./components/layout/Experience"
import Articles from "./components/layout/Articles"
import Footer from './components/layout/Footer'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Articles />
            <Footer />
        </div>
    )
}

export default App;