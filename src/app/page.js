import { SectionAbout } from "@/components/section-about";
import { SectionBannerHero } from "@/components/section-hero";
import { SectionCards } from "@/components/section-cards";
import { SectionVideo } from "@/components/section-videos";
import { SectionBanner } from "@/components/section-banner-below";
import { SectionFooter } from "@/components/section-footer";
import { SectionTutorial } from "@/components/section-tutorial";

export default function Home() {
  return (
    <section className="mx-auto w-full items-center justify-center gradient__bg">
      <SectionBannerHero />
      <SectionVideo />
      <SectionBanner />
      <SectionAbout />
      <SectionCards />
      <SectionTutorial />
      <SectionFooter />
    </section>
  );
}
