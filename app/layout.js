import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Raleway } from "next/font/google";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "AF Rack Installations",
  description: "angelDova",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
