"use client";

import { usePathname } from "next/navigation";

import Footer from "../components/footer/footer";
import NavbarNfts from "../components/navbar_nft/NavbarNfts";

import WalletProvider from "../context/walletContext";

export default function NftsLayout({ children }) {
  const path = usePathname();

  return (
    <section>
      <WalletProvider>
        <NavbarNfts props={path}></NavbarNfts>
        {children}
        <Footer></Footer>
      </WalletProvider>
    </section>
  );
}
