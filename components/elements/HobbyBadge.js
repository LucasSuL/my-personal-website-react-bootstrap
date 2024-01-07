import React from "react"

export default function HobbyBadge({name, icon}) {
    return (
        <div class="d-flex align-items-center justify-content-center ">
            <div class="bg-dark bg-opacity-50 py-1 rounded-start-3 px-2">{name}</div>
            <div class="bg-light rounded-end-3">
                <div class={`fa-solid text-dark fs-7 ${icon} p-1 px-2`} ></div>
            </div>
        </div>

    );
}