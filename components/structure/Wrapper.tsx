import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] px-10 mx-auto  md:px-5">{children}</div>
  );
};

export default Wrapper;
