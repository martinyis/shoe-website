export const fetchProducts = async () => {
  try {
    const response = await fetch("/website/info.json");
    const data = await response.json();
    return data[0].products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductInfoArray = async () => {
  const products = await fetchProducts();
  return products.map((product: any) => product.info);
};
