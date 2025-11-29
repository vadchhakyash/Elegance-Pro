"use client";

import { useState } from "react";
import { Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-foreground">Elegance Pro</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm text-foreground hover:text-accent transition">
              Features
            </a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-accent transition">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-accent transition">
              Pricing
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>
        </nav>
      </header> */}

      <header className="border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative">
          <div className="text-2xl font-bold tracking-tight text-foreground">
            Elegance Pro
          </div>
          <div className="hidden md:flex gap-8 items-center"></div>
          {/* Desktop nav (unchanged) */}
          <div className="hidden md:flex gap-8 items-center">
            {/* existing desktop nav items */}
            <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm text-foreground hover:text-accent transition">Features</a>
            <a href="#testimonials" className="text-sm text-foreground hover:text-accent transition">Testimonials</a>
            <a href="#pricing" className="text-sm text-foreground hover:text-accent transition">Pricing</a>
            <a href="#contact" className="text-sm text-foreground hover:text-accent transition">Contact</a>
            <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            {mobileMenuOpen ? (
              /* close icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile menu panel */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute left-4 right-4 top-full mt-2 bg-card border border-border rounded-lg p-4 z-50 shadow-lg">
              {" "}
              <nav className="flex flex-col gap-3">
                <a
                  href="#features"
                  className="px-3 py-2 rounded hover:bg-muted"
                >
                  Features
                </a>
                <a href="#pricing" className="px-3 py-2 rounded hover:bg-muted">
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="px-3 py-2 rounded hover:bg-muted"
                >
                  Testimonials
                </a>
              </nav>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Loved by Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Anderson",
              role: "Design Director",
              image: "/professional-woman-headshot.png",
              quote:
                "The quality and attention to detail is unmatched. It's clear that every aspect has been thoughtfully designed.",
            },
            {
              name: "Michael Chen",
              role: "CEO, Tech Startup",
              image: "/professional-man-headshot.png",
              quote:
                "Exceptional service and premium quality. This is the kind of product I recommend to everyone in my network.",
            },
            {
              name: "Emma Rodriguez",
              role: "Lifestyle Influencer",
              image: "/professional-woman-headshot.png",
              quote:
                "Truly luxurious. It's the perfect complement to my lifestyle and represents everything I value.",
            },
          ].map((testimonial, idx) => (
            <Card
              key={idx}
              className="p-8 bg-card border-border hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">{`"${testimonial.quote}"`}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
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
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">
                Elegance Pro
              </h3>
              <p className="text-muted-foreground text-sm">
                Crafting excellence through timeless design and premium quality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 Elegance Pro. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
