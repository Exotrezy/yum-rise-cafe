import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT, TOAST_ORDER_URL } from "@/lib/constants";

export const Footer = () => (
  <footer className="bg-foreground text-background mt-20">
    <div className="container py-16 grid gap-10 md:grid-cols-4">
      <div>
        <h3 className="font-display text-2xl text-gradient-gold mb-3">Yum Rise Cafe</h3>
        <p className="text-background/70 text-sm leading-relaxed">
          Bold Thai flavors made fresh, served with warmth. Visit us or order online for pickup.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-accent">Visit</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" />{RESTAURANT.address}</li>
          <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" />{RESTAURANT.phone}</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-accent flex items-center gap-2"><Clock size={16}/>Hours</h4>
        <ul className="space-y-1 text-sm text-background/70">
          {RESTAURANT.hours.map((h) => (
            <li key={h.day} className="flex justify-between gap-4">
              <span>{h.day}</span><span>{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-accent">Explore</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li><Link to="/menu" className="hover:text-accent transition-smooth">Menu</Link></li>
          <li><Link to="/about" className="hover:text-accent transition-smooth">About</Link></li>
          <li><Link to="/reviews" className="hover:text-accent transition-smooth">Reviews</Link></li>
          <li><a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">Order Online</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10 py-6 text-center text-xs text-background/50">
      © {new Date().getFullYear()} Yum Rise Cafe. All rights reserved.
    </div>
  </footer>
);
