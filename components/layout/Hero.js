import React from "react"
import Navbar from "../elements/Navbar";

export default function Hero(props) {
    return (
        <div class="container-fluid vh-100 cust-hero p-0 ">
            <Navbar />
            <div class = "container" style={{ maxWidth: "1200px" }}>
                <div
                    class="container text-white d-flex flex-column  justify-content-between cust-hero-body"
                >
                    <div class="row"></div>
                    <div class="row m-0">
                        <p >I'm a</p>
                        <h1>Graduate student who switched to studying computer science.</h1>
                        <h3>Currently at</h3>
                        <p class="mt-3">Adelaide, Australia</p>
                    </div>
                    <div class="row"></div>
                </div>
                <div class="container d-flex justify-content-between w-50" >
                    <a
                        href="https://www.linkedin.com/in/lucas-su-758b4b10a/"
                        target="blank"
                        title="LinkedIn"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-linkedin"></i>
                        </span>
                    </a>
                    <a
                        href="https://github.com/LucasSuL"
                        target="blank"
                        title="GitHub"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-github"></i>
                        </span>
                    </a>
                    <a
                        href="https://www.strava.com/athletes/84823175"
                        target="blank"
                        title="Strava"
                        style={{ color: "white" }}
                    >
                        <span>
                            <i className="fab fa-2x fa-strava"></i>
                        </span>
                    </a>
                </div>
            </div>

        </div>
    );
}