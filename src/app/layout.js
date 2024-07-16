import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "NaHora.app",
  description:
    "Ofereça a melhor experiência de agendamento para o seu cliente.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
