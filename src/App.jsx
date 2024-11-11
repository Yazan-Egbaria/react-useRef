import { useRef } from "react";
import vid1 from "./assets/images/Reality of Frontend Developers.mp4";

export default function App() {
  const iFrame = useRef(null);

  const handlePlay = () => {
    iFrame.current.play();
  };

  const handlePause = () => {
    iFrame.current.pause();
  };

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-8">
      <video id="myVid" width="1000" height="720" ref={iFrame}>
        <source src={vid1} type="video/mp4" />
        Sorry, your browser does not support HTML5 video.
      </video>

      <div id="btns" className="flex gap-2">
        <button
          className="w-56 rounded border-2 border-emerald-500 bg-emerald-500 px-2 py-1 text-xl text-white transition-all duration-300 hover:bg-white hover:text-emerald-500"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="w-56 rounded border-2 border-emerald-500 bg-emerald-500 px-2 py-1 text-xl text-white transition-all duration-300 hover:bg-white hover:text-emerald-500"
          onClick={handlePause}
        >
          Pause
        </button>
      </div>
    </div>
  );
}
