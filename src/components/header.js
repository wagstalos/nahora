import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "./container";
import logo from "@/assets/logo.svg";
import IconHamburguer from "@/assets/icon-hamburger.svg";

const itemsNav = ["Funcionalidades", "Solução", "Configuração"];

export function Header() {
  return (
    <header className="absolute top-0 left-0 py-6 w-full laptop:py-5">
      <ContainerGrid className="flex items-center w-full justify-center desktop:justify-between">
        <Image src={logo} alt="logotio" width={180} quality={100} />
        <div
          className="hidden laptop:flex
        items-center justify-between"
        >
          {/* <nav className="flex gap-12">
            {itemsNav.map((item, index) => (
              <Link
                href={`#${item}`}
                key={index}
                className="font-medium font-inter hover:text-green-primary transition-colors ease-linear"
              >
                {item}
              </Link>
            ))}
          </nav> */}

          <button className="bg-gradient-to-r from-rose-500  via-pink-500 to-pink-500 py-3 px-7 rounded-full font-medium hover:bg-gradient-to-l hover:from-pink-500 hover:via-rose-500 hover:to-rose-500  transition-background ease-linear">
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
