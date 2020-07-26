import React from "react";
//import "./backgroundVideo.module.css";
//import classes from "./backgroundVideo.module.css";

const BackgroundVideo = () => {
  return (
    <div>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        disablePictureInPicture
        controlsList="nodownload"
        className="background"
        style={{
          position: "absolute",
          width: "100%",
          //left: "50%",
          //top: "50%",
          height: "100%",
          objectFit: "cover",
          //transform: "translate(-50%, -50%)",
          zIndex: "-1",
          pointerEvents: "none",
        }}
      >
        <source src="video.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default BackgroundVideo;
