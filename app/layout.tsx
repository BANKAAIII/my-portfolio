
import "@/app/globals.css";
import Shell from "@/components/layouts/shell";
import { Josefin_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import NavBar from "@/components/ui/navBar";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
}); 

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  // Explicitly add "100" and "200" to cover ultra-light utilities, 
  // and make sure strings are clean.
  weight: ["100", "200", "300", "400", "500", "600", "700"], 
  variable: "--font-josefin",
  display: "swap",
});

export default function RootLayout({children}: {children: React.ReactNode}) {


  return (
    <html lang="en" className={`${josefinSans.variable} ${inter.variable}`}>
      <body>
        <NavBar />
        <Shell>
          {children}
        </Shell>  

        </body>
      </html>
  )
} 