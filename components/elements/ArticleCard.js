import React from "react"

export default function ArticleCard({ title, description, date, url, image }) {
    return (
        <div class="col p-3">
            <div class="row card shadow-sm bg-body-tertiary rounded h-100">
                <div class="d-flex p-3">
                    <a class="col-10 align-self-center clamp-two-lines fw-bold text-header fs-5 lh-sm link-dark text-decoration-none" href={url} target="_blank" >
                        {title}
                    </a>
                    <div class="col-2 align-self-center fs-6">
                        <i className="fab fa-2x fa-dev"></i>
                    </div>
                </div>

                <div class="card-body p-0">
                    <img class="w-100" src={image} ></img>
                    <div className="p-2 px-4 pb-3">
                        <p class="card-text">{description}</p>
                        <h6 class="card-subtitle  text-body-secondary fs-8">{date}</h6>
                    </div>
                </div>
                <div class="card-footer">
                    <a href={url} class="card-link fs-7 text-decoration-none">Read the full article</a>
                </div>
            </div>
        </div>

    );
}