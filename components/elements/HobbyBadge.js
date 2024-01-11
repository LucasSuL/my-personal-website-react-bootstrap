import React from "react"

export default function HobbyBadge({ name, icon }) {
    return (
        <div className="col">
            <div class="d-flex align-items-center justify-content-center">
                <div class="bg-dark bg-opacity-50 py-1 rounded-start-3 px-2 text-nowrap fw-bold shadow-sm">{name}</div>
                <div class="d-flex bg-light rounded-end-3 shadow-sm">
                    <div class={`fa-solid text-gray-light fs-7 ${icon} p-1 px-2`} ></div>
                </div>
            </div>
        </div>
    );
}