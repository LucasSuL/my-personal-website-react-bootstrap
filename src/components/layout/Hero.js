import React from "react"
import Navbar from "../elements/Navbar"
import "../../styles/hero.css"

export default function Hero() {
    return (
        <section class="container-fluid vh-100 cust-hero p-0" >
            <Navbar />
            <div class="container " style={{ maxWidth: "1400px", paddingTop: "80px" }}>
                <div
                    class="container m-0 p-0 text-white d-flex flex-column justify-content-between cust-hero-body"
                >
                    <div class="row"></div>
                    <div class="row m-0 ">
                        <p>I'm a</p>
                        <h1 class="fw-bold text-header fs-0">Graduate student who switched to <span class="text-gold"> computer science.</span></h1>
                        <h3>Currently at</h3>
                        <p class="mt-3">Adelaide, Australia</p>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="container d-flex justify-content-evenly w-75" >
                    <a
                        href="https://www.linkedin.com/in/lucas-su-758b4b10a/"
                        target="_blank"
                        title="LinkedIn"
                        class = "hero-icon"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-linkedin"></i>
                        </span>
                    </a>
                    <a
                        href="https://github.com/LucasSuL"
                        target="_blank"
                        title="GitHub"
                        class = "hero-icon"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-github"></i>
                        </span>
                    </a>
                    <a
                        href="https://dev.to/lucassul"
                        target="_blank"
                        title="Dev"
                        class = "hero-icon"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-dev"></i>
                        </span>
                    </a>
                    <a
                        href="https://www.strava.com/athletes/84823175"
                        target="_blank"
                        title="Strava"
                        class = "hero-icon"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-strava"></i>
                        </span>
                    </a>
                </div>
            </div>

        </section>
    );
}