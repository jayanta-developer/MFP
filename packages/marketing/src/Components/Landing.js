import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

//Images
import { Images } from "../../public/assets/Images";

export default function Landing() {
  const cardData = [1, 1, 1, 1, 1, 1];
  const Navigate = useNavigate();

  return (
    <>
      <div className="sectionBox">
        <h1>Home sectino</h1>

        
        <p>
          Great! If you're setting up a micro frontend architecture (using
          something like Webpack Module Federation), here’s a quick outline of
          how your container and remote apps should be structured — let me know
          if you'd like the complete setup.
        </p>
        <p>
          Let me know if this is part of a micro frontend setup using Module
          Federation (like Webpack 5), and I can show you a full working example
          for container + remote app structure.
        </p>

        <div className="sectionCardBox">
          {cardData?.map((_, i) => (
            <div key={i} className="productCard">
              <img src={Images.CardImg} />
              <p>Micro Frontend Container</p>
              <samp>
                {" "}
                here’s a quick outline of how your container and remote apps
                should be structured — let me know if you'd like the complete
                setup
              </samp>
              <button onClick={() => Navigate("/pricing")}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
