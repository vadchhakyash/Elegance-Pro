"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import FeatureSection from "@/components/features/FeatureSection";
import TestimonialSection from "@/components/features/TestimonialSection";
import PricingSection from "@/components/features/PricingSection";
import CTASection from "@/components/features/CTASection";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <FeatureSection/>

      {/* Testimonials Section */}
      <TestimonialSection/>

      {/* Pricing Section */}
     <PricingSection/>

      {/* CTA Section */}
      <CTASection/>

      {/* Footer */}
      <Footer />
     
    </div>
  );
}
