import React from "react";
import gallery from "../components/Assets/gallery.png";
import fig1 from "../components/Assets/fig1.png";
import fig2 from "../components/Assets/fig2.png";
import fig3 from "../components/Assets/fig3.png";
import fig4 from "../components/Assets/fig4.png";

const UserGallery = () => {
  return (
    <div>
      <div className="gallery-background">
        <h4>Gallery</h4>
        <div className="">
          <img src={fig1} alt="" className="album"/>
          <img src={fig2} alt="" className="album"/>
          <img src={fig3} alt="" className="album"/>
        </div>
        <div className="">
          <img src={fig4} alt="" className="album"/>
          <img src={gallery} alt="" className="album"/>
          <img src={fig2} alt="" className="album"/>
        </div>
      </div>
      
    </div>
  );
};

export default UserGallery;
