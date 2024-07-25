import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

export function SectionBanner() {
  return (
    <section className="pt-40">
      <ContainerGrid>
        <TitleSection title="Seu pedido em instantes" subtitle="Praticidade" />
        <div className="w-full h-auto bg-gradient-to-r from-pink-500 to-rose-500 gap-x-4 desktop:gap-x-8 gap-y-4 rounded-xl py-10 laptop:py-0 px-2 laptop:px-0">
          <div className="flex flex-col desktop:flex-row relative mt-0 desktop:mt-20">
            <div className="text-center laptop:text-start">
              <div className="laptop:p-8">
                <h2 className="text-3xl laptop:text-4xl/snug font-poppins mb-4 mt-5">
                  Faça seu pedido sem ter que esperar o garçom
                </h2>

                <p className="text-base laptop:text-xl mb-10 max-w-4xl mt-8">
                  Desfrute de uma experiência única com nosso serviço de
                  atendimento por tablet. Com apenas alguns toques, você pode
                  acessar todo o nosso menu, fazer pedidos e solicitar serviços
                  adicionais, tudo sem ter que esperar pelo garçom. É mais
                  conveniência e agilidade para você aproveitar cada momento da
                  sua refeição
                </p>
              </div>
            </div>

            <div className="w-1/2 bg-banner bg-no-repeat bg-left rounded-xl">
              {/* <Image src={phone} alt="phone" quality={90} /> */}
            </div>
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
