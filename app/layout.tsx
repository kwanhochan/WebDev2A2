/*
 * File: layout.tsx
 * Made by: Kwan Ho Chan
 * Date: Oct 30th
 * Description: This is the root layout that Next.js wraps around every page in the app.
 * Its only input is the children prop, which is whatever page is being shown.
 * It brings in the global tailwind styles and gives the website a light grey background.
 * It places the navbar above the page content and the footer below it, so both would appear on every page.
 * It outputs the full html page: navbar at the top, the page in the middle, footer at the bottom.
 */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Page metadata 
// The title that shows in the browser tab.
export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "View, search, add and remove students at New Generation High School.",
};

// Props
interface RootLayoutProps {
  children: React.ReactNode;
}

// the layout
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      {/* flex flex-col + flex-1 below push the Footer to the bottom on short pages */}
      <body className="bg-slate-100 min-h-screen flex flex-col">
        <Navbar />

        {/* The page (StudentPortal) lands here */}
        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
