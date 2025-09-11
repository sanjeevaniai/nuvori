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
              <h1 className="font-sans text-4xl lg:text-5xl xl:text-6xl leading-tight text-foreground">
                We're surviving cancer,{" "}
                <span className="text-accent">but we're drifting apart.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-foreground/80 font-light leading-relaxed">
                Join other couples rebuilding what illness almost took away.
              </p>

              <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-soft">
                <p className="font-sans text-lg lg:text-xl text-accent mb-2">
                  nuvori helps caregiving couples feel like a team again.
                </p>
                <p className="text-foreground/70">
                  Through gentle rituals, AI-assisted support, and a community that truly understands.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gentle"
                size="lg"
                className="text-base px-8 py-4"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Join the Waitlist
              </Button>
              <Button
                variant="soft"
                size="lg"
                className="text-base px-8 py-4"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Share Your Story
              </Button>
            </div>

            <p className="text-sm text-foreground/60">
              Help us build something that truly serves couples like you.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img
                src="/carousel_page_8_img_1.png"
                alt="A couple holding hands, showing emotional connection and support during difficult times"
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