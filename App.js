import React from "react"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Hero from "./components/layout/Hero"
import About from "./components/layout/About"
import Skills from "./components/layout/Skills"
import Experience from "./components/layout/Experience"
import Articles from "./components/layout/Articles"
import Footer from './components/layout/Footer'


import "./public/App.css"

function App() {
    return (
        <div className='App'>
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