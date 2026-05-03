import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export const ReviewsSection = ({ compact = false }: { compact?: boolean }) => {
  const list = compact ? reviews.slice(0, 3) : reviews;
  return (
    <section className="py-20 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <p className="text-accent font-medium tracking-widest text-sm mb-3">LOVED BY OUR GUESTS</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">What People Are Saying</h2>
          <p className="text-muted-foreground">Real words from the people who keep coming back for more.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r, i) => (
            <article
              key={i}
              className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 hover:shadow-warm transition-smooth hover:-translate-y-1"
            >
              <Quote className="text-accent mb-4" size={28} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5 text-[15px]">"{r.quote}"</p>
              <p className="font-semibold text-sm text-primary">— {r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
