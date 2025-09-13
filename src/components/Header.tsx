import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "./WaitlistForm";

const Header = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <header className="navbar w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-sans text-2xl font-normal text-foreground">
            nuvori.
            <div className="text-sm text-foreground/60 font-normal">
              There is no We without Us
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#community" className="text-foreground/70 hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#story" className="text-foreground/70 hover:text-foreground transition-colors">
              Your Story
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="soft"
              size="sm"
              className="btn btn-secondary"
              onClick={() => alert("Call booking coming soon! For now, please use the 'Join the Waitlist' button and we'll reach out to schedule a call.")}
              aria-label="Book a 15-minute call"
            >
              Book a Call
            </Button>
            <Button
              variant="gentle"
              size="sm"
              className="btn btn-primary"
              onClick={() => setIsWaitlistOpen(true)}
              aria-label="Join the Nuvori waitlist"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>

      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        source="header"
      />
    </header>
  );
};

export default Header;