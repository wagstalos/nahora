import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Providers } from "@/providers/next-iu";
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
  title: "Garçom na tela",
  description:
    "Ofereça a melhor experiência de cardápio digital para os seus clientes, organize seu estabelecimento e aumente seu faturamento experimente grátis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
