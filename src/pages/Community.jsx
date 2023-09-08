import React from "react";
import "./Community.css";

function Community() {
  return (
    <div>
      <div class="vdo">
        <div class="vdo-content">
          <div>
            <h1>Community Visuals</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              esse culpa neque, sequi obcaecati magni quas incidunt atque unde
              autem voluptatem non ab accusantium sapiente nulla accusamus!
              Temporibus, officia ducimus?
            </p>
          </div>
          <div>
            <button class="our-team-btn">View All</button>
          </div>
        </div>
        <video width="1000" height="560" controls>
          <source
            src="https://cdn.pixabay.com/vimeo/176282263/sea-4006.mp4?width=640&hash=443d241d5fc3f7067553999f93dbe9a9b0034954"
            type="video/mp4"
          />
        </video>
        <div class="vdo-grp">
          <video width="300" height="200" controls>
            <source
              src="https://cdn.pixabay.com/vimeo/320725678/robin-21723.mp4?width=640&hash=e2653048f7fa01750562f72fb299cc7e93e2970f"
              type="video/mp4"
            />
          </video>
          <video width="300" height="200" controls>
            <source
              src="https://cdn.pixabay.com/vimeo/234530446/butterfly-12060.mp4?width=640&hash=19cfccfe4231bc4cf6cfad00795ed2233d140049"
              type="video/mp4"
            />
          </video>
          <video width="300" height="200" controls>
            <source
              src="https://cdn.pixabay.com/vimeo/363524230/wolf-27400.mp4?width=1280&hash=77befd62a5e9fee26b978c5e2b5a96e66e07b87e"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Community;
