import React from "react"

export default function HobbyBadge({ name, icon }) {
    return (
        <div className="col">
            <div class="d-flex justify-content-center" style = {{height:"25px"}}>
                <div class="d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded-start-3 px-2 text-nowrap shadow-sm h-100 justify-content-center">{name}</div>
                <div class="d-flex bg-light rounded-end-3 shadow-sm h-100">
                    <i class={`fa-solid text-gray-light fs-7 ${icon} px-2 align-self-center`} ></i>
                </div>
            </div>
        </div>
    );
}