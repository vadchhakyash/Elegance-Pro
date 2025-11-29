import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function CTASection(){
    return(
        <section className="max-w-7xl mx-auto px-4 py-24">
                <Card className="p-12 md:p-16 bg-primary text-primary-foreground border-0 text-center">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Ready to Experience Excellence?
                  </h2>
                  <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Join thousands of satisfied customers and discover why Elegance Pro
                    is the choice of discerning individuals worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Start Your Journey Today
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                    >
                      Schedule a Demo
                    </Button>
                  </div>
                </Card>
              </section>
    )
}