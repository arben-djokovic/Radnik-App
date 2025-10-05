import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800 bg-white pt-16">
        <Header />
        {children}
      </body>
    </html>
  );
}
