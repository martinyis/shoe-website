"use client";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

type BrandLogosProps = {
  logos: string[];
  title?: string;
};

const BrandLogos = ({ logos, title = "Brand Partners" }: BrandLogosProps) => {
  if (!logos || logos.length === 0) return null;

  // Triple the logos for a perfectly seamless loop animation
  // Using exactly 3 copies ensures the animation can seamlessly transition
  const triplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <Fade cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            {title}
          </h2>
        </Fade>

        {/* Seamless infinite marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="marquee-container">
            <div className="marquee-track">
              {triplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="marquee-item mx-4 w-36 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-full p-3">
                    <Image
                      src={logo}
                      alt={`Brand partner ${(index % logos.length) + 1}`}
                      fill
                      style={{ objectFit: "contain", mixBlendMode: "multiply" }}
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

export default BrandLogos;
