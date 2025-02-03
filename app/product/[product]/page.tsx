import Navbar from "@/components/structure/NavBar";
import React from "react";

const Product = ({ params }: { params: { product: string } }) => {
  const slug = params.product;
  return (
    <div>
      <div>Product {slug}</div>
    </div>
  );
};

export default Product;
