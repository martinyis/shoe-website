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
      <div className="w-full">
        <Fade duration={3000} triggerOnce>
          <div className="w-full h-auto relative ">
            <Image
              src="/images/MainBannerCropped.svg"
              alt="UFA Banner"
              width={1920}
              height={1080}
              priority
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </Fade>
      </div>

      {/* About Us Section with Slide Effect */}
      <div className="my-24 max-w-[765px] mx-auto px-4">
        <MainTittle text="About Us" />
        <Slide direction="up" duration={1500} triggerOnce>
          <p className="mt-10 text-lg sm:text-sm font-normal text-center">
            {homeInfo?.about}
          </p>
        </Slide>
      </div>

      {/* Featured Products with Smooth Slide Effect */}
      <div className="my-24 pt-24 sm:pt-12">
        <MainTittle text="Featured Products" />
        <div className="pt-12">
          <InteractiveImages />
          <Fade>
            <WhyChooseUs data={homeInfo?.whychooseus ?? []} />
          </Fade>
        </div>
      </div>
    </div>
  );
}
