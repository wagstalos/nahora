import Image from "next/image";
import { ContainerGrid } from "./container";

import imagemMulherApp from "@/assets/app.webp";
import imagemMulherDona from "@/assets/dona.webp";

export function SectionAbout() {
  return (
    <section className="pt-40">
      <ContainerGrid>
        <div className="flex flex-col tablet:flex-row gap-x-4 desktop:gap-x-8 gap-y-4">
          <div className="w-full tablet:w-1/2">
            <small className="border-2 p-2 px-8 mb-8 border-r border-green-600 rounded-full">
              Nahora.app
            </small>
            <h2 className="text-4xl desktop:text-5xl font-bold gradient__text desktop:mb-8 mt-8 pb-8">
              A Solução Completa para Agendamentos
            </h2>
            <p>
              O Nahora.app é a solução definitiva para lojas, barbearias,
              clínicas e qualquer negócio que dependa de agendamentos.
              Desenvolvido para tornar a gestão de horários simples e eficiente,
              nosso aplicativo oferece uma experiência única tanto para os donos
              de empresas quanto para seus clientes.
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
            <small className="border-2 p-2 px-8 mb-8 border-r border-green-600 rounded-full">
              Nahora.app
            </small>
            <h2 className="text-4xl desktop:text-5xl font-bold gradient__text desktop:mb-8 mt-8 pb-8">
              Gestão Centralizada e Intuitiva
            </h2>
            <p>
              Com o Nahora.app, os donos de empresas podem gerenciar múltiplas
              empresas e suas respectivas filiais em uma única plataforma. Cada
              profissional de cada empresa ou filial pode ter sua agenda
              personalizada, garantindo uma organização impecável.
            </p>
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
