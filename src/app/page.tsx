import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  FeaturesSection,
  FooterCtaSection,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FooterCtaSection />
    </main>
  );
}
