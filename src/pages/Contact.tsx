import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Thanks! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const mapQuery = encodeURIComponent(RESTAURANT.address);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center animate-fade-up mb-14">
          <p className="text-accent font-medium tracking-widest text-sm mb-3">GET IN TOUCH</p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Visit Us</h1>
          <p className="text-muted-foreground text-lg">
            Stop by, give us a call, or send a message — we'd love to hear from you.
          </p>
        </div>

        <div className="container grid lg:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/60">
              <div className="flex items-start gap-4 mb-5">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-0.5">Address</p>
                  <p className="text-muted-foreground text-sm">{RESTAURANT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-5">
                <Phone className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold mb-0.5">Phone</p>
                  <p className="text-muted-foreground text-sm">{RESTAURANT.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary shrink-0 mt-1" size={20} />
                <div className="flex-1">
                  <p className="font-semibold mb-2">Hours</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {RESTAURANT.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span><span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft border border-border/60 aspect-[4/3]">
              <iframe
                title="Yum Rise Cafe location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 space-y-5 h-fit">
            <h2 className="font-display text-2xl">Send a message</h2>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
            </div>
            <Button type="submit" className="w-full shadow-warm" size="lg">Send Message</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
