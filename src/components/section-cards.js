import { ContainerGrid } from "./container";
import { SectionCardsInner } from "./section-cards-inner";
import { TitleSection } from "./title-section";

import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";

export function SectionCards() {
  return (
    <section className="pt-40">
      <ContainerGrid>
        <TitleSection title="Automatização e Configurações Avançadas" />
        <p className="max-w-4xl flex mx-auto text-center text-gray-400">
          Nosso aplicativo permite uma série de configurações que automatizam o
          processo de agendamento, minimizando a necessidade de intervenção
          humana. Dentre essas configurações, destacam-se:
        </p>
        <div className="flex flex-col desktop:flex-row px-8 gap-3 mt-20">
          <SectionCardsInner
            image={icon1}
            title="Horário de Almoço e Horários Flexíveis"
            description=" Configure horários de trabalho específicos para cada profissional,
              incluindo dias e horários especiais."
          />

          <SectionCardsInner
            image={icon2}
            title="Aceite Automático de Agendamentos"
            description="Permita que os clientes agendem seus horários automaticamente."
          />

          <SectionCardsInner
            image={icon3}
            title="Bloqueio de Agendamentos Repetidos"
            description="Evite que o mesmo cliente faça múltiplos agendamentos sem querer e
              cause perda de horários."
          />
        </div>
      </ContainerGrid>
    </section>
  );
}
