import React from "react";
import Image from "next/image";
const YwarmLogo = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <Image
      src="/images/products/ywarmlogo.svg"
      alt="Ywarm Logo"
      width={width || 50}
      height={height || 50}
    />
  );
};

export default YwarmLogo;
