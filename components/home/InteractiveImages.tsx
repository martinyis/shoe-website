import React from "react";
import InteractiveShoe from "./InteractiveShoe";
import InteractiveHandBag from "./InteractiveHandBag";

const InteractiveImages = () => {
  return (
    <div className="flex items-center justify-center">
      <InteractiveShoe />
      <InteractiveHandBag />
    </div>
  );
};

export default InteractiveImages;
