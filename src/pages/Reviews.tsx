import { Layout } from "@/components/Layout";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { TOAST_ORDER_URL } from "@/lib/constants";

const Reviews = () => (
  <Layout>
    <section className="py-16 md:py-24 text-center">
      <div className="container max-w-2xl animate-fade-up">
        <p className="text-accent font-medium tracking-widest text-sm mb-3">TESTIMONIALS</p>
        <h1 className="font-display text-5xl md:text-6xl mb-5">Words from our guests</h1>
        <p className="text-muted-foreground text-lg mb-7">
          Exceptional flavor, friendly service, and a warm atmosphere — see what people love about Yum Rise.
        </p>
        <Button asChild size="lg" className="shadow-warm">
          <a href={TOAST_ORDER_URL} target="_blank" rel="noopener noreferrer">Try It Yourself</a>
        </Button>
      </div>
    </section>
    <ReviewsSection />
  </Layout>
);

export default Reviews;
