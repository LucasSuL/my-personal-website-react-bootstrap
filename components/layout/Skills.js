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
        <section class="container pt-4" id="skills" style={{ maxWidth: "1200px" }}>
            <h2 class="text-shorter fw-bold">Skills</h2>
            <div class="row">
                {skillCard}
            </div>
        </section>
    );
}