import { Button } from "@/components/ui/button";
import { Shield, Heart, MessageCircle } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      quote: "Finally, a space where we don't have to explain why we're both exhausted and grateful at the same time.",
      author: "Emma & David"
    },
    {
      quote: "Other couples here understand that some days 'fine' means you both cried, but you're still holding on.",
      author: "Maria & James"
    },
    {
      quote: "No one tells us to 'stay positive' here. We can be real about how hard this is.",
      author: "Lisa & Alex"
    }
  ];

  return (
    <section id="community" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground mb-6">
            A Safe Community That <span className="text-accent">Gets It</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Connect with other couples navigating serious illness together. 
            No toxic positivity. No judgment. Just real understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-sans text-xl text-foreground">Private & Moderated</h3>
            <p className="text-foreground/70">
              Carefully curated community with trained moderators who understand your journey.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-sans text-xl text-foreground">Real Support</h3>
            <p className="text-foreground/70">
              Share victories, struggles, and everything in between with couples who truly understand.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-sans text-xl text-foreground">Honest Conversations</h3>
            <p className="text-foreground/70">
              Talk about the parts of caregiving that no one else wants to hear about.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-soft">
              <p className="text-foreground/80 mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-foreground/60 font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gentle" size="lg" className="text-base px-8 py-4">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;