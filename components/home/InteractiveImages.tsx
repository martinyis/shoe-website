import React from "react";
import InteractiveShoe from "./InteractiveShoe";
import InteractiveHandBag from "./InteractiveHandBag";
import { Slide } from "react-awesome-reveal";

const InteractiveImages = () => {
  return (
    <Slide direction="up" duration={2000} damping={0.2} triggerOnce>
      <div className="flex items-center justify-center md:flex-col md:gap-y-[70px]">
        <InteractiveShoe />
        <InteractiveHandBag />
      </div>
    </Slide>
  );
};

export default InteractiveImages;
