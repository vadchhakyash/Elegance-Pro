import { Star } from "lucide-react";
import { Card } from "../ui/card";

export default function TestimonialSection(){
    return(
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
    )
}