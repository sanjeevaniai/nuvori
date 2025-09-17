import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "./WaitlistForm";

const Hero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <section className="min-h-[80vh] bg-gentle-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-sans text-4xl lg:text-5xl xl:text-6xl leading-tight text-foreground" style={{ fontWeight: 900, lineHeight: '1.1' }}>
                We survived cancer{" "}
                <span className="text-accent">but lost us along the way.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-foreground/80 font-light leading-relaxed">
                Surviving was hard. Staying close after has been even harder.
              </p>

              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-soft">
                <p className="font-sans text-lg lg:text-xl text-accent mb-2">
                  Nuvori helps caregiving couples reconnect.
                </p>
                <p className="text-foreground/70">
                  Through gentle rituals, smart support, and a community that truly understands.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground/80 font-medium">
                Join other couples rebuilding what illness almost took away.
              </p>
              <p className="text-base text-accent font-semibold">
                A stronger "us" starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gentle"
                  size="lg"
                  className="text-base px-8 py-4 btn btn-primary"
                  onClick={() => setIsWaitlistOpen(true)}
                  aria-label="Join the Nuvori waitlist"
                >
                  Join the waitlist
                </Button>
                <Button
                  variant="soft"
                  size="lg"
                  className="text-base px-8 py-4 btn btn-secondary"
                  onClick={() => alert("Share Your Story form coming soon! For now, please use the 'Join the Waitlist' button and we'll reach out to hear your story.")}
                  aria-label="Share your story via a short form"
                >
                  Share Your Story
                </Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img
                src="/carousel_page_8_img_1.png"
                alt="Two partners holding hands; caregiving is hard, and they're choosing each other."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        source="hero"
      />
    </section>
  );
};

export default Hero;