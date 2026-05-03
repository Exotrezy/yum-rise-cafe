import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";
import { TOAST_ORDER_URL } from "@/lib/constants";
import { Flame } from "lucide-react";

const Menu = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/60 to-background">
        <div className="container text-center max-w-2xl animate-fade-up">
          <p className="text-accent font-medium tracking-widest text-sm mb-3">OUR MENU</p>
          <h1 className="font-display text-5xl md:text-6xl mb-5">Crafted with Care</h1>
          <p className="text-muted-foreground text-lg mb-7">
            Every dish is made to order with fresh ingredients and authentic Thai technique.
          </p>
          <Button asChild size="lg" className="shadow-warm">
            <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">Order Online</a>
          </Button>
        </div>
      </section>

      <div className="container py-16 space-y-20">
        {menu.map((cat) => (
          <section key={cat.name}>
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-primary">{cat.name}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {cat.items.map((item) => (
                <article
                  key={item.name}
                  className="flex gap-5 bg-card rounded-2xl p-5 border border-border/60 shadow-soft hover:shadow-warm transition-smooth"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={160}
                      height={160}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-3 mb-1.5">
                      <h3 className="font-display text-xl flex items-center gap-2 leading-tight">
                        {item.name}
                        {item.popular && <Flame size={14} className="text-primary shrink-0" />}
                      </h3>
                      <span className="text-primary font-semibold whitespace-nowrap">${item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Menu;
