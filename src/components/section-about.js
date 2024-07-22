import Image from "next/image";
import { ContainerGrid } from "./container";

import imagemMulherApp from "@/assets/app.jpg";
import imagemMulherDona from "@/assets/dona.webp";

export function SectionAbout() {
  return (
    <section className="pt-40">
      <ContainerGrid>
        <div className="flex flex-col tablet:flex-row gap-x-4 desktop:gap-x-8 gap-y-4">
          <div className="w-full tablet:w-1/2">
            <small className="border-2 p-2 px-8 mb-8 border-r border-gray-600 rounded-full">
              Garçom na tela
            </small>
            <h2 className="text-4xl desktop:text-5xl font-bold gradient__text desktop:mb-8 mt-8 pb-8">
              A Solução Completa para Restaurantes
            </h2>
            <p>
              Garçom na tela é a solução definitiva para restaurantes que
              desejam oferecer um cardápio digital. Desenvolvido para tornar a
              gestão de pedidos simples e eficiente, nosso aplicativo oferece
              uma experiência única tanto para os donos de restaurantes quanto
              para seus clientes.
            </p>
          </div>

          <div className="w-full tablet:w-1/2 items-center justify-center flex mx-auto">
            <Image
              className="max-w-96 rounded-md mt-5 laptop:mt-0"
              src={imagemMulherApp}
              alt="imagemMulherApp"
            />
          </div>
        </div>

        <div className="flex flex-col tablet:flex-row gap-x-4 desktop:gap-x-8 gap-y-4 mt-40">
          <div className="order-2 tablet:order-1 w-full tablet:w-1/2 items-center justify-center flex mx-auto">
            <Image
              className="max-w-96 rounded-md mt-5 laptop:mt-0"
              src={imagemMulherDona}
              alt="imagemMulherApp"
            />
          </div>
          <div className="order-1 tablet:order-2 w-full tablet:w-1/2">
            <small className="border-2 p-2 px-8 mb-8 border-r border-gray-600 rounded-full">
              garçom na tela
            </small>
            <h2 className="text-4xl desktop:text-5xl font-bold gradient__text desktop:mb-8 mt-8 pb-8">
              Gestão Centralizada e Intuitiva
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iste ratione optio! Aliquid quo dolorum nesciunt
              ratione, eligendi, in magnam recusandae asperiores quam non
              deserunt voluptates quasi corrupti quidem quae!
            </p>
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
