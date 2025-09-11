import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const GetLifeBack = () => {
  const services = [
    { icon: Clock, text: "Appointment scheduling & reminders" },
    { icon: MapPin, text: "Local cleaning & meal prep services" },
    { icon: Phone, text: "Pharmacy coordination & refills" },
    { icon: CheckCircle, text: "Insurance & paperwork assistance" }
  ];

  return (
    <section className="py-20 bg-gentle-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-sans text-3xl lg:text-4xl text-foreground">
                Get Your <span className="text-accent">Life Back</span>
              </h2>
              
              <p className="text-xl text-foreground/80 leading-relaxed">
                Our AI reduces logistical burnout by automating care coordination 
                and connecting you to local support when you need it most.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                Stop drowning in appointments, medications, and endless phone calls. 
                Let technology handle the details while you focus on healing together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/30">
                  <service.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{service.text}</span>
                </div>
              ))}
            </div>
            
            <Button variant="gentle" size="lg" className="text-base px-8 py-4">
              Learn How It Works
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/30 shadow-soft">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground mb-1">AI Assistant</p>
                    <p className="text-sm text-foreground/70">
                      "I've scheduled your oncology follow-up for Thursday at 2pm and arranged 
                      grocery delivery for tomorrow. The pharmacy confirmed your prescription is ready."
                    </p>
                  </div>
                </div>
                
                <div className="border-l-2 border-accent/30 pl-6 space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-foreground/80">
                      <strong>Massage therapy</strong> session booked for Saturday 3pm
                    </p>
                    <p className="text-xs text-foreground/60 mt-1">Local provider • Insurance verified</p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-foreground/80">
                      <strong>House cleaning</strong> scheduled for Monday
                    </p>
                    <p className="text-xs text-foreground/60 mt-1">Trusted local service • Background checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetLifeBack;