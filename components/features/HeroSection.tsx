import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection(){
    return(
        <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Experience Timeless Elegance
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the perfect blend of sophistication and functionality.
                Our premium collection is designed for those who appreciate
                quality and excellence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Start Your Journey{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted bg-transparent"
              >
                Learn More
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="text-sm">
                <div className="font-semibold text-foreground">10,000+</div>
                <div className="text-muted-foreground">Satisfied Customers</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">5 Stars</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg shadow-lg overflow-hidden  max-[776px]:order-first md:order-none">
            <img
              src="/premium-product-collection-luxury-items.jpg"
              alt="Premium Product Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    )
}