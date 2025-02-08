import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductInfoArray } from "@/lib/functions/info";
import { Slide } from "react-awesome-reveal";
import YwarmLogo from "../ui/YwarmLogo";

type CardProps = {
  title: string;
  description: string;
  src: string;
  slug: string;
};

const ProductCard = ({ title, description, src, slug }: CardProps) => {
  return (
    <div className="p-6 border border-primary rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] max-w-[500px] md:mx-auto">
      <div className="relative w-full aspect-[16/9]">
        <Image
          className="rounded-lg object-cover"
          src={src}
          alt="Product Image"
          fill
          sizes="(max-width: 500px) 100vw, 500px"
        />
      </div>

      {slug === "y-warm" ? (
        <div className="pt-6 font-bold">
          <YwarmLogo width={40} height={40} />
        </div>
      ) : (
        <h2 className="text-xl pt-6 font-bold">{title}</h2>
      )}
      <p className="pt-2 text-base font-normal text-gray">{description}</p>
      <Link
        href={`/product/${slug}`}
        className="inline-block mt-5 text-secondary text-base font-normal transition-all duration-300 hover:text-primary hover:underline"
      >
        Learn more →
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
    <Slide direction="up" duration={2000} damping={0.2} triggerOnce>
      <div className="max-w-[1280px] mx-auto grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 px-5">
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
    </Slide>
  );
};

export default ProductCards;
