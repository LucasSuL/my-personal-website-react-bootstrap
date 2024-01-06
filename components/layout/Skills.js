import React from "react"
import SkillCard from "../elements/SkillCard"
import Data from "../../data.json"

export default function Skills() {
    const skillCard = Data.skills.map((item) => {
        return <SkillCard
            index={item.id}
            {...item}
        />
    })
    return (
        <div class="container mt-4">
            <h2 class="fw-bold">Skills</h2>
            {/* <img src= alt="Custom Icon" /> */}

            <div class="row">
                {skillCard}
            </div>

        </div>
    );
}