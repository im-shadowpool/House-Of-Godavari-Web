import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/icons/socialMediaIcons";

const socialMediaLinks = [
  { name: "Facebook", url: "https://google.com/", icon: <FacebookIcon /> },
  { name: "Instagram", url: "https://google.com/", icon: <InstagramIcon /> },
  { name: "Whatsapp", url: "https://google.com/", icon: <WhatsappIcon /> },
  { name: "Youtube", url: "https://google.com/", icon: <YoutubeIcon /> },
];

const footerMenuLinks = {
  Company: [
    { name: "About Us", url: "/about-us" },
    { name: "Our Story", url: "/our-story" },
    { name: "Manufacturing Process", url: "/manufacturing-process" },
    { name: "Quality Standards", url: "/quality-standards" },
    { name: "Careers", url: "/careers" },
  ],
  Products: [
    { name: "Traditional Sweets", url: "/products/traditional-sweets" },
    { name: "Dry Fruit Specials", url: "/products/dry-fruit-specials" },
    { name: "Festival Hampers", url: "/products/festival-hampers" },
    { name: "Bulk Orders", url: "/products/bulk-orders" },
    { name: "Gift Packs", url: "/products/gift-packs" },
  ],
  Support: [
    { name: "Contact Us", url: "/contact" },
    { name: "Shipping & Delivery", url: "/shipping-delivery" },
    { name: "Refund Policy", url: "/refund-policy" },
    { name: "Terms & Conditions", url: "/terms-conditions" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]
};

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="flex flex-col gap-12 pb-4 pt-24">
        {/* Section 1 */}
        <div className="flex gap-16 items-center justify-between ">
          {/* Logo + Image */}
          <div className="flex gap-4 items-center justify-start w-[550px] max-w-1/2">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={126}
              height={126}
            />
            <div className="flex flex-col gap-2">
              <h6>House of Godavari Foods</h6>
              <p>
                Authentic sweets inspired by the flavours of Godavari.
                From traditional recipes to modern delicacies.
              </p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex w-fit items-center justify-end gap-4">
            <h6>Follow us</h6>
            <div className="flex gap-2 items-center">
              {socialMediaLinks.map((item) => {
                return (
                  <div
                    className="IconItem"
                    id={`${item.name}Icon`}
                    key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {item.icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex gap-12 justify-between">
          <div className="w-[75%] flex">
            {Object.entries(footerMenuLinks).map(([section, links]) => (
              <div className="flex-1 gap-4 flex flex-col" key={section}>
                <h6 className="">{section}</h6>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.url} className="FooterLink">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <div className="flex flex-col gap-4">
              <h6>Registered Office:</h6>
              {/* Icon List */}
              <div className="flex flex-col gap-4">
<div className="flex gap-2 items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1} d="M8.496 4.439L4.247 6.91a1 1 0 0 0-.497.864V18.26a1 1 0 0 0 1.503.865l3.243-1.887a1.5 1.5 0 0 1 1.508 0l3.992 2.322a1.5 1.5 0 0 0 1.508 0l4.249-2.472a1 1 0 0 0 .497-.864V5.739a1 1 0 0 0-1.503-.865l-3.243 1.887a1.5 1.5 0 0 1-1.508 0L10.004 4.44a1.5 1.5 0 0 0-1.508 0Zm.754.311v11.8m5.5-9.1v11.8"></path></svg>
                <p>Plot No. 112, Riverdale Industrial Estate, Rajamahendravaram - 533101</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={1} d="M7.829 16.171a20.9 20.9 0 0 1-4.846-7.614c-.573-1.564-.048-3.282 1.13-4.46l.729-.728a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.42.42a1.81 1.81 0 0 0 0 2.56l3.84 3.841a1.81 1.81 0 0 0 2.56 0l.421-.42a2.11 2.11 0 0 1 2.987 0l1.707 1.707a2.11 2.11 0 0 1 0 2.987l-.728.728c-1.178 1.179-2.896 1.704-4.46 1.131a20.9 20.9 0 0 1-7.614-4.846Z"></path></svg>
                <p>+91 98765 43210</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><rect width={18.5} height={15.5} x={2.75} y={4.25} rx={3}></rect><path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8"></path></g></svg>
                <p>
                  hello@houseofgodavari.com
                </p>
              </div>
              </div>
              
            </div>

          </div>
        </div>
        {/* Section 3 */}
        <div className="flex gap-6 justify-between p-4 bg-(--green-700) rounded-sm ">
            <p className="text-[var(--text-light)]">
               © {new Date().getFullYear()} House of Godavari. All rights reserved.
            </p>
            <p className="text-[var(--text-light)]">
              Designed and Developed by ReromSpaces.com
            </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
