import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState<
    { name: string; slug: string; info: string }[]
  >([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/website/info.json");
        const data = await response.json();
        setProducts(data[0].products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const productInfoArray = products.map((product) => product.info);

  return { products, productInfoArray };
};

export default useFetchProducts;
