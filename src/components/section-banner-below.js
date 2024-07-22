import Image from "next/image";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import phone from "@/assets/phone-mockup-dark.png";

export function SectionBanner() {
  return (
    <section className="pt-40">
      <ContainerGrid>
        <TitleSection
          title="Notificações elegantes e eficiente"
          subtitle="Notificações"
        />
        <div className="w-full h-auto gradient__bg-banner gap-x-4 desktop:gap-x-8 gap-y-4 rounded-xl py-10 laptop:py-0 px-2 laptop:px-0">
          <div className="grid grid-cols-1 tablet:grid-cols-3 relative mt-0 desktop:mt-40">
            <div className="tablet:col-span-2 text-center laptop:text-start">
              <div className="p-8">
                <h2 className="text-3xl laptop:text-4xl/snug font-poppins mb-4 mt-5 ">
                  Notifique seus clientes por Email e Whatsapp automaticamente
                </h2>

                <p className="text-base laptop:text-xl mb-10 max-w-4xl mt-8">
                  Notifique seus clientes por email e também pelo whatsapp, com
                  o NaHora.app você consegue enviar deixar seus clientes
                  atualizados dos seus agendamentos e tudo isso de forma
                  automática!
                </p>
              </div>
            </div>

            <div className="w-full bg-banner bg-no-repeat bg-cover">
              {/* <Image src={phone} alt="phone" quality={90} /> */}
            </div>
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
