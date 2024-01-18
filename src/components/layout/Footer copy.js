import React from "react"
import "../../styles/footer.css"
import resume from "../../../public/Resume Jan 2024.pdf"
import transcript from "../../../public/Transcript Jan 2024.pdf"
import portfolio from "../../../public/Portfolio_Su Lijie 2022.2_compressed.pdf"
import pianoComposition from "../../../public/Starry Night（composed as an amateur in high school).pdf"

export default function Footer() {
    return (
        <div class="container-fluid text-bg-dark mt-5 d-flex justify-content-center">
            <footer class="col container py-5" style={{ maxWidth: "1200px" }}>
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <h5>Nav-link</h5>
                        <ul class="flex-column list-unstyled">
                            <li class="mb-2"><a href="#" class=" p-0 text-secondary text-decoration-none">Home</a></li>
                            <li class="mb-2"><a href="#about" class="p-0 text-secondary text-decoration-none">About me</a></li>
                            <li class="mb-2"><a href="#skills" class="p-0 text-secondary text-decoration-none">Skills</a></li>
                            <li class="mb-2"><a href="#experience" class="p-0 text-secondary text-decoration-none">Experience</a></li>
                            <li class="mb-2"><a href="#articles" class="p-0 text-secondary text-decoration-none">Articles</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>About</h5>
                        <ul class="flex-column list-unstyled">
                            <li class="mb-2"><a href="https://www.linkedin.com/in/lucas-su-758b4b10a/" class="p-0 text-secondary text-decoration-none" target="_blank">LinkedIn <i class="bi bi-arrow-up-right fs-8"></i></a></li>
                            <li class="mb-2"><a href="https://github.com/LucasSuL" class="p-0 text-secondary text-decoration-none" target="_blank">GitHub <i class="bi bi-arrow-up-right fs-8"></i></a></li>
                            <li class="mb-2"><a href="https://dev.to/lucassul" class="p-0 text-secondary text-decoration-none" target="_blank">Dev Community <i class="bi bi-arrow-up-right fs-8"></i></a></li>
                            <li class="mb-2"><a href="https://www.strava.com/athletes/84823175" class="p-0 text-secondary text-decoration-none" target="_blank">Strava <i class="bi bi-arrow-up-right fs-8"></i></a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5 id="downloads">Downloads</h5>
                        <ul class="flex-column list-unstyled">
                            <li class="mb-2"><a href={resume} download class="p-0 text-secondary text-decoration-none">My Resume <i class="bi bi-download"></i></a></li>
                            <li class="mb-2"><a href={transcript} download class="p-0 text-secondary text-decoration-none">Graduate Transcript <i class="bi bi-download"></i></a></li>
                            <li class="mb-2"><a href={portfolio} download class="p-0 text-secondary text-decoration-none">Urban Planner Portfolio <i class="bi bi-download"></i></a></li>
                            <li class="mb-2"><a href={pianoComposition} download class="p-0 text-secondary text-decoration-none">My Piano Composition <i class="bi bi-download"></i></a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form name = "submit-to-google-sheet">
                            <h5 class="mb-2">Leave a message</h5>
                            <div class="d-flex flex-column w-100 gap-2" style={{ maxWidth: "400px" }}>
                                <div class="mb-2">
                                    <label for="exampleFormControlInput1" class="form-label visually-hidden">Email address</label>
                                    <input type="email" class="form-control" name="Name" id="exampleFormControlInput1" placeholder="Email address"/>
                                </div>
                                <div class="mb-2">
                                    <label for="exampleFormControlTextarea1" class="form-label visually-hidden">Example textarea</label>
                                    <textarea class="form-control" name="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button class="btn btn-primary" type="button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column text-center pt-4 mt-4 border-top border-secondary">
                    <p>
                        Built at <i class="fas fa-moon" /> by{" "}
                        <a
                            href="https://github.com/LucasSuL/my-personal-website-react-bootstrap" target="_blank" class="text-decoration-none text-light fw-bold text-header">
                            Lucas Su
                        </a>
                    </p>
                    <div class="d-flex justify-content-center align-items-center mb-4 ">
                        <span class=" text-secondary text-s-2">Made with</span>
                        <a href="https://getbootstrap.com/" target="_blank" class="cust-foot">
                            <span><i class="fa-brands fa-bootstrap fa-2xl ms-2 text-white fs-3"></i></span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}