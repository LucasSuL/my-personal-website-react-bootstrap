import React from "react"

export default function ArticleCard({ title, description, date, url, image }) {
    return (
        <div class="col-lg-3 col-sm-6 col-12 p-2">
            <div class="card shadow-sm bg-body-tertiary rounded">
                <div class="row p-3">
                    <a class="col-10 fw-bold fs-5 link-dark" href={url} target="_blank" style={{style:"none"}}>
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
                        <h6 class="card-subtitle mb-2 text-body-secondary fs-7">{date}</h6>
                        <a href={url} class="card-link fs-7">Read the full article</a>
                    </div>

                </div>
            </div>
        </div>

    );
}