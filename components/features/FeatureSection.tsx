import { Card } from "../ui/card";

export default function FeatureSection(){
    return(
        <section id="features" className="bg-card py-24">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16 space-y-4">
                    <h2
                      className="text-4xl md:text-5xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Why Choose Us
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We combine innovation with tradition to deliver products that
                      exceed expectations
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: "✨",
                        title: "Premium Quality",
                        description:
                          "Crafted with the finest materials and attention to detail, each product reflects our commitment to excellence.",
                      },
                      {
                        icon: "🛡️",
                        title: "Lifetime Guarantee",
                        description:
                          "We stand behind our products with a comprehensive lifetime warranty and dedicated customer support.",
                      },
                      {
                        icon: "🌍",
                        title: "Sustainable Design",
                        description:
                          "Environmentally conscious manufacturing processes ensure minimal impact while maximizing durability.",
                      },
                    ].map((feature, idx) => (
                      <Card
                        key={idx}
                        className="p-8 hover:shadow-lg transition border-border bg-background"
                      >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
    )
}