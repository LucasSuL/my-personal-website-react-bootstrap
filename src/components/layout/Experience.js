import React from "react"
import Data from "../../data.json"
import ExperienceCard from "../elements/ExperienceCard"
import "../../styles/timeline.css"

export default function Experience() {
    const experienceCard = Data.experience.map((value, index) => {
        return (
            <ExperienceCard
                key={index}
                {...value}
            />
        )
    })

    return (
        <section class="container pt-4" id="experience" style={{ maxWidth: "1200px" }}>
            <h2 class="text-shorter fw-bold">Experience</h2>
            <div class="tm-main">
                <div className="tm-header mb-2">
                    <span className="text-light p-2 px-3 rounded" style={{ backgroundColor: "#333" }}>
                        {new Date().getFullYear()}
                    </span>
                </div>
                <div class="container tm-container ">
                    {experienceCard}
                </div>
            </div>
        </section>
    );
}