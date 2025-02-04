import React from "react";

const MainTittle = ({
  text,
  center = true,
}: {
  text: string;
  center?: boolean;
}) => {
  return (
    <h1
      className="font-bold text-[30px]"
      style={{ textAlign: center ? "center" : "left" }}
    >
      {text}
    </h1>
  );
};

export default MainTittle;
