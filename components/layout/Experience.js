import React from "react"

export default function Experience(props) {
    return (
        <div>
            <div class="section section-md py-5">
                <header className="timeline-header">
                    <span className="tag is-medium is-dark">
                        {new Date().getFullYear()}
                    </span>
                </header>
                <div className="timeline-item">
                    <div className="timeline-marker is-success"></div>
                    <div className="timeline-content"></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 text-center mx-auto">
                            <div class="mb-5">
                                <a href="https://themesberg.com">
                                    <img src="https://themesberg.com/img/brand/themesberg-logo.svg" alt="Logo Themesberg Light" class="mb-4" ></img>
                                    <h1 class="h3 mb-4">Themesberg</h1>
                                </a>
                                <h6 class="font-weight-bold"><a href="https://themesberg.com/product/ui-kits/pixel-pro-premium-bootstrap-4-ui-kit" target="_blank" class="btn mr-2 mb-2 btn-tertiary animate-up-2">Get timelines</a></h6>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-10 mx-auto">
                            <div class="timeline timeline-one">
                                <div class="timeline-item">
                                    <span class="icon icon-info icon-lg"><i class="fab fa-react"></i></span>
                                    <h5 class="my-3">React</h5>
                                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.</p>
                                </div>
                                <div class="timeline-item">
                                    <span class="icon icon-secondary"><i class="fab fa-vuejs"></i></span>
                                    <h5 class="my-3">VueJs</h5>
                                    <p>Bootstrap. Build responsive, mobile-first projects on the web with the world's most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas.</p>
                                </div>
                                <div class="timeline-item">
                                    <span class="icon icon-danger"><i class="fab fa-angular"></i></span>
                                    <h5 class="my-3">Angular</h5>
                                    <p>AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}