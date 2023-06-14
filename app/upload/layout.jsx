
'use client'

import NavbarUp from "../components/navbar_upload/NavbarUp";
import Footer from "../components/footer/footer";

export default function UpLayout ({ children }){
  return (
    <section>
      <NavbarUp></NavbarUp>
      {children}
      <Footer></Footer>
    </section>
  );
}