import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductCard = () => {
  return (
    <div className="p-[25px] border-[1px] border-primary rounded-[8px]">
      <div className="">
        <Image
          className="rounded-[8px]"
          src="/images/productImage.png"
          width={344}
          height={192}
          alt="Product Image"
        />
      </div>
      <h2 className="text-[20px] pt-[22px] font-bold">Premium Leather</h2>
      <p className="pt-[8px] text-[16px] font-normal text-gray max-w-[358px]">
        Sustainable sourced premium leather for luxury
      </p>
      <Link
        href="/product/1"
        className="text-secondary text-[16px] font-normal"
      >
        <p className="mt-[19px]">Learn more →</p>
      </Link>
    </div>
  );
};

const ProductCards = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-row gap-x-[32px]">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductCards;
