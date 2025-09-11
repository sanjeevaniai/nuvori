import { Heart, Users, Calendar, MessageSquare, Shield, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Emotional Reconnection",
      description: "2-minute daily rituals that rebuild intimacy. AI-guided check-ins that help you express what's really happening inside.",
      items: ["Daily connection moments", "Guided emotional check-ins", "Communication prompts for hard conversations"]
    },
    {
      icon: Calendar,
      title: "Logistical Relief",
      description: "AI that handles the overwhelming details so you can focus on what matters most — each other.",
      items: ["Automated care coordination", "Smart scheduling", "Local service connections", "Pharmacy & appointment management"]
    },
    {
      icon: Users,
      title: "Safe Community",
      description: "Connect with other couples who understand your journey. No toxic positivity, just real support.",
      items: ["Private, moderated spaces", "Couples who truly get it", "Share wins and struggles safely"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl lg:text-4xl text-foreground mb-6">
            What nuvori Does
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We help you rediscover each other while managing the weight of serious illness. 
            No buzzwords, no false promises — just gentle, practical support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group">
                <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-sans text-xl lg:text-2xl text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <Sparkles className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;