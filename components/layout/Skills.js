import React from "react"
import SkillCard from "../elements/SkillCard"
import Data from "../../data.json"

export default function Skills() {
    const skillCard = Data.skills.map((value, index) => {
        return <SkillCard
            key={index}
            {...value}
        />
    })
    return (
        <div class="container mt-5" id="skills">
            <h2 class="text-shorter fw-bold">Skills</h2>
            <div class="row">
                {skillCard}
            </div>
        </div>
    );
}