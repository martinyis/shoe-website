"use client";
import useFetchHomeInfo from "@/lib/hooks/useHomeInfo";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Brands = () => {
  const { homeInfo, isLoading, error } = useFetchHomeInfo();
  const marqueeRef = useRef(null);

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
      <div className="max-w-7xl mx-auto px-4">
        <Fade cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-10 text-text-title">
            Brands We Work With
          </h2>
        </Fade>

        <div className="relative py-12">
          <div className="marquee-container">
            <div ref={marqueeRef} className="marquee-track">
              {/* First set of brands */}
              {homeInfo.brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="marquee-item flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
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
              ))}
              {/* Duplicate set for seamless looping */}
              {homeInfo.brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="marquee-item flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
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
              ))}
              {/* Third set for extra smooth looping */}
              {homeInfo.brands.map((brand, index) => (
                <div
                  key={`third-${index}`}
                  className="marquee-item flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
