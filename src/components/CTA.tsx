import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="story" className="py-20 bg-gentle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground">
            Your Story Matters
          </h2>
          
          <p className="text-xl text-foreground/80 leading-relaxed">
            We're building nuvori with and for couples like you. 
            Share your experience and help us create something that truly serves your needs.
          </p>
          
          <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/30 shadow-soft">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Tell us about your journey. What's been the hardest part? 
              What would make the biggest difference in your daily life together?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gentle" size="lg" className="text-base px-8 py-4">
                Join the Waitlist
              </Button>
              <Button variant="soft" size="lg" className="text-base px-8 py-4">
                Book a 15-Minute Call
              </Button>
            </div>
          </div>
          
          <p className="text-foreground/60 font-medium">
            Help us build something that truly serves couples like you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;