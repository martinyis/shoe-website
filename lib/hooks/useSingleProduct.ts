import { useState, useEffect } from "react";

const useSingleProduct = ({ name }: { name: string }) => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!name) return; // Prevent fetch if no name is provided

    const fetchProducts = async () => {
      try {
        const response = await fetch(`/products/${name}.json`);
        const info = await response.json();
        setProduct(info[0]); // Uncommented to update state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [name]); // Added dependency array

  return { product };
};

export default useSingleProduct;
