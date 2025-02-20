import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { getProductInfoArray } from "@/lib/functions/info";
import ShoeProduct from "./ShoeProduct";
// import HandbagProduct from "./HandbagProduct";

const ProductCards = () => {
  const [shoeInfo, setShoeInfo] = useState<any>([]);
  const [handBagInfo, setHandBagInfo] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductInfoArray();
        const fetchedShoes: any[] = [];
        const fetchedHandbags: any[] = [];

        for (const link of data) {
          const response = await fetch(`/products/${link}`);
          const info = await response.json();

          if (info[0].slug === "y-warm") {
            fetchedShoes.push(info[0]); // Store shoe info
          } else if (info[0].slug === "handbag-model") {
            fetchedHandbags.push(info[0]); // Store handbag info
          }
        }

        setShoeInfo(fetchedShoes);
        setHandBagInfo(fetchedHandbags);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Slide direction="up" duration={2000} damping={0.2} triggerOnce>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 px-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Render Shoes */}
            {shoeInfo.length > 0 ? (
              shoeInfo.map((shoe: any) => (
                <ShoeProduct
                  key={shoe.slug}
                  title={shoe.name}
                  description={shoe.shortdescription}
                  src={`/images/products/shoe.svg`}
                  slug={shoe.slug}
                />
              ))
            ) : (
              <p>No shoes available.</p>
            )}

            {/* Render Handbags */}
            {/* {handBagInfo.length > 0 ? (
              handBagInfo.map((bag) => (
                <HandbagProduct
                  key={bag.slug}
                  title={bag.name}
                  description={bag.shortdescription}
                  src={`/images/products/handbag.svg`}
                  slug={bag.slug}
                />
              ))
            ) : (
              <p>No handbags available.</p>
            )} */}
          </>
        )}
      </div>
    </Slide>
  );
};

export default ProductCards;
