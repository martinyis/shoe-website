import React from "react";

type DeArtProductDetailsProps = {
  videoUrl: string;
  description: string;
  presentation?: string;
};

const DeArtProductDetails = ({
  videoUrl,
  description,
  presentation,
}: DeArtProductDetailsProps) => {
  return (
    <div
      className={`flex lg:flex-col flex-row items-center gap-x-[64px] mt-[22px] mx-auto`}
    >
      {/* Video Section */}
      <div className="w-[50%] lg:w-full">
        <video
          src={videoUrl}
          controls
          className="rounded-[26px] w-full h-auto"
        />
      </div>

      {/* Description Section */}
      <div className="lg:w-full w-1/2 flex flex-col lg:mt-6 mt-0">
        <p className="text-[20px] font-normal max-w-[700px]">{description}</p>
        <div className="flex gap-4 mt-[26px]">
          <button
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="px-[32px] py-[16px] bg-white text-[16px] text-black rounded-[8px] max-w-[184px]
                     transition-all duration-300 ease-in-out 
                     hover:bg-primary hover:text-white 
                     hover:shadow-lg hover:scale-105 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
          </button>
          {presentation && (
            <a
              href={presentation}
              download
              className="px-[32px] py-[16px] bg-secondary text-[16px] text-black rounded-[8px] max-w-[184px]
                       transition-all duration-300 ease-in-out 
                       hover:bg-white hover:text-secondary hover:border hover:border-secondary
                       hover:shadow-lg hover:scale-105 
                       focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeArtProductDetails;
