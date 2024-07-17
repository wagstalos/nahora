import { SectionAbout } from "@/components/section-about";
import { SectionBanner } from "@/components/section-banner";
import { SectionCards } from "@/components/section-cards";
import { SectionVideo } from "@/components/section-videos";
import { TitleSection } from "@/components/title-section";

export default function Home() {
  return (
    <section className="mx-auto w-full items-center justify-center gradient__bg">
      <SectionBanner />
      <SectionVideo />
      <SectionAbout />
      <SectionCards />
    </section>
  );
}
