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
      <WalletProvider>
        <body className={inter.className}>{children}</body>
      </WalletProvider>
    </html>
  );
}
