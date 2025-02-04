"use client";
import Wrapper from "@/components/structure/Wrapper";
import Line from "@/components/ui/Line";
import ProductDetails from "@/components/product/ProductDetails";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Benefits from "@/components/product/Benefits";
import ProductGallery from "@/components/product/ProductGallery";
import Specs from "@/components/product/Specs";
import MainTittle from "@/components/ui/MainTittle";
import Link from "next/link";
import Transfrom from "@/components/product/Transfrom";

const Product = () => {
  const [data, setData] = useState<any>({});
  const pathname = usePathname();

  useEffect(() => {
    // Extract slug from pathname
    const slug = pathname.split("/").pop();

    const getInfo = async () => {
      try {
        const response = await fetch(`/products/${slug}.json`);
        const info = await response.json();
        setData(info[0]);
      } catch (error) {
        console.error("Failed to fetch product info:", error);
      }
    };

    if (slug) {
      getInfo();
    }
  }, [pathname]);

  return (
    <div>
      <Line />
      <Wrapper>
        <div className="mt-[60px] mb-[48px]">
          <h1 className="text-[48px] font-bold">{data.name}</h1>
          {data.gallery && data.description && (
            <ProductDetails
              imageUrl={`/images/products/${data.gallery[0]}`}
              altText={data.name}
              description={data.description}
            />
          )}
        </div>
      </Wrapper>
      <Line />
      <div className="mt-[65px]">
        <Benefits features={data.features} />
      </div>
      <div className="mt-[137px]">
        {data.gallery && <ProductGallery images={data.gallery} />}
      </div>
      <div className="mt-[180px]">
        <Line />
      </div>
      <div className="mt-[65px] mb-[280px]">
        {data.specs && <Specs specs={data.specs} />}
      </div>
    </div>
  );
};

export default Product;
