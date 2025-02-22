"use client";
import InteractiveImages from "@/components/home/InteractiveImages";
import ProductCards from "@/components/home/ProductCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MainTittle from "@/components/ui/MainTittle";
import useFetchHomeInfo from "@/lib/hooks/useHomeInfo";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function YWarm() {
  const { homeInfo, isLoading, error } = useFetchHomeInfo();

  return (
    <div className="w-full">
      {/* Banner with Fade Effect */}
      <div className="relative w-full h-[1000px] md:h-[500px] sm:h-[300px] xs:h-[200px]">
        <Fade duration={3000} triggerOnce>
          <Image
            src="/images/MainBannerCropped.svg"
            alt="UFA Banner"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="absolute inset-0"
          />
        </Fade>
      </div>

      {/* About Us Section with Slide Effect */}
      <div className="my-[97px] max-w-[765px] mx-auto">
        <MainTittle text="About Us" />
        <Slide direction="up" duration={1500} triggerOnce>
          <p className="mt-[42px] text-[18px] sm:text-[14px] font-normal text-center">
            {homeInfo?.about}
          </p>
        </Slide>
      </div>

      {/* Featured Products with Smooth Slide Effect */}
      <div className="my-[96px] pt-[96px] sm:pt-[50px]">
        <MainTittle text="Featured Products" />
        <div className="pt-[50px]">
          {/* <ProductCards /> */}
          <InteractiveImages />
          <Fade>
            <WhyChooseUs data={homeInfo?.whychooseus ?? []} />
          </Fade>
        </div>
      </div>
    </div>
  );
}
