import Image from "next/image";
import YwarmLogo from "../ui/YwarmLogo";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  src: string;
  slug: string;
  presentation?: string;
};

const ProductCard = ({
  title,
  description,
  src,
  slug,
  presentation,
}: CardProps) => {
  return (
    <div className="transition-all duration-300 max-w-[500px] md:mx-auto">
      {/* <div className="relative w-full aspect-[16/9]">
        <Image
          className="rounded-lg object-cover"
          src={src}
          alt="Product Image"
          fill
          sizes="(max-width: 500px) 100vw, 500px"
        />
      </div> */}

      {slug === "y-warm" ? (
        <div className="pt-6 font-bold">
          <YwarmLogo width={40} height={40} />
        </div>
      ) : (
        <h2 className="text-xl pt-6 font-bold">{title}</h2>
      )}
      <p className="pt-2 text-base font-normal text-gray">{description}</p>
      {presentation && (
        <a
          href={presentation}
          download
          className="inline-block mt-5 text-secondary text-base font-normal transition-all duration-300 hover:text-primary hover:underline"
        >
          Download →
        </a>
      )}
    </div>
  );
};

export default ProductCard;
