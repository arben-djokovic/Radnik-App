import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800 bg-white pt-16 md:pt-14">
        <Header />
        <main className="min-h-[80vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
