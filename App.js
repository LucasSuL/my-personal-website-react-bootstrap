import React from "react"

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
            {/* <div className="container">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-light">Light</button>
                <button type="button" class="btn btn-dark">Dark</button>
                <button type="button" class="btn btn-custom-color">Dark</button>

                <button type="button" class="btn btn-link">Link</button>
            </div> */}
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