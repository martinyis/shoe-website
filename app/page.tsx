// pages/y-warm.tsx
import ProductCards from "@/components/home/ProductCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MainTittle from "@/components/ui/MainTittle";
import Image from "next/image";

export default function YWarm() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[800px] md:h-[500px] sm:h-[300px] xs:h-[200px]">
        <Image
          src="/images/MainBanner.png"
          alt="UFA Banner"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="absolute inset-0"
        />
      </div>
      <div className="my-[97px] max-w-[765px] mx-auto">
        <MainTittle text="About Us" />
        <p className="mt-[42px] text-[18px] font-normal text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          aspernatur cupiditate minima itaque. Molestiae, accusantium adipisci.
          Culpa nam voluptatibus cupiditate ducimus temporibus numquam enim,
          aliquam nobis voluptatem nemo iste doloremque.
        </p>
      </div>
      <div className="my-[96px] pt-[96px]">
        <MainTittle text="Featured Products" />
        <div className="pt-[50px]">
          <ProductCards />
          <WhyChooseUs />
        </div>
      </div>
    </div>
  );
}
