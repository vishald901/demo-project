import React from "react";
import Navbar from "../components/Navbar";
import AcadmyContent from "../components/AcadmyContent";
import "./AcadmyPage.css";

function AcadmyPage() {
  return (
    <div>
      <video className="vdo-bg" autoplay loop muted playsinline>
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Navbar />
      <AcadmyContent />
    </div>
  );
}

export default AcadmyPage;
