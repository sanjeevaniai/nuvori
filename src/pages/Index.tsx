import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Features from "@/components/Features";
import GetLifeBack from "@/components/GetLifeBack";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Quote />
        <Features />
        <GetLifeBack />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
