import React from "react";
import Image from "next/image";

type ProductDetailsProps = {
  imageUrl: string;
  altText: string;
  description: string;
};

const ProductDetails = ({
  imageUrl,
  altText,
  description,
}: ProductDetailsProps) => {
  return (
    <div className="flex lg:flex-col flex-row items-center gap-x-[64px] mt-[22px] mx-auto">
      {/* Image Section */}
      <div className="w-[50%] lg:w-full">
        <Image
          src={imageUrl}
          alt={altText}
          width={608}
          height={400}
          className="rounded-[26px] w-full h-auto"
        />
      </div>

      {/* Description Section */}
      <div className="lg:w-full w-1/2 flex flex-col lg:mt-6 mt-0">
        <p className="text-[20px] font-normal max-w-[700px]">{description}</p>
        <button
          onClick={() => {
            window.location.href = "/contact";
          }}
          className="px-[32px] py-[16px] bg-white text-[16px] text-black rounded-[8px] max-w-[184px] mt-[26px] 
                     transition-all duration-300 ease-in-out 
                     hover:bg-primary hover:text-white 
                     hover:shadow-lg hover:scale-105 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
