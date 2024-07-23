import Image from "next/image";
import { ContainerGrid } from "./container";
import logo from "@/assets/logo.svg";
import Link from "next/link";
export function SectionFooter() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-black-500">
      <hr className="border-t border-white border-opacity-20 mx-auto" />
      <ContainerGrid className="flex items-center justify-center flex-col">
        <Image src={logo} alt="logotipo" width={300} className="p-8" />
        <p className="text-center pb-8">
          © 2024 Garçom na tela App. All rights reserved. <br />
          <Link href="https://valhalladigital.com.br/">
            Valhalla Digital
          </Link>{" "}
          <br />
        </p>
      </ContainerGrid>
    </footer>
  );
}
