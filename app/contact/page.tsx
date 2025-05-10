"use client";
import React, { useState } from "react";
import Wrapper from "@/components/structure/Wrapper";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Dynamically import the Map component with ssr disabled
const Map = dynamic(
  () => import("../../components/contact/Map"), // We'll create this component separately
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[300px] bg-gray-800 rounded-[8px] flex items-center justify-center text-gray-400">
        Loading map...
      </div>
    ),
  }
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const position: [number, number] = [42.409677, -71.255185];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Message from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:biz@ultrafa.com?subject=${subject}&body=${body}`;
  };

  return (
    <Wrapper>
      <div className="mt-[36px] mb-[96px]">
        <h1 className="text-[36px] font-bold text-center">Contact Us</h1>

        <div className="mt-8 grid lg:grid-cols-1 lg:gap-y-[100px] grid-cols-2 gap-8 mx-auto">
          {/* Contact Form */}
          <div className="bg-black rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[14px] text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-primary rounded-[8px] p-[15px] text-[#ADAEBC] text-[16px] mt-[8px]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[14px] text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-primary rounded-[8px] p-[15px] text-[#ADAEBC] text-[16px] mt-[8px]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-[14px] text-white">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-primary rounded-[8px] p-[15px] text-[#ADAEBC] text-[16px] mt-[8px]"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="text-[14px] text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black border border-primary rounded-[8px] p-[15px] text-[#ADAEBC] text-[16px] mt-[8px]"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#4AFF93] to-[#26F0F1] text-black text-[16px] font-semibold rounded-[8px] transition-all duration-300 hover:opacity-90 hover:scale-[0.99] hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 mt-[30px]">
            <div className="bg-black p-[25px] border-primary border-[1px] rounded-[8px]">
              <h2 className="text-[20px] font-semibold text-white mb-[19px]">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-2">
                  <FaLocationDot width={20} height={20} color="#00FF00" />
                  303 Wyman St Ste 300, Waltham, Massachusetts, 02451, United
                  States
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt width={20} height={20} color="#00FF00" />
                  +1 (781) 547-1766
                </p>
                <p className="flex items-center gap-2">
                  <MdEmail width={20} height={20} color="#00FF00" />
                  biz@ultrafa.com
                </p>
              </div>
            </div>

            <div className="w-full h-[300px]">
              <Map position={position} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
