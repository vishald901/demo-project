import React from "react";
import "./Inspiration.css";

function Inspiration() {
  return (
    <div>
      <div className="insp">
        <div className="insp-content">
          <div>
            <h1>Inspiration Corner</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              suscipit alias dolorum, nesciunt dolores porro optio facere et
              dolorem provident quod quisquam, aut at accusamus distinctio?
              Tenetur voluptatem doloremque inventore!
            </p>
          </div>
          <div>
            <button className="our-team-btn">View All</button>
          </div>
        </div>
      </div>

      <div className="div-slider">
        <div className="slider-container">
          <div className="slider">
            <div className="slide previous-slide">
              <img
                className="img-slider"
                src="https://media.gettyimages.com/id/459214425/photo/perfect-butterfly-stroke.jpg?s=612x612&w=0&k=20&c=Nw9AZt1hKid0omIjQjli9r7tvYIqcnizhGHKweHsduE="
                alt="Image 1"
              />
            </div>
            <div className="slide current-slide">
              <img
                className="img-slider"
                src="https://media.gettyimages.com/id/1081891908/photo/little-boy-swimming-crawl-in-pool.jpg?s=612x612&w=0&k=20&c=_3GmzSiIMtqgcPWi2zsz58nBhUQEiEuJSZN61voNeVo="
                alt="Image 2"
              />
            </div>
            <div className="slide next-slide">
              <img
                className="img-slider"
                src="https://media.gettyimages.com/id/82726781/photo/swimmer-performing-butterfly-stroke.jpg?s=612x612&w=0&k=20&c=4rUyzoq-PqA7pgpKqgdE0_Ex4VDuWsGP4IMEpCJ7d4I="
                alt="Image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
