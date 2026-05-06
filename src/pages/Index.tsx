import { Link } from "react-router-dom";
import { ArrowRight, Flame, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ReviewsSection } from "@/components/ReviewsSection";
import { TOAST_ORDER_URL } from "@/lib/constants";
import heroImg from "@/assets/hero-food.jpg";
import chicken_satay from "@/assets/dish-chickensatay.jpg";
import noodles from "@/assets/dish-noodles.jpg";
import rice from "@/assets/dish-rice.jpg";
import crispy_chicken from "@/assets/dish-crispychicken.jpg";

const popularDishes = [
  { name: "Chicken Satay", desc: "Ultra-crispy, perfectly sauced.", price: "12.95", img: chicken_satay },
  { name: "Pad Thai", desc: "Wok-tossed with basil & chili.", price: "16.95", img: noodles },
  { name: "Crab Fried Rice", desc: "Served in a fresh pineapple.", price: "15.95", img: rice },
  { name: "Crispy Chicken Larb", desc: "Sweet chili glaze, fresh herbs.", price: "13.95", img: crispy_chicken },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Thai food spread at Yum Rise Cafe"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container text-center text-background animate-fade-up">
          <p className="text-accent tracking-[0.3em] text-xs md:text-sm mb-5 font-medium">
            AUTHENTIC THAI · MADE FRESH
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]">
            Bold Thai Flavors,<br />
            <span className="text-gradient-gold">Crafted with Heart</span>
          </h1>
          <p className="text-lg md:text-xl text-background/85 max-w-2xl mx-auto mb-10">
            From ultra-crispy wings to sizzling drunken noodles — every dish at Yum Rise Cafe is made to order with bold, authentic flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-warm text-base h-12 px-8">
              <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">
                Order Now <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 bg-background/10 backdrop-blur-sm border-background/40 text-background hover:bg-background hover:text-foreground">
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <p className="text-accent font-medium tracking-widest text-sm mb-3">OUR STORY</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Where every bite tells a story.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              At Yum Rise Cafe, we bring the soul of Thailand to your table. Each dish is built around fresh ingredients, time-honored techniques, and the bold, balanced flavors that make Thai cuisine unforgettable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're stopping in for lunch or ordering for the family, expect warmth, quality, and food made with care — every single time.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Read Our Story <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Flame, title: "Bold Flavor", text: "Authentic Thai recipes, made to order." },
              { icon: Heart, title: "Made with Love", text: "Fresh ingredients, no shortcuts." },
              { icon: Award, title: "5-Star Rated", text: "Loved by our community." },
              { icon: Heart, title: "Warm Service", text: "Friendly faces, every visit." },
            ].map((f, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-6 hover:shadow-soft transition-smooth">
                <f.icon className="text-primary mb-3" size={24} />
                <h3 className="font-display text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="animate-fade-up">
              <p className="text-accent font-medium tracking-widest text-sm mb-3">GUEST FAVORITES</p>
              <h2 className="font-display text-4xl md:text-5xl">Popular Dishes</h2>
            </div>
            <Button asChild variant="ghost" className="self-start md:self-end">
              <Link to="/menu">See full menu <ArrowRight className="ml-1" size={16}/></Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularDishes.map((d) => (
              <article key={d.name} className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-smooth hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h3 className="font-display text-xl">{d.name}</h3>
                    <span className="text-primary font-semibold whitespace-nowrap">${d.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl mb-5">Hungry yet?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Order online for pickup in minutes — your favorites, made fresh and ready when you are.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-12 px-8 shadow-gold">
            <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">
              Start Your Order <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
