"use client";
import useFetchHomeInfo from "@/lib/hooks/useHomeInfo";
import React from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

const Brands = () => {
  const { homeInfo, isLoading, error } = useFetchHomeInfo();

  if (isLoading)
    return (
      <div className="p-10 text-center text-text-secondary">
        Loading brands...
      </div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-text-secondary">
        Error loading brands
      </div>
    );
  if (!homeInfo?.brands || homeInfo.brands.length === 0) return null;

  return (
    <section className="py-16 bg-black">
      <div className="max-w-[1280px] mx-auto px-4">
        <Fade cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-10 text-text-title">
            Trusted by Industry Leaders
          </h2>
        </Fade>

        {/* First, we reveal the container */}
        <Fade duration={1000} triggerOnce>
          <div className="relative overflow-hidden py-12 marquee-container">
            {/* Once the container is revealed, we animate the marquee */}
            <Zoom delay={500} cascade damping={0.05} triggerOnce>
              <div className="flex animate-marquee items-center">
                {[...homeInfo.brands, ...homeInfo.brands].map(
                  (brand, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={`/images/brands/${brand}`}
                          alt={brand as string}
                          fill
                          style={{ objectFit: "contain" }}
                          className="transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </Zoom>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Brands;
