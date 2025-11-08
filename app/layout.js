import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  title: 'Radnik App',
  description: 'Povezujemo vas sa proverenim radnicima u vašoj blizini.',
  icons: {
    icon: '/assets/favicon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="text-gray-800 h-full bg-white pt-16 md:pt-14">
        <Header />
        <Suspense fallback={null}>
          <main>
            {children}
          </main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
