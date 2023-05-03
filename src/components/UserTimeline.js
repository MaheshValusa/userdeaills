import React, { useState } from "react";

import profile from "../components/Assets/profile.png";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Modal from "react-modal";

const UserTimeline = () => {
  const [count, setCount] = useState(null);

  // const [image, setImage] = useState(null);
  const [show, setshow] = useState(false);

  const showmodal = () => {
    setshow(true);
  };

  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="timeline-background">
        <div className="timeline-button">
          <div>
            <h6>Timeline</h6>
          </div>

          <div>
            <input type="search" className="search-input" />
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => showmodal()}
              style={{ cursor: "pointer" }}
            >
              Add Post
            </button>
          </div>
        </div>
        <div className="timline-details">
          <div>
            <img src={profile} alt="" width={50} />
          </div>
          <div className="timeline-name">
            <h6 className="fs-6 text-primary">Aspencarder@gmail.com</h6>
          </div>
          <div className="react-icons">
            <BiDotsVerticalRounded size={20} />
          </div>
        </div>
        <p className="paragraph">
          {image && (
            <div>
              <p>{text}</p>
              <img src={image} alt="uploaded image" />
            </div>
          )}
        </p>
        <div>
          {/* <img src={post} alt="" />  */}
          {/* {image && <img src={URL.createObjectURL(image)} alt="Uploaded Image" multiple/>} */}

          <div></div>
        </div>
        <div className="like-comment">
          <AiFillLike className="like" onClick={() => setCount(count + 1)} />
          <p className="count">{count}</p>
          <FaRegCommentDots />
        </div>
      </div>
      <Modal
        isOpen={show}
        className="adjust-size"
        onRequestClose={() => setshow(false)}
      >
        <div>
          <div className="d-flex flex-column">
            {/* <input type="file" onChange={handleImageUpload} /> */}
            <textarea
              value={text}
              onChange={handleTextChange}
              className="text-area"
            />
            <input type="file" className="input" onChange={handleImageChange} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserTimeline;
