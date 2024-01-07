import React from "react"
import Data from "../../data.json"
import ExperienceCard from "../elements/ExperienceCard"

export default function Experience(props) {
    const experienceCard = Data.experience.map((value, index) => {
        return (
            <ExperienceCard
                key={index}
                {...value}
            />
        )
    })

    return (
        <div class="container py-2" id="experience">
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
        </div>
    );
}