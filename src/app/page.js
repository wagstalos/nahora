import { SectionAbout } from "@/components/section-about";
import { SectionBannerHero } from "@/components/section-hero";
import { SectionCards } from "@/components/section-cards";
import { SectionVideo } from "@/components/section-videos";
import { SectionBanner } from "@/components/section-banner-below";

export default function Home() {
  return (
    <section className="mx-auto w-full items-center justify-center gradient__bg">
      <SectionBannerHero />
      <SectionVideo />
      <SectionBanner />
      <SectionAbout />
      <SectionCards />
    </section>
  );
}
