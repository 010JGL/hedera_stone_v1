"use client";

import { usePathname } from "next/navigation";

import Footer from "../components/footer/footer";
import NavbarNfts from "../components/navbar_nft/NavbarNfts";

export default function NftsLayout({ children }) {
  const path = usePathname();
  console.log(`path:`, path);

  return (
    <section>
      <NavbarNfts props={path}></NavbarNfts>
      {children}
      <Footer></Footer>
    </section>
  );
}
