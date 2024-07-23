import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "./container";
import logo from "@/assets/logo.svg";
import IconHamburguer from "@/assets/icon-hamburger.svg";

const itemsNav = ["Funcionalidades", "Solução", "Configuração"];

export function Header() {
  return (
    <header className="absolute top-0 left-0 py-6 w-full laptop:py-5">
      <ContainerGrid className="flex items-center w-full justify-between">
        <Image src={logo} alt="logotipo" width={180} quality={100} />
        <div className="justify-between">
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
          <Link
            href="https://hgeneroso.com/login"
            className="flex bg-gradient-to-r from-rose-500 via-pink-500 to-pink-500 py-3 px-7 rounded-full font-medium hover:bg-gradient-to-l hover:from-pink-500 hover:via-rose-500 hover:to-rose-500  transition-background ease-linear"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
              <path d="M3 12h13l-3 -3" />
              <path d="M13 15l3 -3" />
            </svg>
            Login
          </Link>
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
