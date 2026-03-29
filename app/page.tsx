import { HeroSection } from "@/components/hero-section";
import { MenuSection } from "@/components/menu-section";
import { AboutSection } from "@/components/about-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
