import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";
import { SectionVideoTabs } from "./section-video-tabs";

export function SectionVideo() {
  return (
    <section className="py-40 bg-slate-900 " id="Funcionalidades">
      <ContainerGrid>
        <TitleSection
          subtitle="funcionalidades"
          title="A Solução Completa para Restaurantes"
        />

        <SectionVideoTabs />
      </ContainerGrid>
    </section>
  );
}
