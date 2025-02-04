import React, { useEffect, useState } from "react";
import Wrapper from "../structure/Wrapper";
import MainTittle from "../ui/MainTittle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

type GalleryProps = {
  images: string[];
};

const ProductGallery = ({ images }: GalleryProps) => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: slidesPerView,
      spacing: 15,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <MainTittle text="Product Gallery" center={false} />
      <div ref={sliderRef} className="keen-slider mt-[50px]">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <div
              className="w-[400px] h-[300px] md:h-[200px] md:w-[350px] flex items-center justify-center
            sm:w-[300px] sm:h-[200px] sm:mx-auto
            "
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/images/products/${image}`}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="max-w-full max-h-full rounded-[8px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductGallery;
