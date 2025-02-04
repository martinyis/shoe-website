"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetchProducts from "@/lib/hooks/useProducts";
import { getProductInfoArray } from "@/lib/functions/info";
import { randomInt } from "crypto";

type CardProps = {
  title: string;
  description: string;
  src: string;
  slug: string;
};

const ProductCard = ({ title, description, src, slug }: CardProps) => {
  return (
    <div className="p-[25px] border-[1px] border-primary rounded-[8px] transition-all duration-300 hover:shadow-lg hover:scale-[1.05] max-w-[500px] md:mx-auto">
      <div className="">
        <Image
          className="rounded-[8px]"
          src={src}
          width={344}
          height={192}
          alt="Product Image"
        />
      </div>
      <h2 className="text-[20px] pt-[22px] font-bold">{title}</h2>
      <p className="pt-[8px] text-[16px] font-normal text-gray max-w-[358px]">
        {description}
      </p>
      <Link
        href={`/product/${slug}`}
        className="text-secondary text-[16px] font-normal transition-all duration-300 hover:text-primary hover:underline"
      >
        <p className="mt-[19px]">Learn more →</p>
      </Link>
    </div>
  );
};

const ProductCards = () => {
  const [cards, setCards] = useState<{}[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductInfoArray();
        data.forEach(async (link: string) => {
          const response = await fetch(`/products/${link}`);
          const info = await response.json();
          setCards((prev) => [...prev, info[0]]);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto flex flex-row gap-x-[32px] md:flex-col xl:gap-y-[32px]  sm:flex-col xs:flex-col px-[20px]">
      {cards.map((card: any, index: number) => (
        <ProductCard
          key={index}
          title={card.name}
          description={card.shortdescription}
          src={`/images/products/${card.gallery[0]}`}
          slug={card.slug}
        />
      ))}
    </div>
  );
};

export default ProductCards;
