import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/" },
  { name: "About", path: "/" },
  { name: "Shop", path: "/" },
  { name: "Contact", path: "/" },
];

export const Header: React.FC = () => {
  return (
    <header>
      <Container className="flex items-center justify-between ">
        {/* Image */}
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="Logo" width={118} height={156} />
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 items-center justify-between">
          {navLinks.map((item) => {
            return (
              <div className="MenuItem" key={item.name}>
                <Link href={item.path} className="MenuLink">
                  {item.name}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Icons */}

        <div className="flex gap-4 items-center justify-between">
          <div id="searchIcon">
           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20"></path></svg>
          </div>
          <div id="userIcon">
         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><circle cx={12} cy={8.196} r={4.446}></circle><path d="M19.608 20.25a7.608 7.608 0 0 0-15.216 0"></path></g></svg>
          </div>
          <div id="cartIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}><circle cx={9.549} cy={19.049} r={1.701}></circle><circle cx={16.96} cy={19.049} r={1.701}></circle><path d="m5.606 5.555l2.01 6.364c.309.978.463 1.467.76 1.829c.26.32.599.567.982.72c.435.173.947.173 1.973.173h3.855c1.026 0 1.538 0 1.972-.173c.384-.153.722-.4.983-.72c.296-.362.45-.851.76-1.829l.409-1.296l.24-.766l.331-1.05a2.5 2.5 0 0 0-2.384-3.252zm0 0l-.011-.037a7 7 0 0 0-.14-.42a2.92 2.92 0 0 0-2.512-1.84C2.84 3.25 2.727 3.25 2.5 3.25"></path></g></svg>
          </div>
        </div>
      </Container>
    </header>
  );
};
