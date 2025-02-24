import React from "react";
import Wrapper from "../structure/Wrapper";
import MainTittle from "@/components/ui/MainTittle";
import { div } from "framer-motion/client";

type Spec = {
  name: string;
  spec: string;
};

type Specs = {
  specs: Spec[];
};

const Specs = ({ specs }: Specs) => {
  return (
    <Wrapper>
      <MainTittle text="Technical Specifications" center={false} />
      <div className="mt-[34px] grid grid-cols-2 sm:grid-cols-1 gap-x-[70px] gap-y-[16px] md:gap-x-[40px]">
        {specs.map((item, index) => (
          <div
            key={index}
            className="flex justify-between h-[40px] items-center border-b-[1px] border-primary"
          >
            <p className="text-[16px] font-semibold md:text-[14px]">
              {item.name}
            </p>
            <p className="text-[16px] text-right font-normal md:text-[14px]">
              {item.spec}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Specs;
