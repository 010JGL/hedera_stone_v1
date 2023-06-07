
'use client'

import NavbarNfts from "../components/navbar_nft/NavbarNfts";

export default function NftsLayout ({ children }){
  return (
    <section>
      <NavbarNfts></NavbarNfts>
      {children}
    </section>
  );
}