import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import interior from "@/assets/interior.jpg";

const About = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <p className="text-accent font-medium tracking-widest text-sm mb-3">OUR STORY</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
            A taste of Thailand,<br />in every bite.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Yum Rise Cafe was born from a simple love: bold, authentic Thai cooking made the way it's meant to be — fresh, fragrant, and full of character.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            From our ultra-crispy wings and sizzling drunken noodles to slow-simmered curries, we honor traditional recipes while crafting every plate to order. Quality ingredients, balanced flavors, and a warm welcome — that's the heart of who we are.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you're a longtime regular or visiting for the first time, we can't wait to share our food and our story with you.
          </p>
          <div className="flex gap-3">
            <Button asChild><Link to="/menu">Explore the Menu</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Visit Us</Link></Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={interior}
            alt="Yum Rise Cafe interior"
            loading="lazy"
            width={1600}
            height={1000}
            className="rounded-3xl shadow-warm w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-gold hidden md:block">
            <p className="font-display text-3xl">5★</p>
            <p className="text-sm">Loved by guests</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary/40">
      <div className="container grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Quality First", text: "Fresh produce, premium proteins, and house-made sauces — never shortcuts." },
          { title: "Bold & Authentic", text: "Traditional Thai flavors built on balance: sweet, sour, salty, spicy." },
          { title: "Made with Care", text: "Every dish is cooked to order by people who love what they do." },
        ].map((v) => (
          <div key={v.title} className="bg-card p-8 rounded-2xl shadow-soft">
            <h3 className="font-display text-2xl text-primary mb-3">{v.title}</h3>
            <p className="text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
