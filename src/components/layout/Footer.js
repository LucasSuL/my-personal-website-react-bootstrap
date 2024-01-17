import React from "react"
import "../../../public/footer.css"

export default function Footer() {
    return (
        <div class="container-fluid text-bg-dark mt-5 d-flex justify-content-center">
            <footer class="col container py-5" style={{ maxWidth: "1200px" }}>
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Nav-link</h5>
                        <ul class="nav flex-column">
                            <li class="footer-item mb-2"><a href="#" class="nav-link p-0 text-secondary text-light-hover">Home</a></li>
                            <li class="footer-item mb-2"><a href="#about" class="nav-link p-0 text-secondary">About me</a></li>
                            <li class="footer-item mb-2"><a href="#skills" class="nav-link p-0 text-secondary">Skills</a></li>
                            <li class="footer-item mb-2"><a href="#experience" class="nav-link p-0 text-secondary">Experience</a></li>
                            <li class="footer-item mb-2"><a href="#articles" class="nav-link p-0 text-secondary">Articles</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>About</h5>
                        <ul class="nav flex-column">
                            <li class="footer-item mb-2"><a href="https://www.linkedin.com/in/lucas-su-758b4b10a/" class="nav-link p-0 text-secondary" target="_blank">LinkedIn</a></li>
                            <li class="footer-item mb-2"><a href="#https://github.com/LucasSuL" class="nav-link p-0 text-secondary" target="_blank">GitHub</a></li>
                            <li class="footer-item mb-2"><a href="#https://dev.to/lucassul" class="nav-link p-0 text-secondary" target="_blank">Dev Community</a></li>
                            <li class="footer-item mb-2"><a href="#https://www.strava.com/athletes/84823175" class="nav-link p-0 text-secondary" target="_blank">Strava</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Downloads</h5>
                        <ul class="nav flex-column">
                            <li class="footer-item mb-2">
                                <a href="#" class="text-decoration-none text-secondary">
                                    My Resume{" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="footer-item mb-2">
                                <a href="#" class="text-decoration-none text-secondary">
                                    Urban Planner Portfolio{" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"></path>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column text-center pt-4 mt-4 border-top">
                    <p>
                        Built at <i class="fas fa-moon" /> by{" "}
                        <a
                            href="https://github.com/LucasSuL/my-personal-website-react-bootstrap" target="_blank" class="text-decoration-none text-light fw-bold text-header">
                            Lucas Su
                        </a>
                    </p>
                    <div class="d-flex justify-content-center align-items-center mb-4 ">
                        <span class=" text-secondary text-s-2">Made with</span>
                        <div class="cust-foot">
                            <a href="https://getbootstrap.com/" target="_blank" class="text-decoration-none">
                                <i class="fa-brands fa-bootstrap fa-2xl ms-2 text-white fs-3"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}