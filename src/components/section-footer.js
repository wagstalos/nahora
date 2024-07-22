import Image from "next/image";
import { ContainerGrid } from "./container";

export function SectionFooter() {
  return (
    <footer className="mt-40 bg-gradient-to-r from-blue-950 to-black-500">
      <hr className="border-t border-white border-opacity-20 mx-auto" />
      <ContainerGrid>
        <p className="text-center p-8">
          Produto da empresa <br />
          <a href="https://valhalladigital.com.br/">Valhalla Digital</a> <br />
        </p>
      </ContainerGrid>
    </footer>
  );
}
