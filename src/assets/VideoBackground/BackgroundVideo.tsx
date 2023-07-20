// BackgroundVideo.js
import Network from "../Network.webm";

const BackgroundVideo = () => {
  return (
    <div className="-z-10 absolute w-screen h-screen">
      <video
        autoPlay
        muted
        loop
        className="z-0 absolute w-screen h-screen"
        >
        <source src="../Network.webm" type="video/webm" />
       
      </video>
    </div>
  );
};

export default BackgroundVideo;
