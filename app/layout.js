import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="text-gray-800 h-full bg-white pt-16 md:pt-14">
        <Header />
        <main className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
