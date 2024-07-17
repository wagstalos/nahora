import Image from "next/image";
import { ContainerGrid } from "./container";

export function SectionFooter() {
  return (
    <footer className="mt-40 bg-gradient-to-r from-blue-950 to-black-500">
      <hr className="border-t border-white border-opacity-20 mx-auto" />
      <ContainerGrid>
        <p className="text-center p-8">
          NaHora.App é um produto da empresa This Smart Solutions Razão Social:{" "}
          <br />
          DELLEAN SANTOS TEIXEIRA DESENVOLVIMENTO DE SOFTWARE LTDA
        </p>
      </ContainerGrid>
    </footer>
  );
}
