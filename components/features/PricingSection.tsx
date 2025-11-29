import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function PricingSection(){
    return(
         <section id="pricing" className="bg-card py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for individuals",
                features: [
                  "Access to all products",
                  "Email support",
                  "1-year warranty",
                  "Free shipping",
                ],
              },
              {
                name: "Professional",
                price: "$79",
                description: "Best for families",
                featured: true,
                features: [
                  "All Starter benefits",
                  "Priority support",
                  "Lifetime warranty",
                  "Free returns",
                  "Exclusive access",
                ],
              },
              {
                name: "Elite",
                price: "$159",
                description: "For collectors",
                features: [
                  "All Professional benefits",
                  "Personal concierge",
                  "Custom options",
                  "VIP events",
                  "Premium packaging",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 flex flex-col border-border transition ${
                  plan.featured
                    ? "md:scale-105 shadow-xl bg-secondary"
                    : "bg-background"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.featured ? "text-card-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.featured
                      ? "text-card-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div
                  className={`text-4xl font-bold mb-6 ${
                    plan.featured ? "text-card-foreground" : "text-foreground"
                  }`}
                >
                  {plan.price}
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <Button
                  className={`w-full mb-8 ${
                    plan.featured
                      ? "bg-card text-card-foreground hover:bg-card/90"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Get Started
                </Button>
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 mt-0.5 shrink-0 ${ 
                          plan.featured ? "text-card-foreground" : "text-accent" 
                        }`}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-card-foreground"
                            : "text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}