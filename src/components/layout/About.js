import React from "react";

import portrait from "../../../public/images/lucassu.jpg";
import Data from "../../data.json";
import HobbyBadge from "../elements/HobbyBadge";

export default function About() {
  const hobbies = Data.hobbies.map((value, index) => {
    return <HobbyBadge key={index} {...value} />;
  });

  return (
    <section
      class="container-fluid d-flex flex-column align-items-center text-bg-success p-4"
      id="about"
    >
      <img
        width="180px"
        height="180px"
        src={portrait}
        alt="Lucas Su"
        class="rounded-circle my-3 border border-success-subtle border-4 shadow"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Resume.basics.x_pictureFallback;
        }}
      />
      <div class="container d-flex flex-column align-items-center">
        <h3 class="fw-bold mb-3 text-center">
          Hello there! I'm pleased you discovered my profile.
        </h3>
        <p class="fw-light fs-5 m-0">
          I have a background in urban planning, where I gained extensive
          experience working on various large-scale projects.
          <span>
            {" "}
            Visit the
            <span>
              <a
                href="#downloads"
                class="text-light ms-1 fw-bold link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                download section
              </a>
            </span>{" "}
            if you are interested in my portfolio as an Urban Planner.
          </span>
        </p>

        <p class="fw-light fs-5 m-0">
          Currently, I am pursuing a master's degree in computer science. By
          merging my insights from urban planning with my computer science
          skills, I aim to catalyze innovation and tackle challenges.
        </p>
        <p class="fs-5 mt-3">My goal is to become a :</p>
        <div class="fs-4 mt-3 d-flex flex-column align-items-center text-header">
          <p class="m-0">Front End Developer</p>
          <p class="m-0">Full Stack Developer</p>
          <p class="m-0">Product Manager</p>
        </div>
        <p class="fw-light fs-5 m-0"></p>
      </div>
      <div class="row row-cols-lg-5 g-2 fs-8 p-5 g-4">{hobbies}</div>
    </section>
  );
}
