import React from "react"

export default function ExperienceCard({ company, position, website, startDate, endDate, summary }) {
    let originalDate = new Date(startDate);
    let formattedDateStr = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(originalDate).toUpperCase();

    return (
        <div class="checkpoint">
            <div className="mb-2">
                <a href={`${website}`}
                    target="_blank"
                    rel="noreferrer"
                    class="fw-bold text-header fs-4 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                    {company}
                </a>
            </div>

            <h2 class="fs-6">{position}</h2>
            <p class="text-secondary text-m fs-7">{summary}</p>
            <span class="circle"></span>
            <span class="date fs-8 p-1 px-2 text-light rounded-pill"> {formattedDateStr}</span>
        </div>

    );
}