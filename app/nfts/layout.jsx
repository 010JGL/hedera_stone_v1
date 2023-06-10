
'use client'

import Footer from "../components/footer/footer";
import NavbarNfts from "../components/navbar_nft/NavbarNfts";

export default function NftsLayout ({ children }){
  return (
    <section>
      <NavbarNfts></NavbarNfts>
      {children}
      <Footer></Footer>
    </section>
  );
}