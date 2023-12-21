import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="container">
        <NavigationBar />
        {children}
      </div>
      <Footer />
    </>
  );
}
