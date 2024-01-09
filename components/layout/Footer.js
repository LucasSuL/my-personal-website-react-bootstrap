import React from "react"

export default function Footer(props) {
    return (
        <footer class="bg-dark text-center text-white p-5 mt-5">
            <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
            </section>
            <p>
                Built by{" "}
                <a
                    href="https://github.com/LucasSuL/my-personal-website-react-bootstrap" target="_blank" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    <strong>Lucas Su</strong>
                </a>
            </p>
            <div class="d-flex justify-content-center align-items-center mb-4 ">
                <span class=" text-secondary text-s-2">Made with</span>
                <div class="cust-foot">
                    <a href="https://getbootstrap.com/" target="_blank" class="text-decoration-none">
                        <i class="fa-brands fa-bootstrap fa-2xl ms-2 text-white "></i>
                    </a>
                </div>

            </div>
        </footer>
    );
}