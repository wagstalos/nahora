"use client";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";
import { Accordion, AccordionItem } from "@nextui-org/react";

export function SectionFaq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="py-40 gradient__bg">
      <ContainerGrid>
        <TitleSection title="Tire suas dúvidas" subtitle="FAQ" />
        <div className="laptop:max-w-w-80 flex align-center justify-center mx-auto">
          <Accordion variant="bordered">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </ContainerGrid>
    </section>
  );
}
