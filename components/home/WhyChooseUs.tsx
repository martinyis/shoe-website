import React from "react";
import Wrapper from "../structure/Wrapper";
import MainTittle from "@/components/ui/MainTittle";
import Image from "next/image";

type QualityProps = {
  title: string;
  description: string;
  icon: string;
  iconWidth?: number;
};

type WhyChooseUsProps = {
  data: { title: string; description: string; icon: string }[];
};

const Quality = ({ title, description, icon, iconWidth }: QualityProps) => {
  return (
    <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="mx-auto items-center justify-center flex w-[36px] h-[36px] mb-4">
        <Image
          src={icon}
          alt={title}
          width={iconWidth ? iconWidth : 36}
          height={36}
          className="transition-all duration-300 ease-in-out group-hover:opacity-80"
        />
      </div>
      <h3 className="text-[20px] font-bold mt-[3px] text-center group-hover:text-primary transition-all duration-300 ease-in-out">
        {title}
      </h3>
      <p className="text-[16px] font-normal mt-[14px] text-gray text-center group-hover:text-black transition-all duration-300 ease-in-out">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  return (
    <div>
      <div className="mt-[96px] h-[1px] w-[100%] bg-primary"></div>
      <Wrapper>
        <div className="mt-[96px]">
          <MainTittle text="Why Choose Us" />
        </div>
        <div className="max-w-[1248px] mx-auto grid md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-8 mt-[50px] px-4 sm:px-6 lg:px-8">
          {data?.map((quality, index) => (
            <Quality
              key={index}
              title={quality.title}
              description={quality.description}
              icon={quality.icon}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyChooseUs;
