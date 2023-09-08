import React from "react";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div>
      <div className="our-team">
        <div className="our-team-text">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            urna id urna volutpat, in tincidunt metus dapibus. Nullam id justo
            nec lorem fringilla rhoncus Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed dapibus urna id urna volutpat, in tincidunt
            metus dapibus. Nullam id justo nec lorem fringilla rhoncus.
          </p>
          <button className="our-team-btn">View All</button>
        </div>
        <div className="our-team-img">
          <img
            className="our-team-img1"
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&fm=jpg"
            alt="Image"
            width="300px"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
