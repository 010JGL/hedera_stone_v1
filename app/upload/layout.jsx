"use client";
import { usePathname } from "next/navigation";

import NavbarUp from "../components/navbar_upload/NavbarUp";
import Footer from "../components/footer/footer";

export default function UpLayout({ children }) {
  const path = usePathname();
  console.log(`path:`, path);

  return (
    <section>
      <NavbarUp props={path}></NavbarUp>
      {children}
      <Footer></Footer>
    </section>
  );
}
