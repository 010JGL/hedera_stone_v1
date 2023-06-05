
'use client'

import NavbarUp from '../components/navbar_upload/NavbarUp';

export default function UpLayout ({ children }){
  return (
    <section>
      <NavbarUp></NavbarUp>
      {children}
    </section>
  );
}