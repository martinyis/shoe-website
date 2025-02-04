import React from "react";
import Wrapper from "../structure/Wrapper";
import Link from "next/link";
import MainTittle from "../ui/MainTittle";

const Transfrom = () => {
  return (
    <Wrapper>
      <MainTittle text="Ready to Transform Your Products?" />
      <div className="flex items-center mt-[34px] mb-[180px]">
        <Link
          href="/contact"
          className="px-[33px] py-[16px] border-[1px] max-w-[160px] mx-auto text-center rounded-[8px] text-[16px] border-primary"
        >
          Contact Us
        </Link>
      </div>
    </Wrapper>
  );
};

export default Transfrom;
