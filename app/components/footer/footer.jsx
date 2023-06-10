import React, { useState } from "react";

import Image from "next/image";

import footerIcons from "../../../public/images/FooterIcons.png";

export default function Footer() {

  return (
    <div className="footer-box">
      <div>Footer</div>
      <div className="footer-icons">
        <Image src={footerIcons} width={30} height={30} alt="Various partner icons"></Image>
      </div>
    </div>
  )
}