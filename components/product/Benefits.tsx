"use client";
import React from "react";
import Wrapper from "../structure/Wrapper";
import MainTittle from "../ui/MainTittle";
import Image from "next/image";

type BenefitCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  iconWidth?: number;
};

const BenefitCard = ({
  title,
  subtitle,
  icon,
  iconWidth,
}: BenefitCardProps) => {
  return (
    <div className="group p-6 rounded-lg border-[1px] border-primary">
      <div className="flex w-[36px] h-[36px] mb-4">
        <Image
          src={icon}
          alt={title}
          width={iconWidth ? iconWidth : 36}
          height={36}
        />
      </div>
      <h3 className="text-[20px] font-bold mt-[3px]">{title}</h3>
      <p className="text-[16px] font-normal mt-[14px] text-gray">{subtitle}</p>
    </div>
  );
};

type BenefitsProps = {
  features?: {
    title: string;
    subtitle: string;
    icon: string;
  }[];
};

const Benefits: React.FC<BenefitsProps> = ({ features }) => {
  // If no features are passed, use default features
  const displayFeatures = features || [
    {
      title: "Sustainability",
      subtitle: "Eco-friendly materials and sustainable practices.",
      icon: "/images/icons/Leaf.svg",
    },
    {
      title: "Innovation",
      subtitle: "Cutting-edge designs and materials.",
      icon: "/images/icons/Lamp.svg",
    },
    {
      title: "Quality",
      subtitle: "Premium materials and expert craftsmanship.",
      icon: "/images/icons/Quality.svg",
    },
  ];

  return (
    <Wrapper>
      <MainTittle center={false} text="Features & Benefits" />
      <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-8 mt-[50px] sm:px-6 lg:px-8">
        {displayFeatures.map((feature, index) => (
          <BenefitCard
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            icon={feature.icon}
            iconWidth={feature.icon.includes("Lamp.svg") ? 24 : undefined}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Benefits;
