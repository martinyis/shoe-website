import Image from "next/image";
import YwarmLogo from "../ui/YwarmLogo";
import Link from "next/link";
import { useState } from "react";
import useSingleProduct from "@/lib/hooks/useSingleProduct";
import ProductCard from "./ProductCard";
type HotspotContent = {
  title: string;
  description: string;
  slug: string;
};

const InteractiveHandBag = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<HotspotContent>({
    title: "",
    description: "",
    slug: "",
  });
  const [buttonPosition, setButtonPosition] = useState({
    top: "0%",
    left: "0%",
  });

  const { product: deart } = useSingleProduct({ name: "deart" });
  const { product: maydiang } = useSingleProduct({ name: "maydiang" });

  const handleHotspotClick = (
    content: HotspotContent,
    top: string,
    left: string
  ) => {
    setButtonPosition({ top, left });
    setPopupContent(content);
    setShowPopup(true);
  };

  // Custom button component with layered effects
  const HotspotButton = ({
    top,
    left,
    onClick,
  }: {
    top: string;
    left: string;
    onClick: () => void;
  }) => (
    <button
      className="group absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
      onClick={onClick}
    >
      {/* Outer ring - permanent pulse */}
      <span className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" />

      {/* Middle layer - slow pulse */}
      <span className="absolute inset-0 rounded-full bg-secondary/30 animate-pulse" />

      {/* Inner circle - static */}
      <span className="absolute inset-1 rounded-full bg-secondary transition-all duration-300 group-hover:scale-110 group-active:scale-95" />

      {/* Hover ring */}
      <span className="absolute inset-0 rounded-full border-2 border-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />

      {/* Click ripple */}
      <span className="absolute inset-0 rounded-full bg-secondary/40 opacity-0 group-active:opacity-100 group-active:scale-150 transition-all duration-500" />
    </button>
  );

  return (
    <div className="mx-auto p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] max-w-[500px] md:mx-auto">
      <div className="relative w-full aspect-[16/9]">
        <Image
          className="rounded-[13px] object-cover mx-auto"
          src="/images/products/interactive-handbag.svg"
          alt="Product Image"
          width={400}
          height={200}
        />

        <HotspotButton
          top="50%"
          left="49%"
          onClick={() =>
            handleHotspotClick(
              {
                title: deart.name || "",
                description: deart.shortdescription,
                slug: deart.slug,
              },
              "50%",
              "49%"
            )
          }
        />

        <HotspotButton
          top="75%"
          left="49%"
          onClick={() =>
            handleHotspotClick(
              {
                title: maydiang.name,
                description: maydiang.shortdescription,
                slug: maydiang.slug,
              },
              "75%",
              "49%"
            )
          }
        />

        {/* Styled Black Popup - Now positioned above the button */}
        {showPopup && (
          <div
            className="absolute bg-black p-5 shadow-xl rounded-lg w-72 md:w-52 z-50 animate-fadeIn border border-primary"
            style={{
              bottom: `calc(100% - ${buttonPosition.top})`,
              left: buttonPosition.left,
              transform: "translateX(-50%) translateY(-20px)", // Center horizontally and add some space above button
            }}
          >
            {/* Triangle pointer - Now pointing down */}
            <div
              className="absolute w-3 h-3 bg-black border-r border-b border-primary transform rotate-45"
              style={{
                left: "50%",
                bottom: "-7px",
                marginLeft: "-6px",
              }}
            />

            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200 text-xl font-bold"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            {/* Content Structure */}
            <ProductCard
              title={popupContent.title}
              description={popupContent.description}
              src={`/images/products/maydiang.png`}
              slug={popupContent.slug}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveHandBag;
