import React from "react";
import "./AcadmyContent.css";

function AcadmyContent() {
  return (
    <div>
      <div className="content">
        <div className="text">
          <button className="btn1">Join Us</button>
          <h1>Welcome to My Webpage</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
            urna id urna volutpat, in tincidunt metus dapibus. Nullam id justo
            nec lorem fringilla rhoncus.
          </p>
          <button className="btn2">View Our Work</button>
        </div>
        <div className="img">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/117/798/desktop-wallpaper-whatsapp-dp-in-2021-instagram-dp-boys-thumbnail.jpg"
            alt="Image"
            width="250px"
            height="350px"
          />
        </div>
      </div>
    </div>
  );
}

export default AcadmyContent;
