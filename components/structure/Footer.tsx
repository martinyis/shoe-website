"use client";
import React from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Line from "../ui/Line";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import useFetchProducts from "@/lib/hooks/useProducts";

const Footer = () => {
  const { products } = useFetchProducts();

  return (
    <div className="mb-[66px]">
      <Line />
      <Wrapper>
        <div className="mt-[49px] mb-[56px] max-w-[1200px] mx-auto flex justify-center md:flex-wrap md:justify-start gap-x-[220px] gap-y-[30px] lg:gap-x-[60px]">
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-secondary">
              Ultra Footwear Accelerator
            </h3>
            <ul className="mt-[19px]">
              <li className="text-[16px] max-w-[232px]">
                Founded in 2016 and based in Waltham, Massachusetts
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-secondary">
              Quick Links
            </h3>
            <ul className="mt-[19px] flex flex-col gap-y-[11px]">
              <li className="text-[16px] hover:text-secondary">
                <Link href="/">Home</Link>
              </li>
              {products.map((product) => (
                <li
                  key={product.slug}
                  className="text-[16px] hover:text-secondary"
                >
                  <Link href={`/product/${product.slug}`}>{product.name}</Link>
                </li>
              ))}
              <li className="text-[16px] hover:text-secondary">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-secondary">Contact</h3>
            <ul className="mt-[19px] flex flex-col gap-y-[11px]">
              <li className="text-[16px] flex gap-x-[8px]">
                <FaLocationDot width={12} height={16} color="#00BFFF" />
                <p className="max-w-[200px]">
                  303 Wyman St Ste 300, Waltham, Massachusetts, 02451, United
                  States
                </p>
              </li>
              <li className="text-[16px] flex gap-x-[8px] items-center">
                <FaPhone width={12} height={16} color="#00BFFF" />
                <p className="max-w-[200px]">+ 1 (781) 547-1766</p>
              </li>
              <li className="text-[16px] flex gap-x-[8px] items-center">
                <IoMdMail width={12} height={16} color="#00BFFF" />
                <p>wilsondeng@ultrafa.com</p>
              </li>
            </ul>
          </div>
        </div>
        <Line />
        <p className="text-center text-[16px] mt-[36px]">
          © 2025 Ultra Footwear Accelerator. All rights reserved.
        </p>
      </Wrapper>
    </div>
  );
};

export default Footer;
