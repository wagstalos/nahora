import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "./container";
import logo from "@/assets/logo.svg";
import IconHamburguer from "@/assets/icon-hamburger.svg";

const itemsNav = ["Funcionalidades", "NFTs", "Rank", "FAQ"];

export function Header() {
  return (
    <header className="absolute top-0 left-0 py-6 w-full laptop:py-5">
      <ContainerGrid className="flex items-center justify-center desktop:justify-between">
        <h2 className="text-2xl">
          Na<span className="font-bold text-green-primary">Hora</span>.app
        </h2>
        <div
          className="hidden laptop:flex flex-1 max-w-nav-header 
        items-center justify-between"
        >
          <nav className="flex gap-12">
            {itemsNav.map((item, index) => (
              <Link
                href={`#${item}`}
                key={index}
                className="font-medium font-inter hover:text-green-primary transition-colors ease-linear"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button
            className="bg-green-500 py-3 px-7 
          rounded-full font-medium hover:bg-green-700 transition-all ease-linear"
          >
            Quero testar grátis
          </button>
        </div>

        {/* <button
          className="w-10 h-10 flex items-center justify-center border
         border-white border-opacity-5 rounded bg-white bg-opacity-5 laptop:hidden"
        >
          <Image src={IconHamburguer} alt="menu" />
        </button> */}
      </ContainerGrid>
    </header>
  );
}
