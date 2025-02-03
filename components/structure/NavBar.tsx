// Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Squash as Hamburger } from "hamburger-react";
type Props = {};

const Navbar = (props: Props) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<{ name: string; slug: string }[]>(
    []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/website/info.json");
        const data = await response.json();
        console.log(data[0].products);
        setProducts(data[0].products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleLinkClick = (): void => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleScrollLock = () => {
      document.body.style.overflow = navbarOpen ? "hidden" : "auto";
    };
    handleScrollLock();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navbarOpen]);

  return (
    <header className="max-w-[1800px] mx-auto px-10 md:px-5">
      {/* Desktop Navbar */}
      <nav className="flex md:hidden h-[120px] justify-between items-center text-white text-[16px] font-normal">
        <Logo width={194} height={100} />
        <ul className="flex gap-[19px] items-center">
          <li className="hover:text-secondary">
            <Link href="/">Home</Link>
          </li>
          {products.map((product) => (
            <li key={product.slug} className="hover:text-secondary">
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
          <li className="hover:text-secondary">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:block gap-[66px] hidden">
        <div className="flex items-center justify-between mt-10">
          <Logo width={94} height={45} />
          <div className="z-50 right-0">
            <Hamburger
              toggled={navbarOpen}
              toggle={setNavbarOpen}
              duration={0.3}
              easing="ease-in"
              color="#ffffff"
            />
          </div>
        </div>

        {/* Burger Menu */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-[100%] h-screen z-10 ${
            navbarOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{
            background: "linear-gradient(135deg, #003300, #002244)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <ul className="text-[23px] font-normal text-center text-white flex flex-col gap-10 pt-[60px]">
            <li className="hover:text-secondary">
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            {products.map((product) => (
              <li key={product.slug} className="hover:text-secondary">
                <Link
                  href={`/product/${product.slug}`}
                  onClick={handleLinkClick}
                >
                  {product.name}
                </Link>
              </li>
            ))}
            <li className="hover:text-secondary">
              <Link href="#contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
