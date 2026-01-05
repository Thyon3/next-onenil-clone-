import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Mission from "@/components/Mission";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import CTABlocks from "@/components/CTABlocks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SelectedWorks />
      <Mission />
      <Clients />
      <Services />
      <CTABlocks />
      <Footer />
    </main>
  );
}
