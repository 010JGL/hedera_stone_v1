import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";

import WalletProvider from "./context/walletContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hedera Stone",
  description: "Hedera Stone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style precedence="default" href="1">
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap');
      </style>
      <WalletProvider>
        <body className={inter.className}>{children}</body>
      </WalletProvider>
    </html>
  );
}
