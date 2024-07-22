import { ContainerGrid } from "./container";
import { SectionCardsInner } from "./section-cards-inner";
import { TitleSection } from "./title-section";

import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";

export function SectionCards() {
  return (
    <section className="pt-40 ">
      <div>
        <TitleSection
          title="Garçom na tela é a solução definitiva"
          subtitle="Configurações"
        />
        <p className="max-w-4xl mx-auto text-center text-gray-400">
          Garçom na tela é a solução definitiva para restaurantes que desejam
          oferecer um
          <strong> cardápio digital</strong> . Desenvolvido para tornar a gestão
          de pedidos simples e eficiente, nosso aplicativo oferece uma
          <strong>experiência única</strong> tanto para os donos de restaurantes
          quanto para seus clientes.
        </p>
        <div className="flex flex-col desktop:flex-row px-8 gap-3 mt-20">
          <SectionCardsInner
            image={icon1}
            title="Atendimento Rápido e Eficientes"
            description="Elimine a espera pelo garçom. Os clientes podem fazer seus pedidos diretamente pelo tablet, garantindo um serviço mais rápido e eficiente."
          />

          <SectionCardsInner
            image={icon2}
            title="Personalização de Pedidos"
            description="Permita que os clientes personalizem seus pedidos facilmente, adicionando ou removendo ingredientes de acordo com suas preferências, sem o risco de erros de comunicação."
          />

          <SectionCardsInner
            image={icon3}
            title="Atualização Instantânea do Cardápio"
            description="Atualize seu cardápio em tempo real, incluindo novos pratos, preços e promoções. As mudanças são refletidas instantaneamente nos tablets dos clientes."
          />
          <SectionCardsInner
            image={icon4}
            title="Feedback Imediato"
            description="Receba feedback dos clientes diretamente pelo tablet, permitindo melhorias contínuas no atendimento e na qualidade dos pratos."
          />
        </div>
      </div>
    </section>
  );
}
