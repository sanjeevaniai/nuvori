const Quote = () => {
  const testimonials = [
    {
      quote: "Finally, a space where we don't have to explain why we're both exhausted and grateful at the same time.",
      attribution: "Anonymous couple, breast cancer, married 8 years, ages 34 & 36"
    },
    {
      quote: "Other couples here understand that some days 'fine' means you both cried, but you're still holding on.",
      attribution: "Anonymous couple, lung cancer, married 15 years, ages 52 & 49"
    },
    {
      quote: "No one tells us to 'stay positive' here. We can be real about how hard this is.",
      attribution: "Anonymous couple, leukemia, married 6 years, ages 29 & 31"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center space-y-6">
                <blockquote className="space-y-4">
                  <p className="font-sans text-lg lg:text-xl text-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="w-12 h-px bg-accent mx-auto"></div>
                  <p className="text-xs text-foreground/60 font-medium tracking-wide">
                    — {testimonial.attribution.toUpperCase()}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;