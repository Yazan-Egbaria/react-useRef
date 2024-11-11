import { useRef } from "react";
import mountain1 from "./assets/images/mountain1.jpg";
import mountain2 from "./assets/images/mountain2.jpg";
import sunset1 from "./assets/images/sunset1.jpg";
import sunset2 from "./assets/images/sunset2.jpg";

export default function App() {
  const mountain = useRef(null);
  const sunset = useRef(null);

  const handleColors = (ref, img) => {
    ref.current.src = img;
  };
  const handleBlack = (ref, img) => {
    ref.current.src = img;
  };

  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <img
        id="mountain"
        src={mountain2}
        alt=""
        className="cursor-pointer rounded transition-all duration-300"
        ref={mountain}
        onMouseEnter={() => {
          handleColors(mountain, mountain1);
        }}
        onMouseLeave={() => {
          handleBlack(mountain, mountain2);
        }}
      />
      <img
        id="sunset"
        src={sunset2}
        alt=""
        className="cursor-pointer rounded transition-all duration-300"
        ref={sunset}
        onMouseEnter={() => {
          handleColors(sunset, sunset1);
        }}
        onMouseLeave={() => {
          handleBlack(sunset, sunset2);
        }}
      />
    </div>
  );
}
