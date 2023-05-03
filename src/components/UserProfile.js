import React from "react";
import profile from "../components/Assets/profile.png";
import "./Universal.css";
import UserTimeline from "./UserTimeline";
import UserGallery from "./UserGallery";

const UserProfile = () => {
  return (
    <div>
      <div className="background-profile">
        <div className="profile-details">
          <div>
            <img src={profile} alt="" width={150} />
          </div>
          <div className="profile-name">
            <h6 className="fs-4">mahesh</h6>
            <h6 className="fs-6 text-primary">valusamahesh@mail.com</h6>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div>
          <UserTimeline />
        </div>
        <div>
          <UserGallery />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
