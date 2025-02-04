import React from "react";
import Wrapper from "../structure/Wrapper";
import MainTittle from "../ui/MainTittle";
import Image from "next/image";

type BenefitsProps = {
  title: string;
  description: string;
  icon: string;
  iconWidth?: number;
};
const BenefitCard = ({
  title,
  description,
  icon,
  iconWidth,
}: BenefitsProps) => {
  return (
    <div className="group p-6 rounded-lg  border-[1px] border-primary">
      <div className=" flex w-[36px] h-[36px] mb-4">
        <Image
          src={icon}
          alt={title}
          width={iconWidth ? iconWidth : 36}
          height={36}
        />
      </div>
      <h3 className="text-[20px] font-bold mt-[3px]  ">{title}</h3>
      <p className="text-[16px] font-normal mt-[14px] text-gray ">
        {description}
      </p>
    </div>
  );
};

const Benefits = () => {
  return (
    <Wrapper>
      <MainTittle center={false} text="Features & Benefits" />
      <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-8 mt-[50px] px-4 sm:px-6 lg:px-8">
        <BenefitCard
          title="Sustainability"
          description="Eco-friendly materials and sustainable practices."
          icon="/images/icons/Leaf.svg"
        />
        <BenefitCard
          title="Innovation"
          description="Cutting-edge designs and materials."
          icon="/images/icons/Lamp.svg"
          iconWidth={24}
        />
        <BenefitCard
          title="Quality"
          description="Premium materials and expert craftsmanship."
          icon="/images/icons/Quality.svg"
        />
      </div>
    </Wrapper>
  );
};

export default Benefits;
