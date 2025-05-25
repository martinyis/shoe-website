import Image from "next/image";
import YwarmLogo from "../ui/YwarmLogo";
import Link from "next/link";
import { useEffect, useState } from "react";

type CardProps = {
  title: string;
  description: string;
  src: string;
  slug: string;
  presentation?: string;
};

const ProductCard = ({
  title,
  description,
  src,
  slug,
  presentation,
}: CardProps) => {
  const [brandLogos, setBrandLogos] = useState<string[]>([]);

  useEffect(() => {
    const fetchBrandLogos = async () => {
      try {
        const response = await fetch(`/products/${slug}.json`);
        const data = await response.json();
        if (data[0]?.brandLogos) {
          setBrandLogos(data[0].brandLogos);
        }
      } catch (error) {
        console.error("Failed to fetch brand logos:", error);
      }
    };

    if (slug) {
      fetchBrandLogos();
    }
  }, [slug]);

  return (
    <div className="flex">
      {/* Left Side - Title and Description */}
      <div className="flex-1 pr-4">
        {slug === "y-warm" ? (
          <div className="pt-6 font-bold">
            <YwarmLogo width={40} height={40} />
          </div>
        ) : (
          <h2 className="text-xl pt-6 font-bold">{title}</h2>
        )}
        <p className="pt-2 text-base font-normal text-gray">{description}</p>

        {presentation && (
          <a
            href={presentation}
            download
            className="inline-block mt-5 text-secondary text-base font-normal transition-all duration-300 hover:text-primary hover:underline"
          >
            Download →
          </a>
        )}
      </div>

      {/* Right Side - Brand Logos */}
      {brandLogos.length > 0 && (
        <div className="w-[120px]">
          <h3 className="text-sm font-medium text-gray-300 mb-2 pt-6">
            Brand Partners
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {brandLogos.slice(0, 4).map((logo, index) => (
              <div
                key={index}
                className="h-9 w-full relative bg-black border border-gray-800 rounded-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-white p-[1px] rounded-md">
                  <Image
                    src={logo}
                    alt={`Brand partner logo ${index + 1}`}
                    width={50}
                    height={30}
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
