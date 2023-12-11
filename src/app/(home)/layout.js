import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="container">
          <NavigationBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
