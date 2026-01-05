import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Mission from "@/components/Mission";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import CTABlocks from "@/components/CTABlocks";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWorks />
      <Mission />
      <Clients />
      <Services />
      <CTABlocks />
    </main>
  );
}
