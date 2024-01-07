import React from "react"

export default function SkillCard({ name, icon, description }) {
    return (
        <div class="col-lg-3 col-sm-6 col-12 g-0">
            <div class="card mb-3 border-0">
                <div class="row g-0">
                    <div class="col-md-3 d-flex text-success">
                        <img class={`rounded-start p-3 fs-1 fa-solid ${icon}`} alt={`${name} logo`}></img>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-4">{name}</h5>
                            <p class="card-text fs-8 text-secondary">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}