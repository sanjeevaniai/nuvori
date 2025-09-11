const Footer = () => {
  return (
    <footer className="bg-footer-bg py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="font-sans text-2xl text-foreground">
              nuvori.
            </div>
            <p className="text-foreground/70 leading-relaxed max-w-md">
              Helping caregiving couples rebuild emotional intimacy, 
              reduce resentment, and feel like a team again.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Connect</h4>
            <div className="space-y-2">
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
                Join Waitlist
              </a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
                Book a Call
              </a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
                Community
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
                Your Story
              </a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-foreground/70 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            © 2024 nuvori. Built with love for couples who need it most.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;